export function setTime() {
  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;
  let years = days * 365;

  let today = new Date();
  let todayYear = today.getFullYear();
  let todayMonth = today.getMonth() + 1;
  let todayDate = today.getDate();
  let todayHour = today.getHours();
  let todayMinute = today.getMinutes();
  let todaySecond = today.getSeconds();

  /*
  Date.UTC() -- 返回date对象距世界标准时间(UTC)1970年1月1日午夜之间的毫秒数(时间戳)
  year - 作为date对象的年份，为4位年份值
  month - 0-11之间的整数，做为date对象的月份
  day - 1-31之间的整数，做为date对象的天数
  hours - 0(午夜24点)-23之间的整数，做为date对象的小时数
  minutes - 0-59之间的整数，做为date对象的分钟数
  seconds - 0-59之间的整数，做为date对象的秒数
  microseconds - 0-999之间的整数，做为date对象的毫秒数
*/
  let t1 = Date.UTC(2023, 5, 9, 0, 0, 0); //北京时间
  let t2 = Date.UTC(
    todayYear,
    todayMonth,
    todayDate,
    todayHour,
    todayMinute,
    todaySecond
  );

  let diff = t1 - t2;
  let flag = true;

  if (diff < 0) {
    flag = false;
    diff = -diff;
  }

  var diffYears = Math.floor(diff / years);
  var diffDays = Math.floor(diff / days - diffYears * 365);
  var diffHours = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days) / hours
  );
  var diffMinutes = Math.floor(
    (diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes
  );
  var diffSeconds = Math.floor(
    (diff -
      (diffYears * 365 + diffDays) * days -
      diffHours * hours -
      diffMinutes * minutes) /
      seconds
  );

  if (flag) {
    return ` 距离婚礼 ${diffDays} 天 ${diffHours} 时 ${diffMinutes} 分 ${diffSeconds} 秒`;
  } else {
    if (diffYears == 0 && diffDays == 0) {
      return ` 婚礼ing ${diffHours} 时 ${diffMinutes} 分 ${diffSeconds} 秒`;
    } else {
      return ` 婚礼结束 ${diffYears} 年  ${diffDays} 天 ${diffHours} 时 ${diffMinutes} 分 ${diffSeconds} 秒`;
    }
  }
}
