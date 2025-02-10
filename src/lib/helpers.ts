export function getTheme() {
	if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
		return localStorage.getItem('theme') ?? 'light';
	}

	return 'light';
}

export function toggleActiveTocItem(activeTocItem: HTMLElement) {
	document
		.querySelector('.active-toc-item')
		?.classList.remove('active-toc-item');
	activeTocItem.classList.add('active-toc-item');
}
