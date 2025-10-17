function positionLabel(labelClass) {
	const blockWithLabel = document.querySelectorAll(`${labelClass}`);
	if(blockWithLabel) {
		blockWithLabel.forEach(block => {
			console.log(block.offsetTop);
			document.querySelector('[data-name='+ block.id +']').style.top = block.offsetTop + 'px';
		});
	}
}

document.addEventListener("scroll", () => {
	positionLabel('.label-p');
});

document.addEventListener("DOMContentLoaded", () => {
	
	positionLabel('.label-p');
	
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
		/* navigation: {
			nextEl: '.usability__nav .slider__next',
			prevEl: '.usability__nav .slider__prev',
		}, */
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		},
		spaceBetween: 15,
		breakpoints: {
		   0: {
			   enabled: false,
		   },
		   576: {
			   enabled: true,
		   }
		}
	});
	
	const teamSlider = new Swiper(".team__cards-inner", {
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
	
	const services = new Swiper(".services", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: false,
		speed: 1200,
		autoplay: false,
		spaceBetween: 15,
		/* navigation: {
			nextEl: '.services__nav .slider__next',
			prevEl: '.services__nav .slider__prev',
		}, */
		breakpoints: {
		   0: {
			   enabled: false
		   },
		   576: {
			   enabled: true,
		   }
		}
	});
	
	const teamSliderHome = new Swiper(".team__cards-home", {
		slidesPerView: 'auto',
		slidesPerGroup: 1,
		loop: true,
		speed: 1200,
		autoplay: false,
		spaceBetween: 15,
		/* navigation: {
			nextEl: '.team__nav .slider__next',
			prevEl: '.team__nav .slider__prev',
		}, */
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

const createWrapper = classWrapper => {
	  const wrapper = document.createElement('div');
	  wrapper.classList.add(classWrapper);
	  return wrapper;
	};

	const createTitle = () => {
	  const title = document.createElement('div');
	  title.classList.add('sidebar-title');
	  title.textContent = 'Содержание статьи';
	  return title;
	};

	const createList = classList => {
	  const ol = document.createElement('ol');
	  ol.classList.add(`${classList}`);
	  return ol;
	};

	const createLink = (item, index, baseUrl) => {
	  const link = document.createElement('a');
	  if (!item.id) {
		item.id = 'id-' + index;
	  }
	  link.setAttribute('data-id', item.id);
	  link.href = `${baseUrl}#${item.id}`;
	  link.textContent = item.textContent;
	  return link;
	};

	const addToList = (headers, ol, baseUrl) => {
	  headers.forEach((item, index) => {
		const li = document.createElement('li');
		const link = createLink(item, index, baseUrl);
		li.appendChild(link);
		ol.appendChild(li);
	  });
	};

	const appendToTarget = (output, target) => {
	  target.append(output);
	};

	const highlightSectionOnScroll = tocSelector => {
	  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	  const links = document.querySelectorAll(`${tocSelector} a`);

	  links.forEach(link => {
		const hash = link.getAttribute("data-id");
		const target = document.getElementById(hash);
	  });
	};

	const clickToScroll = event => {
	  event.preventDefault();
	  const id = event.target.getAttribute('data-id');
	  const targetElement = document.getElementById(id);

	  if (targetElement) {
		window.scrollTo({
		  top: targetElement.offsetTop - 100,
		  behavior: 'smooth'
		});
	  }
	};
	const generateTOC = target => {
	  if (!target) {
		console.error("Не передан целевой блок");
		return;
	  }

	  const tocSelector = "article-nav";
	  const wrapperSelector = "articles__headtitle";

	  const output = document.createDocumentFragment();
	  const headers = document.querySelectorAll('.article__body h2, h3');
	  const wrapper = createWrapper(wrapperSelector);
	  wrapper.classList.add('article__block');
	  const title = createTitle();
	  const ol = createList(tocSelector);

	  const baseUrl = location.href.split('#')[0];

	  output.appendChild(wrapper);
	  wrapper.append(title, ol);

	  addToList(headers, ol, baseUrl);
	  appendToTarget(output, target);

	  document.addEventListener("scroll", () => {
		highlightSectionOnScroll(`.${tocSelector}`);
	  });

	  document.addEventListener('click', event => {
		if (event.target.matches(`.${wrapperSelector} li a`)) {
		  clickToScroll(event);
		}
	  });
	};

	document.addEventListener("DOMContentLoaded", () => {
	  const targetTOC = document.querySelector('aside');
	  generateTOC(targetTOC);
	});