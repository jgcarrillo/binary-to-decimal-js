const buttons = document.querySelectorAll('input[type="button"]');
const decimalContainer = document.querySelector('#decimal');

let binary = [];

buttons.forEach((button) => {
	button.addEventListener('click', (e) => {
		if (e.target.value == 0) {
			e.target.value = 1;
		} else if (e.target.value == 1) {
			e.target.value = 0;
		}

		for (let i = 0, j = buttons.length - 1; i < buttons.length, j >= 0; i++, j--) {
			binary[i] = {
				pos: j,
				value: buttons[i].value,
			};
		}

		let sum = 0;
		binary.forEach((num) => {
			sum += num.value * Math.pow(2, num.pos);
		});

		decimalContainer.value = sum;
	});
});
