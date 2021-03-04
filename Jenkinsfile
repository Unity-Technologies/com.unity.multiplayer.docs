properties([pipelineTriggers([githubPush()])])
import java.text.SimpleDateFormat

pipeline {
   agent {
      label "iit-jenkins-slave"
   }

    stages {
      stage('Install nodejs and yarn') {
         steps {
            sh 'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -'
            sh 'echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list'
            sh 'curl -fsSL https://deb.nodesource.com/setup_14.x | bash -'
            sh 'apt-get update && apt-get install -y nodejs yarn'
         }
      }
      stage('prepare env and install docusaurus') {
         steps {
            sh 'rm -rf temp'
            sh 'npx @docusaurus/init@latest init temp classic'
            sh 'yarn install'
         }
      }
      stage('Build documentation') {
         steps {
            sh 'yarn build'
         }
      }
      stage('Sync with bucket and purge Akamai') {
         steps {
            script{
               sync_bucket("sa-mp-docs")
               akamai_purge("akamai-api-token")
            }
         }
      }
   }
}

def sync_bucket(CREDS) {
    /* gsutil rsync -d will delete everything in the bucket that is not in the build dir and will update everything else */
    withCredentials([file(credentialsId: CREDS, variable: 'SERVICEACCOUNT')]) {
      sh label: '', script: """#!/bin/bash -xe
      gcloud auth activate-service-account --key-file ${SERVICEACCOUNT}
      echo "uptimecheck" > build/uptimecheck.html
      case ${env.GIT_BRANCH} in
        "origin/master")
          echo "Master branch - not adding a robots.txt file"
          gsutil -m rsync -r -d build/ gs://mp-docs-unity-it-fileshare-prd
          ;;
        "origin/staging")
          echo "Staging branch, adding robots.txt file"
          echo "User-agent: *\nDisallow: /" > build/robots.txt
          gsutil -m rsync -r -d build/ gs://mp-docs-stg-unity-it-fileshare-test
          ;;
        "origin/sandbox")
          echo "Sandbox branch, adding robots.txt file"
          echo "User-agent: *\nDisallow: /" > build/robots.txt
          gsutil -m rsync -r -d build/ gs://mp-docs-unity-it-fileshare-test
          ;;
      esac
      """
     }
}

def akamai_purge(CREDS) {
    withCredentials([file(credentialsId: CREDS, variable: 'EDGERC')]) {
      writeFile file: '/tmp/edgerc', text: readFile(EDGERC)
      sh label: '', script: """#!/bin/bash -xe
      curl -sL https://github.com/akamai/cli-purge/releases/download/1.0.1/akamai-purge-1.0.1-linuxamd64 -o akamai
      chmod +x akamai
      case ${env.GIT_BRANCH} in
        "origin/master")
          echo "Master branch"
          ./akamai --section ccu --edgerc "/tmp/edgerc" invalidate https://docs-multiplayer.unity3d.com/
          ;;
        "origin/staging")
          echo "Staging branch"
          ./akamai --section ccu --edgerc "/tmp/edgerc" invalidate https://docs-multiplayer-stg.unity3d.com/
          ;;
        "origin/sandbox")
          echo "Sandbox branch"
          ./akamai --section ccu --edgerc "/tmp/edgerc" invalidate https://docs-multiplayer-sandbox.unity3d.com/
          ;;
      esac
      """
     }
}
