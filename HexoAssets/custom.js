"use strict";
var titleTime, OriginTitile = document.title;
document.addEventListener("visibilitychange", function() {
    document.hidden ? (document.title = "(つェ⊂) 感觉你怪怪的~",
    clearTimeout(titleTime)) : (document.title = "(*´∇｀*) 怪可爱的~",
    titleTime = setTimeout(function() {
        document.title = OriginTitile
    }, 2e3))
});
// time
var time_box = document.querySelector('#aside-content .card-widget .status-bar_clock')
var fn = function () {
  var now = new Date;
  var h = now.getHours();
  var mm = now.getMinutes();
  var str;
  if (h > 12) {
    h -= 12;
    str = " PM";
  } else {
    str = " AM";
  }
  h = h < 10 ? "0" + h : h;
  mm = mm < 10 ? "0" + mm : mm;
  var xy = h + ":" + mm
  xy += str;
  return xy;
};
var str = fn()
time_box.innerHTML = str

// 根据封面颜色更改主题色
const img = document.querySelector('#post-cover');
RGBaster.colors(img, {
  // 调色板大小，就是提取的样本，越大越精确，同时性能越差
  paletteSize: 30,
  // 颜色排除
  exclude: [ 'rgb(255,255,255)', 'rgb(0,0,0)' ],
  success: function(payload) {
    console.log('Dominant color:',payload.dominant);// 提取出来的主色
    console.log('Secondary color:', payload.secondary);// 次色
    console.log('Palette:', payload.palette); // 调色板
    let main = payload.dominant;
    document.documentElement.style.setProperty(`--zhuti-main`, main);
  }
})
