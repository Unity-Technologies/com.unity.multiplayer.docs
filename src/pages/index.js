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
    imageUrl: 'img/land-feature1b.jpg',
    description: (
      <>
        We’re evolving our solution, built on MLAPI, in the open to become a netcode foundation that you can depend on – 
        customizable and extensible to meet the needs of many multiplayer game types.
      </>
    ),
    link: (
      <>
      <a href="docs/tutorials/helloworldintro" class="land-link">Learn more about MLAPI</a>
      </>
    ),
  },
  {
    title: 'Leverage Transport Features',
    imageUrl: 'img/land-feature2b.jpg',
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
    title: 'Learn with Boss Room',
    imageUrl: 'img/land-feature3b.jpg',
    description: (
      <>
        <a href="https://unity.com/demos/small-scale-coop-sample" target="_blank">Boss Room</a> is a small scale cooperative game sample project – built on top of the new Unity Networking Core library – 
        designed to help you explore the concepts and patterns behind a multiplayer game flow.
      </>
    ),
    link: (
      <>
      <a href="https://unity.com/demos/small-scale-coop-sample" target="_blank">Learn more about Boss Room</a>
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
          <img className="featureImage" src={imgUrl} alt={title} />
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
      <header className={clsx('hero hero--primary hero-banner')}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons-pages">
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
