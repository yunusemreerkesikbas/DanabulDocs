import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Hızlı ve Kolay Kurulum',
    Svg: require('@site/static/img/set.svg').default,
    description: (
      <>
          Danabul, anında kullanım için tasarlandı. Hızlı kurulum ve kullanıcı dostu arayüzü ile dakikalar içinde hazır olun!
      </>
    ),
  },
  {
    title: 'Global Erişim, Çok Dilli Destek',
    Svg: require('@site/static/img/langg.svg').default,
    description: (
      <>
          Danabul, global pazarları hedefleyenler için mükemmel bir çözüm sunar. Kullanıcılarınızın kendi dillerinde sorunsuz deneyim yaşamasını sağlayın.
      </>
    ),
  },
  {
    title: 'Üstün Performans ve Güvenilirlik',
    Svg: require('@site/static/img/perf.svg').default,
    description: (
      <>
          Danabul, yüksek performansı ve sağlam altyapısıyla kesintisiz ve güvenilir bir hizmet sunar. En yoğun dönemlerde bile mükemmel performans!
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
