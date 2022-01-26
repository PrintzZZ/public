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
