const element = document.querySelector('#customselect');
const choices = new Choices(element, {
  searchEnabled: false,
  position: 'bottom',
  shouldSort: false,
  itemSelectText: ''
});
