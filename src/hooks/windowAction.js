function prevent() {
  // 禁用双指放大
  document.documentElement.addEventListener(
    'touchstart',
    (e) => {
      // console.log(e.touches.length);
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    },
    {
      passive: false
    }
  );

  // 禁用双击放大
  var lastTouchEnd = 0;
  document.documentElement.addEventListener(
    'touchend',
    (e) => {
      var now = Date.now();
      if (now - lastTouchEnd <= 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    },
    {
      passive: false
    }
  );
}

export { prevent };
