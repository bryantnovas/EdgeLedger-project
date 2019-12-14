
// Map with marker
var map;
function initMap() {
  var loc = {lat: 40.759010, lng: -73.984474 }
  map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 14
  });
  const marker = new google.maps.Marker({ position: loc, map: map })
}

// sticky menu background
window.addEventListener('scroll', function(){
  if(window.scrollY > 150){
    document.querySelector('#navbar').style.opacity = 0.9; 
  } else {
    document.querySelector('#navbar').style.opacity = 1; 
  }
});

// Smooth Scrolling with Jquery
$('#navbar a, .btn').on('click', function(event){
  if(this.hash !== ''){
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top -100
    }, 800)
  }
})
