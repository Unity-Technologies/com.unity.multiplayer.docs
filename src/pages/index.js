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
  {
    title: 'Leverage Bitesize Samples',
    imageUrl: 'img/land-feature2b.jpg',
    description: (
      <>
        <a href="https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize" target="_blank">Bitesize Sample</a> projects give you modular features to learn more about MLAPI and add to your multiplayer games. See what features are available including status effects, health tracking, game timers, and more.
      </>
    ),
    link: (
      <>
      <a href="docs/learn/bitesize-introduction">Learn more about Bitesize</a>
      </>
    ),
  },
];

const highlights = [
  {
    title: 'Have a question?',
    imageUrl: 'img/hilight-question.jpg',
    description: (
      <>
        Check the FAQ, that's frequently asked questions. If you don't find what you need, use search or contact us on <a href="https://discord.gg/buMxnnPvTb" target="_blank"><strong>Discord</strong></a>!
      </>
    ),
    link: (
      <>
      <a href="docs/learn/faq" class="land-link">See the FAQ</a>
      </>
    ),
  },
  {
    title: 'Unity Transport and MLAPI',
    imageUrl: 'img/hilight-code.jpg',
    description: (
      <>
        Unity Transport provides a new wrapper for Unity MLAPI! The site includes docs for <a href="docs/develop/transport-api/introduction">com.unity.multiplayer.transport.utp</a> and <a href="transport/api/introduction">com.unity.transport</a>.
      </>
    ),
    link: (
      <>
      <a href="transport/introduction" class="land-link">See Transport</a>
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

function Highlight({imageUrl, title, description, link}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--6', styles.feature)}>
      {imgUrl && (
        <div className="text--center land-highlight">
          <img className="highlightImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div class="highlight-box"><p>{description}</p></div>
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
      <header className="hero hero--primary hero-banner">
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

      <main>
        {highlights && highlights.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {highlights.map((props, idx) => (
                  <Highlight key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <div className="hero blog--primary hero-banner">
      <div className="container">
      <div className="row">
        
        <div className="col col--6">
          <h1 className="blog-title">Get the latest news!</h1>
          <p className="blog-subtitle">New releases, tips and tricks, contribution news, and much more...see the blog! Every month we highlight releases, new content, and community news. </p>
          <div className="buttons-pages">
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('blog')}>
              See the Blog
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
    </Layout>
  );
}

export default Home;
