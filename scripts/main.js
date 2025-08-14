'use strict';

import { initSlider } from './slider.js';
import { initNavigation } from './menu.js';
import { initForms } from './forms.js';
import { initHeader } from './header.js';
import { initShowMore } from './showmore.js';
import { initSearch } from './search.js';



document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initSlider();
  initNavigation();
  initForms();
  initShowMore();
  initSearch();
});
