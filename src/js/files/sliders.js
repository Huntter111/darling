/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay, EffectFade, Thumbs, Controller} from 'swiper/modules';
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import '../../scss/base/swiper.scss';
// Повний набір стилів з scss/libs/swiper.scss
import '../../scss/libs/swiper.scss';
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.main-page__slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.main-page__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Pagination, Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 1000,
			//touchRatio: 0,
			//simulateTouch: false,
			loop: true,
			//preloadImages: false,
			// lazy: true,

			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			// Пагінація
			pagination: {
				el: '.main-page__pagination',
				clickable: true,
			},

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			/*
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},
			*/
			/*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {},
		});
	}
	if (document.querySelector('.materials__wrapper-slider')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.materials__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Pagination, Autoplay],
			observer: true,
			observeParents: true,
			slidesPerView: 0,
			spaceBetween: 0,
			autoHeight: true,
			speed: 500,
			// touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,

			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// },
			// Пагінація
			pagination: {
				el: '.materials__pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.materials__button-prev',
				nextEl: '.materials__button-next',
			},

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},

			// Події
			on: {},
		});
	}
	if (document.querySelector('.body-product__images')) {
		// Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		//! Previw Slider
		let thumbsSwiper = new Swiper('.image-preview__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Autoplay, Thumbs, Controller],
			observer: true,
			observeParents: true,
			slidesPerView: 6,
			spaceBetween: 30,
			autoHeight: true,
			speed: 500,
			// touchRatio: 0,
			//simulateTouch: false,
			//preloadImages: false,
			slideToClickedSlide: true,
			// lazy: true,
			// loop: true,
			freeMode: true,
			watchSlidesProgress: true,
			// Ефекти
			// effect: 'fade',
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// },
			// Пагінація
			/*
			pagination: {
				el: '.materials__pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			/*
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.materials__button-prev',
				nextEl: '.materials__button-next',
			},
			*/

			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 6,
					spaceBetween: 10,
				},
				600: {
					slidesPerView: 6,
					spaceBetween: 15,
				},
				991: {
					slidesPerView: 6,
					spaceBetween: 30,
				},
			},

			// Події
			on: {},
		});
		// Full slider
		let swiper = new Swiper('.image-product__slider', {
			// Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Autoplay, Thumbs, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			// loop: true,
			thumbs: {
				swiper: thumbsSwiper,
			},
			// touchRatio: 0,
			//simulateTouch: false,
			// loop: true,
			//preloadImages: false,
			lazy: true,
			// Ефекти
			effect: 'fade',
			// autoplay: {
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// },
			/*
			// Пагінація
			pagination: {
				el: '.materials__pagination',
				clickable: true,
			},
			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/
			// Кнопки "вліво/вправо"
			navigation: {
				prevEl: '.image-product__button-prev',
				nextEl: '.image-product__button-next',
			},
			/*
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				600: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				991: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
			*/
			// Події
			on: {},
		});
		// Вибираємо всі label для кольорів
		const colorLabels = document.querySelectorAll('.color-product__label');
		// Додаємо обробник події для кожного label
		colorLabels.forEach((label, index) => {
			label.addEventListener('click', () => {
				// Знаходимо слайд за відповідним індексом
				const slide = document.querySelector(`.image-product__slide:nth-child(${index + 1})`);
				// Прокручуємо слайдер до потрібного слайда
				swiper.slideTo(index);
			});
		});
	}
}

// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false,
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener('load', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
