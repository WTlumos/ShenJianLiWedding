const cards = [
  // dress
  {
    type: 'photo',
    photos: [
      {
        url: require('../assets/images/blessing/dress/01.png'),
        className: 'rightCenter'
      },
      {
        url: require('../assets/images/blessing/dress/02.png'),
        className: 'right'
      },
      {
        url: require('../assets/images/blessing/dress/03.png'),
        className: 'leftCenter'
      },
      {
        url: require('../assets/images/blessing/dress/04.png'),
        className: 'left'
      }
    ]
  },
  // groom
  {
    type: 'photo',
    photos: [
      {
        url: require('../assets/images/blessing/groom/01.png'),
        className: 'bottomCenter'
      },
      {
        url: require('../assets/images/blessing/groom/02.png'),
        className: 'left'
      },
      {
        url: require('../assets/images/blessing/groom/03.png'),
        className: 'right'
      }
    ]
  },
  // party
  {
    type: 'photo',
    photos: [
      {
        url: require('../assets/images/blessing/party/01.png'),
        className: 'leftCenter'
      },
      {
        url: require('../assets/images/blessing/party/02.png'),
        className: 'bottomCenter'
      },
      {
        url: require('../assets/images/blessing/party/03.png'),
        className: 'right'
      },
      {
        url: require('../assets/images/blessing/party/04.png'),
        className: 'rightCenter'
      }
    ]
  },
  // finish
  {
    type: 'photo',
    photos: [
      {
        url: require('../assets/images/blessing/finish/01.png'),
        className: 'topCenter'
      },
      {
        url: require('../assets/images/blessing/finish/02.png'),
        className: 'rightCenter'
      },
      {
        url: require('../assets/images/blessing/finish/03.png'),
        className: 'bottomCenter'
      }
    ]
  },
  // wish
  {
    type: 'wish',
    photos: []
  }
];

const word = '癸卯年三月二十日\n凤冠霞披\n合两姓之好\n高朋满座\n筑合家之欢';
const wish =
  '恭祝\n佳偶天成 百年琴瑟\n满心欢喜 共赴白头\n永结同心 百年好合\n永爱嘉福 长乐未央';

export { cards, word, wish };
