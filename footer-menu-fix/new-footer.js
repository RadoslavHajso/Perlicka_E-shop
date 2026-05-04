// ---
// Radoslav Hajso oprava footer menu 4.5.2026
// povodny kod je ten hore + dopisane v style.min.css
// ---

const footerHeaders = document.querySelectorAll(
	'#footer [class*="custom-footer__section"] > h3.pageElement__heading'
)

if (footerHeaders.length) {
	footerHeaders.forEach((header) => {
		header.addEventListener('click', function () {
			if (window.innerWidth >= 768) return

			header.classList.toggle('--active')
			let parentElement = header.parentElement
			parentElement.classList.toggle('--active')
		})
	})
}