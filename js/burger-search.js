// burger
document.querySelector('.burger').addEventListener('click', _=> {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
})

// search
const searchBtn = document.querySelector('.search__btn');
const closeBtn = document.querySelector('.search__close-btn');
const search = document.querySelector('.search');

searchBtn.addEventListener('click', _=> {
  search.classList.add('active');
})

closeBtn.addEventListener('click', _=> {
  search.classList.remove('active');
})

document.addEventListener('click', function(e) {
  const target = e.target;
  const its_search = target == search || search.contains(target);
  const search_is_active = search.classList.contains('active');

  if (!its_search && search_is_active) {
    search.classList.remove('active');
  }
})
