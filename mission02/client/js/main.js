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

function setBgColor(index) {
	body.style.background = `linear-gradient(to bottom, ${data[index].color[0]},${data[index].color[1]})`;
}

function setImage(index) {
	visual.src = `./assets/${data[index].name}.jpeg`;
	visual.alt = data[index].alt;
}

function setNameText(index) {
	nickName.textContent = data[index].name;
}

function control(node) {
	const index = parseInt(node.getAttribute('data-index')) - 1;

	controlActive(node);
	setBgColor(index);
	setImage(index);
	setNameText(index);
}

function removeActive() {
	const lists = document.querySelectorAll('.nav li');

	lists.forEach((list) => {
		list.classList.remove('is-active');
	});
}

function addActive(node) {
	node.classList.add('is-active');
}

function controlActive(node) {
	removeActive();
	addActive(node);
}

nav.addEventListener('click', handleClick);
