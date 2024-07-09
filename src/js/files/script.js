// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

if (document.title === 'Головна сторінка') {
	function addActiveClass() {
		let menuItems = document.getElementsByClassName('menu__link');
		for (let i = 0; i < menuItems.length; i++) {
			menuItems[i].addEventListener('click', function () {
				if (window.innerWidth > 767) {
					for (let j = 0; j < menuItems.length; j++) {
						menuItems[j].parentElement.classList.remove('_active-color');
					}
					this.parentElement.classList.add('_active-color');
				}
			});
		}
	}
	addActiveClass();
}

// if (document.title === 'Пончик круглий') {
// function getPriceValueProductOne() {
// 	// Отримуємо елементи розміру та цін з HTML-структури
// 	const sizeOptions = document.querySelectorAll('input[name="size"]');
// 	const oldPriceElement = document.querySelector('.price-product__old');
// 	const priceElement = document.querySelector('.price-product__value');
// 	// Встановлюємо обробник події для зміни розміру
// 	sizeOptions.forEach((option) => {
// 		option.addEventListener('change', () => {
// 			// Отримуємо значення вибраного розміру
// 			const selectedSize = document.querySelector('input[name="size"]:checked').value;
// 			// Встановлюємо ціни залежно від вибраного розміру
// 			let price;
// 			let oldPrice;
// 			if (selectedSize === 'S') {
// 				price = 311;
// 				oldPrice = 450;
// 			} else if (selectedSize === 'M') {
// 				price = 380;
// 				oldPrice = 550;
// 			} else if (selectedSize === 'L') {
// 				price = 450;
// 				oldPrice = 650;
// 			}
// 			// Виводимо ціни на сторінку
// 			oldPriceElement.textContent = `$${oldPrice}`;
// 			priceElement.textContent = `$${price}`;
// 		});
// 	});
// !
// let prevCopiedSizeOption = null;
// // Function to copy selected size option
// function copySelectedSizeOption() {
// 	const selectElement = document.querySelector('select[data-class-modif="form"]');
// 	const formSendSize = document.querySelector('.form-send__size');
// 	if (selectElement) {
// 		const selectedOption = selectElement.options[selectElement.selectedIndex];
// 		if (selectedOption) {
// 			// If there's a previously copied size option, remove it
// 			if (prevCopiedSizeOption) {
// 				prevCopiedSizeOption.remove();
// 			}
// 			// Clone and append the new selected size option
// 			const clonedSizeOption = document.createElement('span');
// 			clonedSizeOption.textContent = selectedOption.textContent;
// 			formSendSize.appendChild(clonedSizeOption);
// 			// Update the previously copied size option variable
// 			prevCopiedSizeOption = clonedSizeOption;
// 		}
// 	}
// 	// Отримуємо значення size з div і записуємо в змінну
// 	var sizeDiv = document.getElementById('size');
// 	var size = sizeDiv.textContent || sizeDiv.innerText;
// 	// Записуємо значення size у відповідне приховане поле
// 	var sizeInput = document.createElement('input');
// 	sizeInput.type = 'hidden';
// 	sizeInput.name = 'size';
// 	sizeInput.value = size;
// 	// Додаємо приховане поле до форми
// 	var form = document.querySelector('.form-send');
// 	form.appendChild(sizeInput);
// }
// // Add an event listener to call the copySelectedSizeOption function when needed
// const button = document.querySelector('a[data-popup="#message-good"]');
// button.addEventListener('click', copySelectedSizeOption);
// document.addEventListener('DOMContentLoaded', function () {
// 	const formProduct = document.querySelector('.form-product');
// 	const formSend = document.querySelector('.form-send');
// 	// Функція для копіювання елементів
// 	function copyFormElements() {
// 		const inputsToCopy = formProduct.querySelectorAll('input[type="hidden"]');
// 		inputsToCopy.forEach((input) => {
// 			// Клонуємо інпут
// 			const clonedInput = input.cloneNode(true);
// 			// Додаємо клонований інпут до форми .form-send
// 			formSend.appendChild(clonedInput);
// 		});
// 	}
// 	// Викликаємо функцію для копіювання при завантаженні сторінки
// 	copyFormElements();
// });
// !
// }

const selectElement = document.querySelector('select[data-class-modif="form"]');
if (selectElement) {
	// Отримуємо поточну URL сторінки
	var currentUrl = window.location.href;

	// Отримуємо частину URL, що містить назву сторінки
	var pageName = currentUrl.substr(currentUrl.lastIndexOf('/') + 1);

	// Знаходимо елемент <input> з name="namePage" та змінюємо його значення
	var namePageInput = document.querySelector('input[name="namePage"]');
	if (namePageInput) {
		namePageInput.value = pageName;
	} else {
		console.error('Елемент з name="namePage" не знайдено на сторінці.');
	}
	// !
	let prevCopiedSizeOption = null;

	// Function to copy selected size option
	function copySelectedSizeOption() {
		const selectElement = document.querySelector('select[data-class-modif="form"]');
		const formSendSize = document.querySelector('.form-send__size');

		if (selectElement) {
			const selectedOption = selectElement.options[selectElement.selectedIndex];

			if (selectedOption) {
				// If there's a previously copied size option, remove it
				if (prevCopiedSizeOption) {
					prevCopiedSizeOption.remove();
				}

				// Clone and append the new selected size option
				const clonedSizeOption = document.createElement('span');
				clonedSizeOption.textContent = selectedOption.textContent;
				formSendSize.appendChild(clonedSizeOption);

				// Update the previously copied size option variable
				prevCopiedSizeOption = clonedSizeOption;
			}
		}

		// Отримуємо значення size з div і записуємо в змінну
		var sizeDiv = document.getElementById('size');
		var size = sizeDiv.textContent || sizeDiv.innerText;

		// Записуємо значення size у відповідне приховане поле
		var sizeInput = document.createElement('input');
		sizeInput.type = 'hidden';
		sizeInput.name = 'size';
		sizeInput.value = size;

		// Додаємо приховане поле до форми
		var form = document.querySelector('.form-send');
		form.appendChild(sizeInput);
	}

	// Add an event listener to call the copySelectedSizeOption function when needed
	const button = document.querySelector('a[data-popup="#message-good"]');
	button.addEventListener('click', copySelectedSizeOption);

	document.addEventListener('DOMContentLoaded', function () {
		const formProduct = document.querySelector('.form-product');
		const formSend = document.querySelector('.form-send');

		// Функція для копіювання елементів
		function copyFormElements() {
			const inputsToCopy = formProduct.querySelectorAll('input[type="hidden"]');

			inputsToCopy.forEach((input) => {
				// Клонуємо інпут
				const clonedInput = input.cloneNode(true);
				// Додаємо клонований інпут до форми .form-send
				formSend.appendChild(clonedInput);
			});
			// Отримуємо поточний URL сторінки і записуємо його в поле з ім'ям "linkPage"
			let currentUrl = window.location.href;
			let linkPageInput = document.createElement('input');
			linkPageInput.type = 'hidden';
			linkPageInput.name = 'linkPage';
			linkPageInput.value = currentUrl;
			formSend.appendChild(linkPageInput);
		}

		// Викликаємо функцію для копіювання при завантаженні сторінки
		copyFormElements();
		// Знаходимо всі елементи з класом 'reloadButton'
		const reloadButtons = document.querySelectorAll('.reloadButton');

		// Додаємо обробник події "click" до кожної кнопки з класом 'reloadButton'
		reloadButtons.forEach((button) => {
			button.addEventListener('click', function () {
				// Викликаємо функцію location.reload(), яка перезавантажує поточну сторінку
				location.reload();
			});
		});
	});
	document.addEventListener('selectCallback', function (e) {
		// Селект
		const currentSelect = e.detail;
		console.log('🚀 ~ file: script.js:207 ~ currentSelect:', currentSelect);
	});

	// document.addEventListener('DOMContentLoaded', function (){
	// 	var form = document.querySelector('.form-send');
	// 	var phoneInput = document.getElementById('phoneInput');

	// 	form.addEventListener('submit', function (event) {
	// 		if (!validatePhone(phoneInput.value)) {
	// 			event.preventDefault();
	// 			// alert('Пожалуйста, введите корректный телефонный номер.');
	// 		}
	// 	});

	// 	function validatePhone(phone) {
	// 		// Пример простой валидации для украинского номера телефона
	// 		var phoneRegex = /^\+38(0\d{9})$/;
	// 		return phoneRegex.test(phone);
	// 	}
	// });
}

// getPriceValueProductOne();
// Function to copy price
// Function to copy size from .select__content to .form-send__size
// Отримуємо посилання "Оформити замовлення" за класом .form-product__button
// Знаходимо кнопку "Оформити замовлення" за допомогою її селектора
// Знаходимо кнопку "Оформити замовлення" за допомогою її селектора
// Отримуємо посилання на об'єкт <select> та <div>
// Знаходимо кнопку "Оформити замовлення" за допомогою її селектора

//!  Код копіювання змінної
// let prevCopiedSizeOption = null;

// // Function to copy selected size option
// function copySelectedSizeOption() {
// 	const selectElement = document.querySelector('select[data-class-modif="form"]');
// 	const formSendSize = document.querySelector('.form-send__size');

// 	if (selectElement) {
// 		const selectedOption = selectElement.options[selectElement.selectedIndex];

// 		if (selectedOption) {
// 			// If there's a previously copied size option, remove it
// 			if (prevCopiedSizeOption) {
// 				prevCopiedSizeOption.remove();
// 			}

// 			// Clone and append the new selected size option
// 			const clonedSizeOption = document.createElement('span');
// 			clonedSizeOption.textContent = selectedOption.textContent;
// 			formSendSize.appendChild(clonedSizeOption);

// 			// Update the previously copied size option variable
// 			prevCopiedSizeOption = clonedSizeOption;
// 		}
// 	}
// }

// // Add an event listener to call the copySelectedSizeOption function when needed
// const button = document.querySelector('a[data-popup="#message-good"]');
// button.addEventListener('click', copySelectedSizeOption);
// ! =====

// }
/*
function getCheckColorAndSize() {
	// Отримуємо посилання на елементи DOM
	const sizeError = document.querySelector('.size-product__error');
	const colorError = document.querySelector('.color-product__error');
	const orderButton = document.querySelector('.form-product__button');
	// Додаємо обробник події на кнопку "Замовити"
	orderButton.addEventListener('click', function (event) {
		// Перевіряємо, чи вибраний розмір
		const selectedSize = document.querySelector('input[name="size"]:checked');
		if (!selectedSize) {
			// Якщо розмір не вибраний, додаємо стиль блоку помилки
			sizeError.style.display = 'block';
		} else {
			// Якщо розмір вибраний, приховуємо блок помилки
			sizeError.style.display = 'none';
		}
		// Перевіряємо, чи вибраний колір
		const selectedColor = document.querySelector('input[name="color"]:checked');
		if (!selectedColor) {
			// Якщо колір не вибраний, додаємо стиль блоку помилки
			colorError.style.display = 'block';
		} else {
			// Якщо колір вибраний, приховуємо блок помилки
			colorError.style.display = 'none';
		}
		// Якщо обидва вибрані (розмір і колір), додаємо атрибут data-popup
		if (selectedSize && selectedColor) {
			orderButton.setAttribute('data-popup', '#message-good');
		} else {
			// Якщо не вибрані розмір або колір, видаляємо атрибут data-popup
			orderButton.removeAttribute('data-popup');
		}
		// Якщо не вибрані розмір або колір, відміняємо подію (не відправляємо форму)
		if (!selectedSize || !selectedColor) {
			event.preventDefault();
		}
	});
}
getCheckColorAndSize();
*/
/*
// !
// Declare variables to store the previously copied size and color options
let prevCopiedSizeOption = null;
let prevCopiedColorOption = null;

// Function to copy selected size option
function copySelectedSizeOption() {
	const selectedSizeOption = document.querySelector('input[name="size"]:checked');
	if (selectedSizeOption) {
		const formSendProduct = document.querySelector('.form-send__size');

		// If there's a previously copied size option, remove it
		if (prevCopiedSizeOption) {
			prevCopiedSizeOption.remove();
		}

		// Clone and append the new selected size option
		const clonedSizeOption = selectedSizeOption.parentElement.cloneNode(true);
		formSendProduct.appendChild(clonedSizeOption);

		// Update the previously copied size option variable
		prevCopiedSizeOption = clonedSizeOption;
	}
}
// Function to copy selected color option
function copySelectedColorOption() {
	const selectedColorOption = document.querySelector('input[name="color"]:checked');
	if (selectedColorOption) {
		const formSendProduct = document.querySelector('.form-send__color');

		// If there's a previously copied color option, remove it
		if (prevCopiedColorOption) {
			prevCopiedColorOption.remove();
		}

		// Clone and append the new selected color option
		const clonedColorOption = selectedColorOption.parentElement.cloneNode(true);
		formSendProduct.appendChild(clonedColorOption);

		// Update the previously copied color option variable
		prevCopiedColorOption = clonedColorOption;
	}
}
// Function to copy price
function copyPrice() {
	const priceValue = document.querySelector('.price-product__value').innerText;
	const formSendPrice = document.querySelector('.form-send__price');
	formSendPrice.innerText = priceValue;
}
// Event listener for size selection
const sizeOptions = document.querySelectorAll('input[name="size"]');
sizeOptions.forEach((option) => {
	option.addEventListener('change', () => {
		// Copy selected size option
		copySelectedSizeOption();

		// Copy price
		copyPrice();
	});
});
// Event listener for color selection
const colorOptions = document.querySelectorAll('input[name="color"]');
colorOptions.forEach((option) => {
	option.addEventListener('change', () => {
		// Copy selected color option
		copySelectedColorOption();

		// Copy price
		copyPrice();
	});
});

// function getCheckColorAndSize() {
// 	// Отримуємо посилання на елементи DOM
// 	const sizeError = document.querySelector('.size-product__error');
// 	const colorError = document.querySelector('.color-product__error');
// 	const orderButton = document.querySelector('.form-product__button');
// 	const formSendProduct = document.querySelector('.form-send__product'); // The source element with the selected size and color
// 	const popupProduct = document.querySelector('#message-good .form-send__product'); // The target element in the popup

// 	// Додаємо обробник події на кнопку "Замовити"
// 	orderButton.addEventListener('click', function (event) {
// 		// Перевіряємо, чи вибраний розмір
// 		const selectedSize = document.querySelector('input[name="size"]:checked');
// 		if (!selectedSize) {
// 			// Якщо розмір не вибраний, додаємо стиль блоку помилки
// 			sizeError.style.display = 'block';
// 		} else {
// 			// Якщо розмір вибраний, приховуємо блок помилки
// 			sizeError.style.display = 'none';
// 		}

// 		// Перевіряємо, чи вибраний колір
// 		const selectedColor = document.querySelector('input[name="color"]:checked');
// 		if (!selectedColor) {
// 			// Якщо колір не вибраний, додаємо стиль блоку помилки
// 			colorError.style.display = 'block';
// 		} else {
// 			// Якщо колір вибраний, приховуємо блок помилки
// 			colorError.style.display = 'none';
// 		}

// 		// Якщо обидва вибрані (розмір і колір), додаємо атрибут data-popup
// 		if (selectedSize && selectedColor) {
// 			orderButton.setAttribute('data-popup', '#message-good');

// 			// Копіюємо значення розміру і колору у блок form-send__product в popup
// 			popupProduct.innerHTML = `
// 				<p>Selected Size: ${selectedSize.value}</p>
// 				<p>Selected Color: ${selectedColor.value}</p>
// 			`;
// 		} else {
// 			// Якщо не вибрані розмір або колір, видаляємо атрибут data-popup
// 			orderButton.removeAttribute('data-popup');

// 			// Очищуємо блок form-send__product в popup, якщо обидва елементи не вибрані
// 			popupProduct.innerHTML = '';
// 		}

// 		// Якщо не вибрані розмір або колір, відміняємо подію (не відправляємо форму)
// 		if (!selectedSize || !selectedColor) {
// 			event.preventDefault();
// 		}
// 	});
// }
// getCheckColorAndSize();
*/
