import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Clutter Free',
    Svg: require('../../static/img/coding.svg').default,
    description: (
      <>
        Your Surface device will have only the software you need. Almost every component is
        customizable. Systemd? Open-RC? Udev? You choose!
      </>
    ),
  },
  {
    title: 'Fast!',
    Svg: require('../../static/img/fast_computer.svg').default,
    description: (
      <>
        By choosing only what you strictly need, your Surface device will
        become faster and more lightweight!
      </>
    ),
  },
  {
    title: 'Learning Experience',
    Svg: require('../../static/img/knowledge.svg').default,
    description: (
      <>
        Installing Gentoo is an experience like no-other. You will understand
        more about the OS, the Linux kernel, and your Surface device in general!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
