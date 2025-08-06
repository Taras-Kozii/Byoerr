'use strict';

export function showMore() {
	const showMoreBlocks = document.querySelectorAll('[data-showmore]');

	if (showMoreBlocks.length) {
initItems(showMoreBlocksRegular);
		document.addEventListener("click", showMoreActions);
	
	function initItem(showMoreBlock) {
	let showMoreContent = showMoreBlock.querySelectorAll('[data-showmore-content]');
	let showMoreButton = showMoreBlock.querySelectorAll('[data-showmore-button]');

	showMoreContent = Array.from(showMoreContent).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
	showMoreButton = Array.from(showMoreButton).filter(item => item.closest('[data-showmore]') === showMoreBlock)[0];
}
function showMoreActions(e) {
	const targetEvent = e.target;
	const showMoreButton = targetEvent.closest('[data-showmore-button]');
	const showMoreBlock = showMoreButton.closest('[data-showmore]');
const showMoreContent = showMoreBlock.querySelector('[data-showmore-content]');
	
	showMoreBlocksRegular && showMoreBlocksRegular.length ? initItems(showMoreBlocksRegular) : null;
}
  }
}