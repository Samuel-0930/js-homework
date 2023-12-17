const emailInput = document.querySelector('.user-email-input');
const pwInput = document.querySelector('.user-password-input');
const form = document.querySelector('.login-form');

const user = {
	id: 'asd@naver.com',
	pw: 'spdlqj123!@',
};

/**
 * & mail validation function
 * @param {*} text
 * @returns
 */
function emailReg(text) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(text).toLowerCase());
}

// [function] password validation function
/**
 *
 * @param {*} text
 * @returns
 */
function pwReg(text) {
	const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
	return re.test(String(text).toLowerCase());
}

// [function] check if it is email or password
/**
 *
 * @param {*} target
 * @returns
 */
function emailOrPassword(target) {
	if (target === emailInput) return true;
	else return false;
}

// [function] control error message
/**
 *
 * @param {*} event
 */
function validation(event) {
	const value = event.target.value;
	if (emailOrPassword(event.target)) {
		emailReg(value)
			? emailInput.classList.remove('is--invalid')
			: emailInput.classList.add('is--invalid');
	} else {
		pwReg(value)
			? pwInput.classList.remove('is--invalid')
			: pwInput.classList.add('is--invalid');
	}
}

// [function] move page location
/**
 *
 * @param {*} email
 * @param {*} pw
 */
function login(email, pw) {
	compare(email, pw)
		? (window.location.href = 'welcome.html')
		: console.log('잘 못 입력하셨습니다!!');
}

// [function] check if it is exact same id and password
/**
 *
 * @param {*} id
 * @param {*} pw
 * @returns
 */
function compare(id, pw) {
	if (id === user.id && pw === user.pw) {
		return true;
	} else {
		return false;
	}
}

//1. 정규표현식을 사용한 validation
emailInput.addEventListener('input', validation);
pwInput.addEventListener('input', validation);

//2. 로그인 버튼을 클릭시 조건처리
form.addEventListener('submit', (event) => {
	event.preventDefault();
	login(emailInput.value, pwInput.value);
});
