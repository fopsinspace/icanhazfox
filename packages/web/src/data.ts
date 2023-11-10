import { type PostProps } from "./components/Post";

export const posts: PostProps[] = [
  {
    // https://twitter.com/FlipyDweeb/status/1721254795040710976
    id: "1",
    caption: "Eggs 🥚",
    author: {
      name: "FlipyDweeb (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1560453407370084352/GrloIyac_400x400.jpg",
    },
    src: "https://pbs.twimg.com/media/F-MgGLJX0AAPXEC?format=jpg&name=small",
    views: 4_371,
    likes: 427,
  },
  {
    // https://x.com/ShepGoesBlep/status/1721236286608900195
    id: "2",
    caption: "No",
    author: {
      name: "ShepGoesBlep (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1714107167236657152/kQ4YhtsV_400x400.jpg",
    },
    src: "https://pbs.twimg.com/media/F-MPRslaUAA9psY?format=jpg&name=small",
    views: 12_200,
    likes: 1_500,
  },
  {
    // https://x.com/DarkKolaKun/status/1721214155095523650
    id: "3",
    caption: "polite cat",
    author: {
      name: "DarkKolaKun (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1689920558119493632/OgidYj3U_normal.jpg",
    },
    src: "https://pbs.twimg.com/media/F-L7HpyXMAI1fVM?format=jpg&name=small",
    views: 3_757,
    likes: 650,
  },
  {
    // https://x.com/koiwypher/status/1721225692539388267
    id: "4",
    caption: ":3",
    author: {
      name: "koiwypher (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1696599720926289920/swXdr1ht_400x400.jpg",
    },
    src: "https://pbs.twimg.com/media/F-MFlexXYAEW2fv?format=jpg&name=small",
    views: 18_700,
    likes: 2_200,
  },
  {
    // https://x.com/TheRoguez/status/1721191647755526546
    // i'm so sorry, fren :c
    id: "5",
    caption:
      "it's strange to wake up without him, and yet it doesn't feel like he went anywhere. I practiced nembutsu with him which is helping a lot. thank you for the kind words 🫂",
    author: {
      name: "TheRoguez (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1690383003204358145/XYBJr2NF_400x400.jpg",
    },
    src: "https://video.twimg.com/tweet_video/F-Lkrl9W4AAE3d1.mp4",
    isAnimated: true,
    views: 26_900,
    likes: 1_900,
  },
  {
    // https://x.com/FopsHourly/status/1721271201463685235
    id: "6",
    author: {
      name: "FopsHourly (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1575265133953437697/ywCczsti_400x400.jpg",
    },
    src: "https://pbs.twimg.com/media/F-MvCE3bQAASwYG?format=jpg&name=small",
    views: 1_183,
    likes: 103,
  },
  {
    // https://twitter.com/HourlyYote/status/1721271225383842013
    id: "7",
    author: {
      name: "HourlyYote (Twitter)",
      avatar:
        "https://pbs.twimg.com/profile_images/1626359654405271552/xEQPOxMB_400x400.jpg",
    },
    src: "https://video.twimg.com/ext_tw_video/1721271204638822400/pu/vid/avc1/480x854/R_xpnLlFrN_QlRSi.mp4",
    isAnimated: true,
    views: 3_175,
    likes: 319,
  },
];
