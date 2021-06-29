function hide(elements) {
	elements.forEach(e => {
		e.setAttribute('style', 'display: none')
	})
}

setInterval(() => {
	let notices = Object.values(document.querySelectorAll('.dm-adjust'))
		.filter(e => !e.getAttribute('data-nick'))
	let links = Object.values(document.querySelectorAll('a'))
		.filter(e => e.href.includes('external') || e.href.includes('campaign'))
	let spam = Object.values(document.querySelectorAll('.dm-adjust'))
		.filter(e => e.getAttribute('data-nick'))
		.filter(e => e.innerText.includes('****') || e.innerText.includes('----'))

	hide(notices.concat(links).concat(spam))
}, 1000)
