const selector = document.getElementById("tel");
const im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

new JustValidate('.js-form', {
  rules: {
    name: {
      required: true,
      minLength: 2
    },
    tel: {
      required: true,
      function :(name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
  },
  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат'
  },

  colorWrong: '#ff5c00'

});
