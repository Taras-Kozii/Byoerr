'use strict';

import { header } from "./vars.js";

export function initHeader() {
  let scrollHeaderTimeout;
  console.log(header);

window.addEventListener('scroll', (e) => {
  if (window.scrollY > 0) {
    header.classList.add('scrolling');
  } else {
    header.classList.remove('scrolling');
  }
  if (!header.classList.contains('hidden')) {
    header.classList.toggle('hidden');
  }

  clearTimeout(scrollHeaderTimeout);
  scrollHeaderTimeout = setTimeout(() => {
    header.classList.remove('hidden')}, 300);
});
}