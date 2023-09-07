// Import stylesheets
import './style.css';

const btn = document.querySelector('#btn');
const count = document.querySelector('#count');
const tcount = document.querySelector('#tcount');

var pressedCount = 0;
var triggeredCount = 0;

const debounce = (cb, d) => {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb();
    }, d);
  };
};

const throttle = (cb, d) => {
  let last = 0;
  return () => {
    let now = new Date().getTime();
    console.log('now', now);
    console.log('afeter', now - last);
    if (now - last < d) return;
    last = now;
    return cb();
  };
};
const debounceCount = throttle(() => {
  triggeredCount++;
  tcount.innerHTML = triggeredCount;
}, 1000);

btn.addEventListener('click', () => {
  count.innerHTML = ++pressedCount;
  debounceCount();
});
