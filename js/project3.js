function initMap() {
  var map = new google.maps.Map(document.getElementById('mapplace'), {
    center: {lat: 42.770503881520774, lng: 12.463473127505198},
    zoom: 12
  });
}

const gokuimg = document.getElementById('goku');
    
gokuimg.addEventListener('click', () => {
  const t = document.getElementById('text');
  t.textContent = 'GOKU';
});

const tofuimg = document.getElementById('tofu');
    
tofuimg.addEventListener('click', () => {
  const g = document.getElementById('text');
  g.textContent = 'TOFU';
});


