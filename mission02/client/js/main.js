/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const body = document.querySelector('body');
const nav = document.querySelector('.nav');
const visual = document.querySelector('.visual-image');
const nickName = document.querySelector('.nickName');

function handleClick(e) {
	const li = e.target.closest('li');

	if (!li) return;

	control(li);
}

function control(node) {
	const index = parseInt(node.getAttribute('data-index')) - 1;

	controlActive(node, index);
	setBgColor(index);
	setNameText(index);
}

function setNameText(index) {
	nickName.textContent = data[index].name;
}

function setBgColor(index) {
	body.style.background = `linear-gradient(to bottom, ${data[index].color[0]},${data[index].color[1]})`;
}

function controlActive(node, index) {
	removeActive();
	addActive(node, index);
}

function removeActive() {
	const lists = document.querySelectorAll('.nav li');

	lists.forEach((list) => {
		list.classList.remove('is-active');
	});
}

function addActive(node, index) {
	node.classList.add('is-active');
	swiper.slideTo(index);
}

nav.addEventListener('click', handleClick);
