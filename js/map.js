ymaps.ready(init);
function init(){
    const myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 15
    });
    const myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../img/MapMark.svg',
      iconImageSize: [28, 40],
    });
    myMap.geoObjects.add(myPlacemark)
}
