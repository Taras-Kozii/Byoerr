'use strict';

export function initShowMore() {
	const showMoreButtons = document.querySelectorAll('[data-showmore-button]');
	const showMoreContents = document.querySelectorAll('[data-showmore-content]');

	function initShowItems() {
		if (showMoreContents.length) {
			showMoreContents.forEach(block => {
				const step = parseFloat(block.dataset.showmoreContent);
				const blockChilds = block.children;

				[...blockChilds].forEach((item, index) => {
					if (index <= (step - 1)) {
						item.classList.toggle('show');
					}
				})
			})
		}
	}
	function initButtons() {
		if (showMoreButtons.length) {
			[...showMoreButtons].forEach(button => {
				button.addEventListener('click', e => {
					e.preventDefault();
					button.classList.toggle('active');
					showAction();
				});
			});
  	}
	}
	function showAction() {
		if (showMoreContents.length) {
			showMoreContents.forEach(blockContent => {
				const step = parseFloat(blockContent.dataset.showmoreContent);
				const blockChilds = [...blockContent.children];
				if (blockChilds.length) {
					blockChilds.forEach((child, index) => {
						if (index > (step - 1)) {
							child.classList.toggle('show');
						}
					})
				}
			});
		}
	}
	initShowItems();
	initButtons();
}

