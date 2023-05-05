import { Card } from './card';

export class Story {
  constructor(cards, ref, word, wordRef, wish) {
    this.cards = cards;
    this.counts = cards.length;
    this.ref = ref;

    this.cardCount = 0;
    // this.onMouted();

    this.cardItems = [];

    this.word = word;
    this.wordRef = wordRef;
    this.wish = wish;
  }

  appendNewCard = (type, photos) => {
    const card = new Card();
    if (type == 'photo') {
      card.classPhoto();
      photos.forEach((element) => {
        const img = card.addImage(element.url, element.className);
        img.classList.add('things');
      });
    } else {
      card.classWish();
    }
    card.element.style.transform = `translateZ(${
      -80 * this.cardCount
    }px) scale(${1 - 0.2 * this.cardCount})`;

    this.ref.append(card.element);
    // card.element.style.setProperty('--i', this.cardCount + 1);

    card.element.style.zIndex = this.count - this.cardCount;

    card.element.style.animation = 'fadeIn 0.5s';

    this.cardCount++;

    return card;
  };

  createStory = () => {
    const cardTimer = setInterval(() => {
      if (this.cardCount < this.counts) {
        const item = this.cards[this.cardCount];
        // console.log(this.ref);
        let card = this.appendNewCard(item.type, item.photos);

        this.cardItems.push(card);
      } else {
        clearInterval(cardTimer);
        this.createWord(this.word, this.wordRef, false);
      }
    }, 500);
  };

  animationCard = () => {
    let i = 0;
    for (let i = 0; i < this.cardCount; i++) {
      const elem = this.cardItems[i].element;
      if (i != this.cardCount - 1) {
        elem.style.animation = `photo 4s linear ${i * 2}s forwards`;
      } else {
        elem.style.animation = `wish 2s linear ${i * 2}s forwards`;
      }
    }

    // 设置祝福词出现时机
    const wish = this.cardItems[this.cardCount - 1];
    wish.element.addEventListener('animationend', () => {
      wish.addImage(
        require('../assets/images/blessing/wishBorder.png'),
        'border'
      );
      const p = wish.element.querySelector('p');
      this.createWord(this.wish, p, true);

      this.wordRef.remove();
    });
  };

  createWord = (words, element, flag) => {
    const len = words.length;
    let count = 0;
    let str = '';
    const wordTimer = setInterval(() => {
      if (count < len) {
        if (words[count] == '\n') {
          str += '<br/>';
        }
        str += words[count];
        count++;
        element.innerHTML = str;
      } else {
        clearInterval(wordTimer);
        // 是否是祝福语
        if (flag) {
          this.cardItems[this.counts - 1].addMusic();
        } else {
          this.animationCard();
        }
      }
    }, 100);
  };

  onMouted = () => {
    this.createStory();
  };
}
