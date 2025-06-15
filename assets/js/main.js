document.addEventListener("DOMContentLoaded", () => {
	const advantagesSlider = new Swiper(".slider__advantages", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: true,
		autoplay: {
			delay: 2000,
		},
	});
	
	const reviewsSlider = new Swiper(".slider__reviews", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: true,
		autoplay: false,
	});
	
	const usabilitySlider = new Swiper(".slider__usability", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		autoplay: {
			delay: 1000,
			disableOnInteraction: false,
		},
		spaceBetween: 15,
		breakpoints: {
		   0: {
			   enabled: false,
		   },
		   480: {
			   enabled: true,
		   }
		}
	});
	
	Fancybox.bind("[data-fancybox]", {
		
	});
	
	function setEqualHeight(classBlock) {
		const blocks = document.querySelectorAll(classBlock);
		let maxHeight = 0;

		blocks.forEach(block => {
			block.style.height = 'auto';
		});

		blocks.forEach(block => {
			const height = block.offsetHeight;
			if (height > maxHeight) {
				maxHeight = height;
			}
		});

		blocks.forEach(block => {
			block.style.height = maxHeight + 'px';
		});
	}
});

window.addEventListener('load', setEqualHeight('.reviews-block__title'));
window.addEventListener('resize', setEqualHeight('.reviews-block__title'));