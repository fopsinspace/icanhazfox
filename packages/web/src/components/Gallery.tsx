import { type ImageProps } from './Image';
import MasonryColumn from './MasonryColumn';

export default function Gallery() {
  const images: ImageProps[] = [
    {
      // https://twitter.com/FlipyDweeb/status/1721254795040710976
      id: '1',
      name: 'Eggs 🥚',
      author: {
        name: 'FlipyDweeb (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1560453407370084352/GrloIyac_400x400.jpg',
      },
      src: 'https://pbs.twimg.com/media/F-MgGLJX0AAPXEC?format=jpg&name=small',
    },
    {
      // https://x.com/ShepGoesBlep/status/1721236286608900195
      id: '2',
      name: 'No',
      author: {
        name: 'ShepGoesBlep (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1714107167236657152/kQ4YhtsV_400x400.jpg',
      },
      src: 'https://pbs.twimg.com/media/F-MPRslaUAA9psY?format=jpg&name=small',
    },
    {
      // https://x.com/DarkKolaKun/status/1721214155095523650
      id: '3',
      name: 'polite cat',
      author: {
        name: 'DarkKolaKun (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1689920558119493632/OgidYj3U_normal.jpg',
      },
      src: 'https://pbs.twimg.com/media/F-L7HpyXMAI1fVM?format=jpg&name=small',
    },
    {
      // https://x.com/koiwypher/status/1721225692539388267
      id: '4',
      name: ':3',
      author: {
        name: 'koiwypher (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1696599720926289920/swXdr1ht_400x400.jpg',
      },
      src: 'https://pbs.twimg.com/media/F-MFlexXYAEW2fv?format=jpg&name=small',
    },
    {
      // https://x.com/TheRoguez/status/1721191647755526546
      // i'm so sorry, fren :c
      id: '5',
      name: '',
      author: {
        name: 'TheRoguez (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1690383003204358145/XYBJr2NF_400x400.jpg',
      },
      src: 'https://video.twimg.com/tweet_video/F-Lkrl9W4AAE3d1.mp4',
      isAnimated: true,
    },
    {
      // https://x.com/FopsHourly/status/1721271201463685235
      id: '6',
      name: '',
      author: {
        name: 'FopsHourly (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1575265133953437697/ywCczsti_400x400.jpg',
      },
      src: 'https://pbs.twimg.com/media/F-MvCE3bQAASwYG?format=jpg&name=small',
    },
    {
      // https://twitter.com/HourlyYote/status/1721271225383842013
      id: '7',
      name: '',
      author: {
        name: 'HourlyYote (Twitter)',
        avatar:
          'https://pbs.twimg.com/profile_images/1626359654405271552/xEQPOxMB_400x400.jpg',
      },
      src: 'https://video.twimg.com/ext_tw_video/1721271204638822400/pu/vid/avc1/480x854/R_xpnLlFrN_QlRSi.mp4',
      isAnimated: true,
    },
  ];

  return (
    <div className="h-full grid grid-cols-4 gap-x-12">
      <MasonryColumn images={images.filter((_, index) => index % 4 == 0)} />
      <MasonryColumn images={images.filter((_, index) => index % 4 == 1)} />
      <MasonryColumn images={images.filter((_, index) => index % 4 == 2)} />
      <MasonryColumn images={images.filter((_, index) => index % 4 == 3)} />
    </div>
  );
}
