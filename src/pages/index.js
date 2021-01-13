import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Dependable Solution',
    imageUrl: 'img/dependable.png',
    description: (
      <>
        The MLAPI is one of the oldest and most actively developed game networking
        library out there. As a direct result of this, it offers many more
        features than other libraries.
      </>
    ),
  },
  {
    title: 'Open Source',
    imageUrl: 'img/opensource.png',
    description: (
      <>
        The MLAPI is completeley free and open source, this means that it comes with 
        no hidden CCU's or other limitations. Just a great networking library for you to use.
      </>
    ),
  },
  {
    title: 'General Purpose',
    imageUrl: 'img/purpose.png',
    description: (
      <>
        The MLAPI is a general purpose networking library designed to work with any game.
        It supports high-performance, large scale and small co-op games. Dedicated server 
        applications or player hosted? The MLAPI does it all.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
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
              to={useBaseUrl('docs/')}>
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
