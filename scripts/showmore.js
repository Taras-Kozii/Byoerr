'use strict';

export function initShowMore() {
	const showMoreBlocks = document.querySelectorAll('[data-showmore]');
	const showMoreButtons = document.querySelectorAll('[data-showmore-button]');

	if (showMoreButtons.length) {
		[...showMoreButtons].forEach(button => {
			button.addEventListener('click', e => {
				e.preventDefault();
				showMoreActions(e);
			})
		})
  }

	function showMoreActions(e) {
		const showMoreButton = e.target.closest('[data-showmore-button]');
		const showMoreBlock = showMoreButton.closest('[data-showmore]');
		const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
		const type = showMoreBlock.dataset.showmore;
		const step = showMoreContent.dataset.showmoreContent;
		showContent(type, step, showMoreContent);
}
function showContent(type, step, block) {
	if(type == 'items') {
		const items = block.querySelectorAll('li');
		items
	}
}
}