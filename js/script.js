'use strict';

$(document).ready(function () {
    $(window).scroll();
});

$(window).scroll(function () {
    changeMenu();
});

// MENU
function changeMenu() {
    var navHeight = $('.navbar').height();
    var currentPosition = $(window).scrollTop();
    
    if ($(window).scrollTop() > navHeight) {
        $('.navbar').addClass('menu-class');
        $('.navbar').css({transition: 'all .5s'});
        //$('#navigation a').css({color: 'aliceblue'});
    } else {
        $('.navbar').removeClass('menu-class');
        //$('#navigation a').css({color: '#f88159'});
    }
};

// ACCORDION
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}

// GOOGLE MAP
function myMap() {
        var sunflower = {lat: 50.0977, lng: 19.9571};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
            mapTypeId: google.maps.MapTypeId.HYBRID,
          center: sunflower
        });
        var marker = new google.maps.Marker({
          position: sunflower,
          map: map
        });
var Map = new google.maps.Map(document.getElementById("map"), mapOptions);
}