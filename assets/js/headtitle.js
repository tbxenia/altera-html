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