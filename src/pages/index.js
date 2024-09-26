import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

const features = [
  {
    title: "Develop with Netcode for GameObjects",
    imageUrl: "img/land-feature1b.jpg",
    description: (
      <>
        We’re evolving our solution, built on Netcode for GameObjects, in the
        open to become a netcode foundation that you can depend on –
        customizable and extensible to meet the needs of many multiplayer game
        types.
      </>
    ),
    link: (
      <>
        <a href="netcode/current/tutorials/helloworld" className="land-link">
          Learn more about Netcode for GameObjects
        </a>
      </>
    ),
  },
  {
    title: "Learn with Boss Room",
    imageUrl: "img/land-feature3b.jpg",
    description: (
      <>
        Boss Room is a small scale cooperative game sample project – built on
        top of the new Unity Networking Core library – designed to help you
        explore the concepts and patterns behind a multiplayer game flow.
      </>
    ),
    link: (
      <>
        <a
          href="https://unity.com/demos/small-scale-coop-sample"
          target="_blank"
        >
          Learn more about Boss Room
        </a>
      </>
    ),
  },
  {
    title: "Leverage Bitesize Samples",
    imageUrl: "img/land-feature2b.jpg",
    description: (
      <>
        <a
          href="https://github.com/Unity-Technologies/com.unity.multiplayer.samples.bitesize"
          target="_blank"
        >
          Bitesize Sample
        </a>{" "}
        projects give you modular features to learn more about Netcode for
        GameObjects and add to your multiplayer games. See what features are
        available including status effects, health tracking, game timers, and
        more.
      </>
    ),
    link: (
      <>
        <a href="netcode/current/learn/bitesize/bitesize-introduction">
          Learn more about Bitesize
        </a>
      </>
    ),
  },
];

const highlights = [
  {
    title: "Multiplayer Tools",
    imageUrl: "img/hilight-question.jpg",
    description: (
      <>
        Use Multiplayer Tools such as the Profiler, Runtime Stats Monitor, Network Simulator, and
        Network Scene Visualization to optimize your game's performance and usability.
      </>
    ),
    link: (
      <>
        <a href="tools/current/install-tools" className="land-link">
          Learn more about Multiplayer Tools
        </a>
      </>
    ),
  },
  {
    title: "Unity Transport and Netcode for GameObjects",
    imageUrl: "img/hilight-code.jpg",
    description: (
      <>Unity Transport is a low-level networking library for multiplayer game development. It's the underlying protocol for Netcode for GameObjects, but you can also use it with a custom solution.</>
    ),
    link: (
      <>
        <a href="transport/current/about" className="land-link">
          Learn more about Unity Transport
        </a>
      </>
    ),
  },
];

function Feature({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center land-feature">
          <img className="featureImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div className="land-box">
        <p>{description}</p>
      </div>
      <p className="land-link">{link}</p>
    </div>
  );
}

function Highlight({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--6", styles.feature)}>
      {imgUrl && (
        <div className="text--center land-highlight">
          <img className="highlightImage" src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <div className="highlight-box">
        <p>{description}</p>
      </div>
      <p className="land-link">{link}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="This site provides Unity Multiplayer documentation, references, and sample code tutorials."
    >
      <header className="hero hero--primary hero-banner">
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className="buttons-pages">
            <Link
             className={clsx(
              "button button--outline button--secondary button--lg",
              styles.heroButton
             )}
             to={useBaseUrl("netcode/current/about")}
            >
             Netcode for GameObjects
            </Link>
            <Link
             className={clsx(
              "button button--outline button--secondary button--lg",
              styles.heroButton
             )}
             to="https://docs.unity3d.com/6000.0/Documentation/Manual/multiplayer.html"
            >
             Multiplayer Unity Manual
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
              <h1 className="blog-title">Be part of the community!</h1>
              <p className="blog-subtitle">
                We have an active community on Discord for tips, announcements, and
                interact with other users and Unity developers to help you on your Multiplayer
                journey!
                Connect to our {" "}
                <a href="https://discord.gg/buMxnnPvTb" target="_blank">
                  <strong>Discord community</strong>
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
