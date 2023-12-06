const emailInput = document.querySelector('.user-email-input');
const emailErrorMessage = document.querySelector('.user-email .error-message');
const pwInput = document.querySelector('.user-password-input');
const pwErrorMessage = document.querySelector('.user-password .error-message');
const form = document.querySelector('.login-form');

const user = {
	id: 'asd@naver.com',
	pw: 'spdlqj123!@',
};

//1. email 정규표현식을 사용한 validation
emailInput.addEventListener('keyup', validation);

//2. pw 정규표현식을 사용한 validation
pwInput.addEventListener('keyup', validation);

//3. 상태 변수 관리

//4. 로그인 버튼을 클릭시 조건처리
form.addEventListener('submit', (event) => {
	event.preventDefault();
	login(emailInput.value, pwInput.value);
});

function emailReg(text) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(String(text).toLowerCase());
}

function pwReg(text) {
	const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
	return re.test(String(text).toLowerCase());
}

function validation(event) {
	const value = event.target.value;
	if (event.target === emailInput) {
		emailReg(value)
			? emailErrorMessage.classList.remove('is--invalid')
			: emailErrorMessage.classList.add('is--invalid');
	} else {
		pwReg(value)
			? pwErrorMessage.classList.remove('is--invalid')
			: pwErrorMessage.classList.add('is--invalid');
	}
}

function login(email, pw) {
	compare(email, pw)
		? (window.location.href = 'welcome.html')
		: console.log('잘 못 입력하셨습니다!!');
}

function compare(id, pw) {
	if (id === user.id && pw === user.pw) {
		return true;
	} else {
		return false;
	}
}
