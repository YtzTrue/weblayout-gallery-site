document.querySelectorAll('.nav-bottom__button').forEach(item => {
  item.addEventListener('click', function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector('.dropdown');

    document.querySelectorAll('.nav-bottom__button').forEach(el => {
    if (el != btn) {
      el.classList.remove('active');
      }
    });

    document.querySelectorAll('.dropdown').forEach(el => {
      if (el != dropdown) {
        el.classList.remove('active');
      }
    })

    dropdown.classList.toggle('active');
    btn.classList.toggle('active')
  })
})
