import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation Complète',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Chez By-Hoster, une documentation détaillée est à votre disposition pour faciliter la gestion de votre hébergement web et vous accompagner à chaque étape.
      </>
    ),
  },
  {
    title: 'Tutoriels Efficaces et Rapides',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Découvrez nos tutoriels conçus pour être à la fois efficaces et rapides, vous permettant de maîtriser rapidement les aspects techniques de votre hébergement.
      </>
    ),
  },
  {
    title: 'Support Client Prioritaire',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Notre équipe est dédiée à votre réussite. Bénéficiez d'un support client réactif et prioritaire pour toutes vos questions et préoccupations.
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
        <Heading as="h3">{title}</Heading>
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
