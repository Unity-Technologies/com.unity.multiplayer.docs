import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const features = [
  {
    title: 'Develop with MLAPI',
    imageUrl: 'img/land-feature.jpg',
    description: (
      <>
        Unity Multiplayer now includes MLAPI, one of the oldest and most actively developed game networking
        library out there. It is designed to work with any game, including high-performance, large scale 
        and small co-op games. MLAPI is open source.
      </>
    ),
    link: (
      <>
      <a href="docs/getting-started/about-mlapi" class="land-link">Learn more about MLAPI</a>
      </>
    ),
  },
  {
    title: 'Transport Features',
    imageUrl: 'img/land-feature2.jpg',
    description: (
      <>
        Use the <code>com.unity.transport</code> package to add multiplayer and network features to your project. Documentation
        includes workflows for minimal and jobified client and server setups, pipeline information, events, and more.
      </>
    ),
    link: (
      <>
      <a href="docs/transport/introduction">Learn more about Transport</a>
      </>
    ),
  },
  {
    title: 'Learn with Unity',
    imageUrl: 'img/land-feature3.jpg',
    description: (
      <>
        Getting started with Hello World and continue with code samples and turorials for creating multiplayer games.
        All tutorials use Boss Room game samples, with concepts, code, and videos to walk through game design from 
        start to finish. Great for all levels of developer experience.
      </>
    ),
    link: (
      <>
      <a href="docs/learn/introduction">Learn more with Unity</a>
      </>
    )
  },
];

function Feature({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center land-feature">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div class="land-box"><p>{description}</p></div>
      <p class="land-link">{link}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This site provides Unity Multiplayer documentation, references, and sample code tutorials.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/getting-started/about-mlapi')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
