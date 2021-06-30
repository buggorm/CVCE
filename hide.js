function hide(elements) {
	elements.forEach(e => {
		e.setAttribute('style', 'display: none')
	})
}

function query(selector) {
	return Object.values(document.querySelectorAll(selector))
}

const bc = window.location.pathname.replace(/\//g, '')

setInterval(() => {
	let notices = query('.dm-adjust').filter(e => !e.getAttribute('data-nick'))
	let links = query('a').filter(e => e.href.includes('external') || e.href.includes('campaign'))
	let spam = query('.dm-adjust').filter(e => e.getAttribute('data-nick')).filter(e => e.innerText.startsWith(bc) && (e.innerText.includes('****') || e.innerText.includes('----')))

	hide(notices.concat(links).concat(spam))
}, 500)
