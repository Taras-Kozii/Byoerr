'use strict';

import { initSlider } from './slider.js';
import { initNavigation } from './menu.js';
import { initForms } from './forms.js';
import { initHeader } from './header.js';
import { initShowMore } from './showmore.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSlider();
  initNavigation();
  initForms();
  initShowMore();

  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherAnim('[data-counter]', 0.2, countAnimate, false);
  // watcherToggle('.hero .scroll-anim', 0.3);
  // watcherToggle('.section-header.scroll-anim', 0.9);
  // watcherToggle('.map .scroll-anim', 0.3);
  // watcherToggle('.get-info .scroll-anim', 0.3);
});
