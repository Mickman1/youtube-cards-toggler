setTimeout(function() {
	let rightControlsElement = document.querySelector('[class="ytp-button ytp-settings-button ytp-hd-quality-badge"]')
	let cardToggleBtnElement = `<button id="card-toggle-btn" onclick="var cardsElement = document.getElementsByClassName('ytp-ce-element'); for (let i = 0; i < cardsElement.length; i++) { if (cardsElement[i].style.display === 'none') { cardsElement[i].style.display = 'block' } else { cardsElement[i].style.display = 'none' }}" class="ytp-button" style="" title="Cards"></button>`
	rightControlsElement.insertAdjacentHTML('beforebegin', cardToggleBtnElement)

	let svgElement = `<svg class="icon icon-tabler icon-tabler-category" width="100%" height="100%" viewBox="-8 -8 40 40" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg"><defs></defs><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M 12 13.682 L 22 13.682 L 22 19.318 L 12 19.318 L 12 13.682 Z" style=""></path><path d="M 12 4.682 L 22 4.682 L 22 10.307 L 12 10.307 L 12 4.682 Z" style=""></path><circle cx="5" cy="12" r="3"></circle></svg>`
	cardToggleBtnElement = document.getElementById('card-toggle-btn')
	cardToggleBtnElement.insertAdjacentHTML('afterbegin', svgElement)
}, 1000)