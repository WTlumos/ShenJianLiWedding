export class Card {
  constructor() {
    this.element = null;
    this.init();
  }
  init = () => {
    /**
     * <div class="photo" style="--i: 0">
        <img src="../assets/images/blessing/border.png" class="back" />
        <img
        src="../assets/images/blessing/groom/02.png"
        class="left things"
      />
      </div>
     */
    const card = document.createElement('div');

    this.element = card;
  };

  /**
   * <!-- 祝福语 -->
    <div class="wish">
      <img src="../assets/images/blessing/wishBorder.png" class="border" />
      <p></p>
      <div class="music" @click="musicClick">
        <img
          src="../assets/images/blessing/music/music.png"
          :class="musicClass"
        />
        <img src="../assets/images/blessing/music/cursor.png" class="cursor" />
        <audio :src="sound" ref="musicRef" loop>浏览器不支持音频播放</audio>
      </div>
    </div>
  </div>
   */
  classWish = () => {
    // console.log(this.element);
    this.element.classList.add('wish');
    const p = document.createElement('p');

    this.element.append(p);
  };

  /**
   *  <!-- 图片 -->
    <div class="photo" style="--i: 1">
      <img src="../assets/images/blessing/border.png" class="back things" />
      <img src="../assets/images/blessing/groom/01.png" class="leftTop things" />
    </div>
   */
  classPhoto = () => {
    this.element.classList.add('photo');
    this.addImage(require('../assets/images/blessing/border.png'), 'back');
  };

  addImage = (imageUrl, className, div) => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add(className);

    if (div) {
      div.append(img);
    } else {
      this.element.append(img);
    }

    return img;
  };

  /**
   * <div class="music" @click="musicClick">
        <img
          src="../assets/images/blessing/music/music.png"
          :class="musicClass"
        />
        <img src="../assets/images/blessing/music/cursor.png" class="cursor" />
        <audio :src="sound" ref="musicRef" loop>浏览器不支持音频播放</audio>
      </div>
   */
  addMusic = () => {
    const music = document.createElement('div');
    music.className = 'music';
    this.element.append(music);

    const rotate = this.addImage(
      require('../assets/images/blessing/music/music.png'),
      'stop',
      music
    );

    const cursor = this.addImage(
      require('../assets/images/blessing/music/cursor.png'),
      'cursor',
      music
    );

    const audio = document.createElement('audio');
    audio.src = require('../assets/images/blessing/music/bestie.mp3');
    audio.loop = 'true';

    music.append(audio);

    music.addEventListener('click', () => {
      const status = audio.paused;
      // console.log(status);
      if (status) {
        audio.play();
        rotate.className = 'start';
      } else {
        audio.pause();
        rotate.className = 'stop';
      }
    });
  };
}
