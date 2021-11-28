// burger
document.querySelector('.burger').addEventListener('click', _=> {
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.nav').classList.toggle('active');
})

// search
document.querySelector('.search__btn').addEventListener('click', _=> {
  document.querySelector('.search').classList.add('active');
})

document.querySelector('.search__close-btn').addEventListener('click', _=> {
  document.querySelector('.search').classList.remove('active');
})
