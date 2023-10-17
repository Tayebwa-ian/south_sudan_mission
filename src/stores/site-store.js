import { defineStore } from 'pinia';

export const siteStore = defineStore('site', {
  state: () => ({
    counter: 0,
    activities: [
      {
        id:1,
        title: 'Sign Language Training',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'This a sign Lang-training'
      },
      {
        id:2,
        title: 'Children Outreach Sessions',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'We reach out to blind children'
      },
      {
        id:3,
        title: 'Refugee Counselling Program',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'We counsell refugee blind children'
      },
      {
        id:4,
        title: 'Bible distribution',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'We give children bibles'
      }
    ],
    news: [
      {
        id:1,
        title: 'Recruitment of new Children',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'We search for underprivileged deaf children all around and give them homage'
      },
      {
        id:2,
        title: 'Visiting Children Homes',
        pics: ['https://cdn.quasar.dev/img/parallax2.jpg', 
        'https://cdn.quasar.dev/img/mountains.jpg'],
        description: 'Every end of the week, we plan and visit homes of atleast two of our children'
      }
    ]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});
