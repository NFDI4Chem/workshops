import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Minimum Information about a Chemical Investigation',
    Svg: require('@site/static/img/tube.svg').default,
    description: (
      <>
        Guides to support researchers in reporting metadata in selected areas of chemistry.
      </>
    ),
  },
  {
    title: 'FAIRness',
    Svg: require('@site/static/img/light.svg').default,
    description: (
      <>
        Focus on making the (meta)data more Findable, Accessible, Interoperable, and Reusable.
      </>
    ),
  },
  {
    title: 'Internationalization',
    Svg: require('@site/static/img/globe.svg').default,
    description: (
      <>
        We collaborate with international organizations and we strive to reach an international consensus about our MIChI to be. 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
