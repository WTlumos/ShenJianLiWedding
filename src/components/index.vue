<template>
  <div class="welcome">
    <!-- 标题 -->
    <div class="heading">
      <img
        src="../assets/images/index/logo.png"
        class="animate__animated animate__fadeInLeft"
      />
      <h1 class="animate__animated animate__fadeInRight">Save The Date</h1>
    </div>
    <!-- 展示区 -->
    <div class="content">
      <!-- 门 -->
      <img src="../assets/images/index/door.png" class="door" />
      <!-- 新郎 -->
      <!-- <img src="../assets/images/index/groom.png" class="groom" /> -->
      <!-- 新娘 -->
      <!-- <img src="../assets/images/index/bride.png" class="bride" /> -->

      <!-- 合照 -->
      <img src="../assets/images/index/wedding.png" class="together" />
    </div>
    <!-- 倒计时 -->
    <div class="time">
      <h2 v-html="time"></h2>
    </div>
    <!-- 按钮 -->
    <div class="icon" @click="pageChange"></div>
  </div>
</template>

<script>
import { setTime } from '../hooks/time';
import { ref } from 'vue';

export default {
  emits: ['pageChange'],
  setup(props, { emit }) {
    let time = ref('');
    time.value = setTime();
    window.setInterval(() => {
      time.value = setTime();
    }, 1000);

    const pageChange = () => {
      emit('pageChange', 'blessing');
    };
    return {
      time,
      pageChange
    };
  }
};
</script>

<style lang="less" scoped>
.welcome {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;

  .heading {
    overflow: hidden;
    height: 10%;
    width: 100%;
    font-family: hole;

    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    padding: 5px 0;

    img {
      // width: auto;
      height: 60%;
    }

    h1 {
      margin: 0px;
      padding: 0px;
      font-size: 60px;
      text-shadow: 2px 2px #b6aba4;
    }
  }
  .content {
    overflow: hidden;
    width: 100%;
    height: 80%;
    position: relative;
    // z-index: 3;

    .door {
      height: 0%;
      // width: auto;
      // object-fit: cover;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: 3;

      // 动画
      animation: door 1s 0.5s forwards;
      // transform-origin: 0% 0%;
    }

    .together {
      height: 0%;
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -50%);
      z-index: 3;

      animation: photo 1s 0.5s forwards;
    }

    .bride,
    .groom {
      // width: auto;
      position: absolute;
      transform: translate(-50%, -50%);
    }
    .bride {
      height: 60%;
      left: 54%;
      top: 65%;
    }
    .groom {
      height: 65%;
      left: 46%;
      top: 62%;
    }
  }
  .time {
    // overflow: hidden;
    height: 10%;
    width: 100%;

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    h2 {
      z-index: 2;
      font-family: mading;
      text-shadow: 0px 0px 10px #e9ceb4;

      animation: zoomInUp 1s;
    }
  }
  .icon {
    width: 15px;
    height: 15px;

    border-left: 4px solid #f4e4da;
    border-bottom: 4px solid #f4e4da;

    position: absolute;
    left: 50%;
    bottom: 2%;

    transform: translate(-50%, -50%) rotate(-45deg);

    z-index: 100;

    opacity: 0;

    animation: icon 2s infinite;
  }
}

@keyframes door {
  0% {
    height: 0;
  }
  100% {
    height: 80%;
  }
}
@keyframes photo {
  0% {
    height: 0;
  }
  100% {
    height: 60%;
  }
}
@keyframes icon {
  0%,
  75% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/* 超小屏幕(手机，<768px)：设置宽度为100% */
@media screen and (max-width: 767px) {
  .welcome {
    .heading h1 {
      font-size: 30px;
    }
    // .content {
    //   .bride {
    //     left: 60%;
    //   }
    //   .groom {
    //     left: 33%;
    //   }
    // }
    .content {
      .door {
        z-index: 1;
      }
      .together {
        top: 65%;
      }
    }
    .time {
      h2 {
        font-size: 15px;
      }
    }
  }
}
/* 小屏幕(平板，≥768px)：设置宽度为750px */
@media screen and (min-width: 768px) {
}
/* 中等屏幕(桌面显示器，≥992px)：设置宽度为970px */
@media screen and (min-width: 992px) {
}
/* 大屏幕(大桌面显示器，≥1200x)：设置宽度为1170px */
@media screen and (min-width: 1200px) {
}
</style>
