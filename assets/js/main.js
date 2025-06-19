document.addEventListener("DOMContentLoaded", () => {
	
	const pathTo = "./assets/js/";
	
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
	
	const teamSlider = new Swiper(".team__cards", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		autoplay: false,
		spaceBetween: 15,
		breakpoints: {
		   0: {
			   enabled: true,
		   },
		   576: {
			   enabled: false,
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
	
	window.addEventListener('load', setEqualHeight('.reviews-block__title'));
	window.addEventListener('resize', setEqualHeight('.reviews-block__title'));
	
	/* burger */
	
	const burgerButton = document.getElementById('burger');
		
	const menu = document.querySelector('.mobile-menu');
	const overlay = document.querySelector('.overlay');
	const body = document.querySelector('body');

	function addMenu() {
		menu.classList.add('active');
		overlay.classList.add('active');
		body.classList.add('fixed');
	}
	
	function removeMenu() {
		menu.classList.remove('active');
		overlay.classList.remove('active');
		body.classList.remove('fixed');
	}

	burgerButton.addEventListener('click', function(event) {
		event.preventDefault();
		addMenu();
	});

	document.addEventListener('click', (event) => {
		if (!menu.contains(event.target) && !burgerButton.contains(event.target)) {
			removeMenu();
		}
	});
	
	/* animate-scroll */
	
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function(e) {
		e.preventDefault();

		const targetID = this.getAttribute('href').slice(1);
		const targetElement = document.getElementById(targetID);

		if (targetElement) {
		  const rect = targetElement.getBoundingClientRect();
		  const absoluteY = window.pageYOffset + rect.top;
		  
		  removeMenu();
		  
		  window.scrollTo({
			top: absoluteY - 67,
			behavior: 'smooth'
		  });
		}
	  });
	});

	const phoneInputs = document.querySelectorAll('input[autocomplete="tel"]');

	phoneInputs.forEach((input) => {
		Inputmask({ mask: "+7 (999) 999-9999", clearIncomplete: true }).mask(input);
	});
});