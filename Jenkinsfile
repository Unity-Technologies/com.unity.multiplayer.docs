properties([pipelineTriggers([githubPush()])])
import java.text.SimpleDateFormat

def BUCKET_NAME ="mp-docs-unity-it-fileshare-test"
def AKAMAI_URL ="docs-multiplayer-sandbox.unity3d.com"

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
      stage('Sync with bucket') {
         steps {
            script{
               sync_bucket(BUCKET_NAME, "sa-mp-docs")
            }
         }
      }
      stage('Akamai CDN purge data') {
         steps {
            script{
               akamai_purge(AKAMAI_URL, "akamai-api-token")
            }
         }
      }
   }
}

def sync_bucket(BUCKET, CREDS) {
    /* gsutil rsync -d will delete everything in the bucket that is not in the build dir and will update everything else */
    withCredentials([file(credentialsId: CREDS, variable: 'SERVICEACCOUNT')]) {
      sh label: '', script: """
      gcloud auth activate-service-account --key-file ${SERVICEACCOUNT}
      gsutil -m rsync -r -d build/ gs://${BUCKET}
      """
     }
}

def akamai_purge(AKAMAI_URL, CREDS) {
    withCredentials([file(credentialsId: CREDS, variable: 'EDGERC')]) {
      writeFile file: '/tmp/edgerc', text: readFile(EDGERC)
      sh label: '', script: """
      curl -sL https://github.com/akamai/cli-purge/releases/download/1.0.1/akamai-purge-1.0.1-linuxamd64 -o akamai
      chmod +x akamai
      ./akamai --section ccu --edgerc "/tmp/edgerc" invalidate https://${AKAMAI_URL}/
      """
     }
}
