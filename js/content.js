setTimeout(function() {
	let rightControlsElement = document.querySelector('[class="ytp-subtitles-button ytp-button"]')
	let cardToggleBtnElement = `<button id="card-toggle-btn" onclick="var cardsElement = document.getElementsByClassName('ytp-ce-element'); for (let i = 0; i < cardsElement.length; i++) { if (cardsElement[i].style.display === 'none') { cardsElement[i].style.display = 'block' } else { cardsElement[i].style.display = 'none' }}" class="ytp-button" style="" title="Cards"></button>`
	rightControlsElement.insertAdjacentHTML('beforebegin', cardToggleBtnElement)
	
	let svgElement = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-category" width="100%" height="100%" viewBox="-8 -8 40 40" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4h6v6h-6z"></path><path d="M14 4h6v6h-6z"></path><path d="M4 14h6v6h-6z"></path><circle cx="17" cy="17" r="3"></circle></svg>`
	cardToggleBtnElement = document.getElementById('card-toggle-btn')
	cardToggleBtnElement.insertAdjacentHTML('afterbegin', svgElement)
}, 1000)