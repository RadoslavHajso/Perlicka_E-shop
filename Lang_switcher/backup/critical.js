// UNITS

let vh = window.innerHeight * 0.01

document.documentElement.style.setProperty('--vh', `${vh}px`)
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01
	document.documentElement.style.setProperty('--vh', `${vh}px`)
})

let vw = document.documentElement.clientWidth * 0.01

document.documentElement.style.setProperty('--vw', `${vw}px`)
window.addEventListener('resize', () => {
	let vw = document.documentElement.clientWidth * 0.01
	document.documentElement.style.setProperty('--vw', `${vw}px`)
})

// LANG

const language = dataLayer[0].shoptet.language

// ---
// HEADER
// ---

const topNavTools = document.querySelector('.top-navigation-tools')
const navButtons = document.querySelector('.navigation-buttons')

if (topNavTools && navButtons) {
	navButtons.prepend(topNavTools)
}

const headerLogo = document.querySelector('.site-name-wrapper')
const nav = document.querySelector('#navigation')
const menuHelper = document.querySelector('.menu-helper')

if (headerLogo && nav) {
	headerLogo.after(nav)
}

if (navButtons && menuHelper) {
	navButtons.prepend(menuHelper)
}

const topNavMenu = document.querySelector('.top-navigation-menu')
const lang = document.querySelector('html').getAttribute('lang')
const langText = lang === 'cs' ? 'CZ' : 'SK'
const langToggle = `
                    <div class="header-lang">
                        <button class="header-lang__button --${lang}">${langText}</button>
                        <ul class="header-lang__list">
                            <li class="header-lang__item"><a class="header-lang__link --cs" href="https://569739.myshoptet.com/">CZ</a></li>
                            <li class="header-lang__item"><a class="header-lang__link --sk" href="https://569738.myshoptet.com/">SK</a></li>
                        </ul>
                    </div>
                `

if (topNavMenu) {
	topNavMenu.insertAdjacentHTML('afterend', langToggle)
}

const navigationActions = document.querySelector('.navigationActions')
if (navigationActions && langToggle && window.innerWidth < 768) {
	navigationActions.insertAdjacentHTML('afterend', langToggle)
}

const langBtn = document.querySelector('.header-lang__button')
const langList = document.querySelector('.header-lang__list')
langBtn.addEventListener('click', () => {
	langBtn.classList.toggle('--active')
	langList.classList.toggle('--active')
})

const splitMenu = () => {
	const menuWrapper = document.querySelector('#navigation .navigation-in')

	if (menuWrapper) {
		setTimeout(() => {
			let menuItems = menuWrapper.querySelectorAll('.menu-level-1 > li')
			let menuHelper = document.querySelector('.menu-helper')
			let navigationButtons = document.querySelector('.navigation-buttons')

			menuItems.forEach((item) => {
				let offsetRight = item.offsetLeft + item.offsetWidth
				if (offsetRight > navigationButtons.offsetLeft - 20) {
					console.log(offsetRight, navigationButtons.offsetLeft)
					let splitted = menuHelper.querySelector('.' + item.classList[0])
					if (splitted) {
						splitted.classList.remove('splitted')
					}
					item.classList.add('splitted')
				} else {
					let splitted = menuHelper.querySelector('.' + item.classList[0])
					if (splitted) {
						splitted.classList.add('splitted')
					}
					item.classList.remove('splitted')
				}
			})
			if (menuHelper.querySelector('.menu-level-1>li:not(.splitted)')) {
				menuHelper.classList.remove('empty')
				menuWrapper.classList.remove('fitted')
			} else {
				menuHelper.classList.add('empty')
				menuWrapper.classList.add('fitted')
			}
		}, 200)
	}
}

shoptet.menu.splitMenu = splitMenu

const carousel = document.querySelector('#carousel .carousel-inner')

// Add size table link
if (dataLayer[0].shoptet.pageType === 'productDetail') {
	const infoWrapper = document.querySelector('.p-info-wrapper')
	const stars = document.querySelector('.stars-wrapper')
	const title = document.querySelector('.p-detail-inner-header')
	const detailParameters = document.querySelector('.detail-parameters')
	const availability = document.querySelector('.availability-value')
	const price = document.querySelector('.p-final-price-wrapper')
	const addToCart = document.querySelector('.add-to-cart')
	const socialButtons = document.querySelector('.social-buttons-wrapper')

	const detailInfo = document.querySelector('.p-detail-info')
	const image = document.querySelector('.p-image')

	if (infoWrapper) {
		if (stars) infoWrapper.append(stars)
		if (title) infoWrapper.append(title)
		if (detailParameters) infoWrapper.append(detailParameters)
		if (availability) infoWrapper.append(availability)

		let wrapper = document.createElement('div')
		wrapper.classList.add('add-to-cart-price-wrapper')
		if (price) wrapper.append(price)
		if (addToCart) wrapper.append(addToCart)
		infoWrapper.append(wrapper)

		if (socialButtons) {
			infoWrapper.append(socialButtons)

			// Favorite icon
			const targetNode = document.querySelector('.add-to-cart-price-wrapper')

			const observer = new MutationObserver(function (mutationsList, observer) {
				for (let mutation of mutationsList) {
					if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
						for (let node of mutation.addedNodes) {
							if (node instanceof HTMLElement && node.id === 'dkLabFavouriteDiv') {
								const favoriteButton = document.querySelector('#dkLabFavouriteDiv')
								if (favoriteButton) {
									let linkIcons = socialButtons.querySelector('.link-icons')
									if (linkIcons) linkIcons.append(favoriteButton)
								}
								break
							}
						}
					}
				}
			})
			const observerConfig = { childList: true, subtree: true }
			observer.observe(targetNode, observerConfig)
		}
	}

	if (image) {
		if (detailInfo) {
			let detailInfoParent = detailInfo.parentElement
			image.append(detailInfo)
			detailInfoParent.remove()
		}
	}
	const thumbnails = document.querySelectorAll('.p-thumbnail')
	if (thumbnails.length) {
		thumbnails.forEach((thumbnail) => {
			let img = thumbnail.querySelector('img')
			let src = img.getAttribute('data-src')
			let newSrc = src.replace('/related/', '/orig/')
			img.setAttribute('src', newSrc)
			img.setAttribute('data-src', newSrc)
		})
	}

	let flagsDefault = document.querySelector('.flags-default')
	let flagDiscount = document.querySelector('.flag-discount')
	let flagsEextra = document.querySelector('.flags-extra')

	if (flagsDefault && flagDiscount) {
		flagsDefault.appendChild(flagDiscount)
		if (flagsEextra) flagsEextra.remove()
	}
	if (flagDiscount && !flagsDefault) {
		let flags = document.createElement('div')
		flags.classList.add('flags', 'flags-default')

		let image = document.querySelector('.p-detail-info')
		if (image) {
			image.append(flags)
			flags.appendChild(flagDiscount)
			if (flagsEextra) flagsEextra.remove()
		}
	}

	let velikost = document.querySelectorAll('.variant-list th')
	if (velikost.length) {
		velikost.forEach((item) => {
			// if (item.textContent.trim() == 'Velikost' || item.textContent.trim() == 'Veľkosť') {
			if (item.innerText.includes('Velikost') || item.innerText.includes('Veľkosť')) {
				let link = document.createElement('a')
				if (language == 'cs') link.href = '/velikostni-tabulka/'
				if (language == 'sk') link.href = '/velkostna-tabulka/'
				if (language == 'hu') link.href = '/meret-tablazat/'
				if (language == 'cs') link.textContent = 'Tabulka velikostí'
				if (language == 'sk') link.textContent = 'Tabuľka veľkostí'
				if (language == 'hu') link.textContent = 'Méret táblázat'
				link.classList.add('size-table-link')
				item.append(link)

				item.classList.add('size-table-link-wrapper')
			}
		})
	}
}

if (dataLayer[0].shoptet.pageType === 'category') {
	const categoryPerex = document.querySelector('.category-perex:not(.empty-content)')

	let categoryImgSrc = '/user/documents/assets/img/category-image.jpg'
	if (categoryPerex) {
		let perexImg = categoryPerex.querySelector('img')
		if (perexImg) {
			setTimeout(() => {
				categoryImgSrc = perexImg.src
				perexImg.parentElement.remove()
			}, 10)
		}
	}

	function handleCategory() {
		if (!document.querySelector('.custom-category-header')) {
			const categoryTitle = document.querySelector('.category-title')
			const breadcrumbs = document.querySelector('.breadcrumbs-wrapper')

			let categoryHeader = document.createElement('div')
			let categoryHeaderImageWrapper = document.createElement('div')
			let categoryHeaderImage = document.createElement('img')
			let categoryHeaderContainer = document.createElement('div')
			let categoryPerexContent = document.createElement('div')

			categoryHeader.classList.add('custom-category-header')
			categoryHeaderImageWrapper.classList.add('custom-category-image-wrapper')
			categoryHeaderImage.classList.add('custom-category-image')
			categoryHeaderContainer.classList.add('custom-category-container', 'container')
			categoryPerexContent.classList.add('category-perex-content')

			if (breadcrumbs) {
				categoryHeader.append(breadcrumbs)
			}

			categoryHeader.append(categoryHeaderContainer)
			categoryHeaderContainer.append(categoryPerexContent)
			categoryHeaderContainer.append(categoryHeaderImageWrapper)
			categoryHeaderImageWrapper.append(categoryHeaderImage)

			if (categoryTitle) categoryPerexContent.append(categoryTitle)

			let categoryPerex = document.querySelector('.category-perex:not(.empty-content)')
			if (categoryPerex) {
				const categoryPerexChildren = categoryPerex.children
				if (categoryPerexChildren.length) {
					let categoryPerexWrapper = document.createElement('div')
					categoryPerexWrapper.classList.add('category-perex-wrapper')
					categoryPerexContent.append(categoryPerexWrapper)

					Array.from(categoryPerexChildren).forEach((item) => {
						categoryPerexWrapper.append(item)
					})

					let showMoreBtn = document.createElement('button')
					showMoreBtn.classList.add('btn-show-more')
					categoryPerexContent.append(showMoreBtn)
					showMoreBtn.addEventListener('click', function () {
						categoryPerexWrapper.classList.toggle('--show-more')
						showMoreBtn.classList.toggle('--show-more')
					})
				}
			}

			let link = document.createElement('a')
			link.classList.add('btn', 'btn-custom')
			if (language == 'cs') link.textContent = 'Zobrazit produkty'
			if (language == 'sk') link.textContent = 'Zobraziť produkty'
			if (language == 'hu') link.textContent = 'Termékek megtekintése'

			link.href = '#products'
			categoryPerexContent.append(link)

			document.querySelector('#content-wrapper').before(categoryHeader)
		} else {
			let catTitle = document.querySelector('#content .category-title'),
				catPerex = document.querySelector('#content .category-perex:not(.empty-content)')
			if (catTitle) catTitle.remove()
			if (catPerex) catPerex.remove()
		}
	}

	handleCategory()
	document.addEventListener('ShoptetDOMContentLoaded', handleCategory)

	function handleHeaderImg(imgSrc) {
		let categoryHeaderImage = document.querySelector('.custom-category-image')
		categoryHeaderImage.src = imgSrc
	}

	setTimeout(() => {
		handleHeaderImg(categoryImgSrc)
	}, 100)

	function handlesubcategories() {
		if (!document.querySelector('.subcategories-section')) {
			const subcategories = document.querySelector('.subcategories')
			if (subcategories) {
				const subcategoriesSection = document.createElement('div')
				const subcategoriesTitle = document.createElement('h2')

				subcategoriesSection.classList.add('subcategories-section', 'container')
				subcategoriesTitle.classList.add('subcategories-title')

				if (language == 'cs') subcategoriesTitle.textContent = 'Kategorie'
				if (language == 'sk') subcategoriesTitle.textContent = 'Kategórie'
				if (language == 'hu') subcategoriesTitle.textContent = 'Kategóriák'

				subcategoriesSection.append(subcategoriesTitle)
				subcategoriesSection.append(subcategories)
				document.querySelector('#content-wrapper').before(subcategoriesSection)

				let subcategoriesItems = subcategories.querySelectorAll('li')
				if (subcategoriesItems.length) {
					if (subcategoriesItems[3] && window.innerWidth < 768) {
						subcategoriesItems.forEach((item, index) => {
							if (index > 3) {
								item.classList.add('--hidden')
							}
						})
					}
				}

				let showMoreBtn = document.createElement('button')
				showMoreBtn.classList.add('btn', 'btn-custom')
				if (language == 'cs') showMoreBtn.textContent = 'Zobrazit další'
				if (language == 'sk') showMoreBtn.textContent = 'Zobraziť ďalšie'
				if (language == 'hu') showMoreBtn.textContent = 'Mutass többet'
				subcategoriesSection.append(showMoreBtn)

				showMoreBtn.addEventListener('click', function () {
					subcategoriesSection.classList.toggle('--show-more')
					showMoreBtn.classList.toggle('--show-more')
					if (showMoreBtn.textContent == 'Zobrazit další' || showMoreBtn.textContent == 'Zobraziť ďalšie' || showMoreBtn.textContent == 'Mutass többet') {
						if (language == 'cs') showMoreBtn.textContent = 'Zobrazit méně'
						if (language == 'sk') showMoreBtn.textContent = 'Zobraziť menej'
						if (language == 'hu') showMoreBtn.textContent = 'Mutass kevesebbet'
					} else {
						if (language == 'cs') showMoreBtn.textContent = 'Zobrazit další'
						if (language == 'sk') showMoreBtn.textContent = 'Zobraziť ďalšie'
						if (language == 'hu') showMoreBtn.textContent = 'Mutass többet'
					}
				})
			}
		} else {
			let cutSubcategories = document.querySelector('#content-wrapper .subcategories')
			if (cutSubcategories) cutSubcategories.remove()
		}
	}
	handlesubcategories()
	document.addEventListener('ShoptetDOMContentLoaded', handlesubcategories)

	if (window.innerWidth <= 767) {
		function handlecategoryHeader() {
			const categoryHeader = document.querySelector('#category-header')
			const products = document.querySelector('#products')
			if (categoryHeader && products) {
				products.before(categoryHeader)
			}
		}
		handlecategoryHeader()
		document.addEventListener('ShoptetDOMContentLoaded', handlecategoryHeader)
	}
}
