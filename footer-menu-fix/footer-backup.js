const footerHeaders = document.querySelectorAll('.custom-footer h4')

if (footerHeaders.length && window.innerWidth < 768) {
	footerHeaders.forEach((header) => {
		header.addEventListener('click', function () {
			header.classList.toggle('--active')
			let parentElement = header.parentElement
			parentElement.classList.toggle('--active')
		})
	})
}