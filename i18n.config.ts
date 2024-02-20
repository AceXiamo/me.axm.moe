export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      menu: {
        home: 'Home',
        doing: 'Doing',
        photo: 'Photo',
      },
      index: {
        line_0: 'Hello 👋',
        line_1: "I'm `AceXiamo`, you can call me [夏末 / xiamo].",
        line_2:
          "I'm a full-stack developer, but I might prefer front-end development over back-end, I hope to do something meaningful with those.",
        line_3:
          'In my free time, I learn English on Duolingo, and have been doing so up until now.',
        line_4:
          "I also like anime, and I've watched a lot of them, such as 'Steins;Gate', 'Clannad', 'Attack on Titan', and so on.",
        line_5: 'Maybe, You can find me on ...',
      },
      doing: {
        title: 'Some things that are being persisted in doing.',
      },
    },
    zh: {
      welcome: 'Bienvenue',
      menu: {
        home: '首页',
        doing: '日常',
        photo: '照片',
      },
      index: {
        line_0: '你好 👋',
        line_1: '我是 `AceXiamo`，你可以叫我 [夏末 / xiamo]。',
        line_2:
          '我是一名全栈开发者，但我可能更喜欢前端开发而不是后端，我也希望能用这些做一些有意义的事情。',
        line_3: '空闲时间，我会在 Duolingo 上学习英语，并且一直持续到当下。',
        line_4: '我也喜欢看动漫，我看过很多，比如《命运石之门》、《CLANNAD》、《进击的巨人》等等。',
        line_5: '也许，你还能在这里找到我...',
      },
      doing: {
        title: '一些正在坚持做的事情。',
      },
    },
  },
}))
