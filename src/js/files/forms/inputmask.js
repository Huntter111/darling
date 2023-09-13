/* Маски для полів (у роботі) */

// Підключення функціоналу "Чертоги Фрілансера"
// Підключення списку активних модулів
import {flsModules} from '../modules.js';

// Підключення модуля
import 'inputmask/dist/inputmask.min.js';

const inputMasks = document.querySelectorAll('input');
if (inputMasks.length) {
	flsModules.inputmask = Inputmask().mask(inputMasks);
}
// const phoneInput = document.getElementById('phoneInput');

// if (phoneInput) {
// 	const inputMask = new Inputmask({
// 		mask: '+38(099) 999-99-99', // Маска для телефону
// 	});

// 	inputMask.mask(phoneInput);

// 	// Додайте дебаг-повідомлення
// 	phoneInput.addEventListener('input', () => {
// 		console.log('Значення поля вводу телефону:', phoneInput.value);
// 	});

// 	console.log('Маска успішно застосована на полі вводу телефону.');
// } else {
// 	console.error('Поле вводу телефону не знайдено.');
// }
