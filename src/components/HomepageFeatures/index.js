import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Documentation Complète',
    Svg: require('@site/static/img/byhoster_complete_documentation.svg').default,
    description: (
      <>
        Chez By-Hoster, nous fournissons une documentation complète pour faciliter la gestion de votre hébergement web, couvrant tous les aspects nécessaires pour vous aider efficacement.
      </>
    ),
  },
  {
    title: 'Tutoriels Efficaces',
    Svg: require('@site/static/img/byhoster_effective_tutorials.svg').default,
    description: (
      <>
        Nos tutoriels sont conçus pour être rapides et efficaces, vous permettant de comprendre et de mettre en œuvre des solutions sans perdre de temps.
      </>
    ),
  },
  {
    title: 'Support Client Prioritaire',
    Svg: require('@site/static/img/byhoster_priority_support.svg').default,
    description: (
      <>
        L'aide à nos clients est notre priorité. Notre équipe d'assistance dédiée est toujours prête à répondre à vos questions et à résoudre vos problèmes rapidement.
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
