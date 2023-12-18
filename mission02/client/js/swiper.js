const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: false,
	autoplay: false,
	speed: 300,
	effect: 'fade',
	crossFade: true,
	slidShadows: true,

	// If we need pagination
	pagination: {
		el: '.pagination',
		clickable: true,
		bulletClass: 'bullet',
		bulletActiveClass: 'is-active',
		renderBullet: function (index, className) {
			return /* html */ `
        <span class="${className}">
          <img src="./assets/${data[index].name.toLowerCase()}.jpeg" />
        </span>
      `;
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
	on: {
		slideChange: function (e) {
			const li = document.querySelector(
				`.nav li[data-index = "${e.activeIndex + 1}"]`
			);
			control(li, e.activeIndex);
		},
	},
});
