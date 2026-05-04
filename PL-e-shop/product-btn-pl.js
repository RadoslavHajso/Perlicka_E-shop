if (language == 'pl') {
	const categoryButton = document.querySelector('.custom-category-header a.btn-custom[href="#products"]')

	if (categoryButton && !categoryButton.textContent.trim()) {
		categoryButton.textContent = 'Zobacz produkty'
	}
}