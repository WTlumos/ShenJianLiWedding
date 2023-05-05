<template>
  <div class="blessing" ref="blessRef">
    <!-- 文字 -->
    <h1 class="word" ref="wordRef"></h1>
    <!-- 图片 -->
    <!-- <div class="photo" style="--i: 1">
      <img src="../assets/images/blessing/border.png" class="back" />
      <img
        src="../assets/images/blessing/finish/01.png"
        class="leftCenter things"
      />
    </div> -->
    <!-- 祝福 -->
    <!-- <div class="wish">
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
    </div> -->
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { Story } from '../hooks/story.js';
import { cards, word, wish } from '../hooks/variable';

export default {
  setup() {
    const blessRef = ref(null);
    const wordRef = ref(null);

    onMounted(() => {
      const story = new Story(cards, blessRef.value, word, wordRef.value, wish);
      story.onMouted();
    });

    return {
      blessRef,
      wordRef
    };
  }
};
</script>

<style lang="less">
.blessing {
  width: 100%;
  height: 100%;

  // overflow: hidden;

  perspective: 100px;

  position: relative;

  .photo {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;

    .back {
      height: 100%;
      width: auto;
    }

    .things {
      height: 25%;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .left,
    .leftTop,
    .leftCenter {
      left: 35%;
    }
    .left,
    .right,
    .bottomCenter {
      top: 80%;
    }
    .leftTop,
    .rightTop {
      top: 20%;
    }
    .right,
    .rightTop,
    .rightCenter {
      left: 65%;
    }
    .center,
    .leftCenter,
    .rightCenter {
      top: 50%;
    }
    .center,
    .bottomCenter,
    .topCenter {
      left: 50%;
    }
    .topCenter {
      top: 20%;
    }
  }

  .word {
    position: absolute;

    right: 20px;
    top: 15px;

    // padding-bottom: 5px;
    // border-bottom: 2px solid #f4e4da;
    margin: 0;

    font-family: myself-font;
    font-size: 35px;
    // 词间距
    letter-spacing: 5px;
    text-shadow: 0px 0px 10px #e9ceb4;
    // background: url('../assets/images/blessing/wordBack.png') no-repeat center;

    writing-mode: vertical-rl;

    // color: #fffefa;
    z-index: 100;
  }

  @keyframes photo {
    100% {
      opacity: 1;
      transform: translateZ(100px) scale(1);
    }
  }
  @keyframes word {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .wish {
    width: 100%;
    height: 100%;

    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    .border {
      height: 60%;

      position: absolute;
      transform: translate(-50%, -50%);
      left: 50%;
      top: 50%;
    }

    p {
      font-family: myself-font;
      font-size: 30px;
      text-shadow: 0px 0px 10px #e9ceb4;
    }

    .music {
      position: absolute;
      transform: translate(-50%, -50%);

      left: 50%;
      top: 70%;

      .cursor {
        width: 45px;
        position: absolute;
        transform: translate(-50%, -50%);

        left: 50%;
        top: 50%;

        opacity: 0;
        animation: cursor 2s linear 1s infinite;
      }
      .start,
      .stop {
        // width: 45px;
        // height: 29px;
        animation: music 4s linear infinite;
      }

      .stop {
        animation-play-state: paused !important;
      }
      .start {
        animation-play-state: running !important;
      }
      @keyframes music {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes cursor {
        50% {
          opacity: 1;
        }
      }
      @keyframes wish {
        100% {
          transform: translateZ(0px) scale(1);
        }
      }
    }
  }
}

/* 超小屏幕(手机，<768px)：设置宽度为100% */
@media screen and (max-width: 767px) {
  .blessing {
    .photo {
      .back {
        width: 100%;
        height: auto;
      }
      .things {
        height: 10%;
      }
      .left,
      .leftTop {
        left: 30%;
      }
      .leftCenter {
        left: 25%;
      }
      .rightCenter {
        left: 75%;
      }
      .right,
      .rightTop {
        left: 70%;
      }
      .left,
      .right,
      .bottomCenter {
        top: 65%;
      }
      .leftTop,
      .rightTop {
        top: 40%;
      }
      .topCenter {
        top: 35%;
      }
    }
    .word {
      font-size: 25px;
    }
    .wish {
      .border {
        transform: translate(-50%, -50%) rotate(90deg);
        height: 45%;
      }
      p {
        font-size: 22px;
      }
    }
  }
}
/* 小屏幕(平板，≥768px)：设置宽度为750px */
@media screen and (min-width: 768px) {
  .blessing {
    .photo {
      .back {
        width: 100%;
        height: auto;
      }
      .things {
        height: 15%;
      }
      .left,
      .leftCenter,
      .leftTop {
        left: 20%;
      }
      .right,
      .rightCenter,
      .rightTop {
        left: 80%;
      }
      .left,
      .right,
      .bottomCenter {
        top: 70%;
      }
      .leftTop,
      .rightTop {
        top: 35%;
      }
      .topCenter {
        top: 25%;
      }
    }
    .wish {
      .border {
        transform: translate(-50%, -50%) rotate(90deg);
        height: 45%;
      }
    }
  }
}
/* 中等屏幕(桌面显示器，≥992px)：设置宽度为970px */
@media screen and (min-width: 992px) {
  .blessing {
    .photo {
      .back {
        height: 100%;
        width: auto;
      }
      .things {
        height: 25%;
      }
      .left,
      .leftCenter,
      .leftTop {
        left: 35%;
      }
      .right,
      .rightCenter,
      .rightTop {
        left: 65%;
      }
      .left,
      .right,
      .bottomCenter {
        top: 80%;
      }
      .leftTop,
      .rightTop {
        top: 25%;
      }
      .topCenter {
        top: 20%;
      }
    }
    .wish {
      .border {
        transform: translate(-50%, -50%);
        height: 60%;
      }
    }
  }
}
/* 大屏幕(大桌面显示器，≥1200x)：设置宽度为1170px */
@media screen and (min-width: 1200px) {
}
</style>
