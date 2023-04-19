function initMap() {
  var map = new google.maps.Map(document.getElementById('mapplace'), {
    center: {lat: 42.770503881520774, lng: 12.463473127505198},
    zoom: 6
  });
  
  var marker = new google.maps.Marker({
    position: {lat: 42.770503881520774, lng: 12.463473127505198},
    map:map,
    icon: {
      url: 'https://cdn2.iconfinder.com/data/icons/IconsLandVistaMapMarkersIconsDemo/256/MapMarker_Marker_Outside_Pink.png',
      scaledSize: new google.maps.Size(40, 40)
    }
  });
  
  var mapText = new google.maps.InfoWindow({
    content: "Here is where I would like to visit"
  });
  
  marker.addListener('click', function() {
    mapText.open(map, marker);
  });
  
  var chicago = {lat: 41.88440254314403, lng: -87.62626495557123};

  var line = new google.maps.Polyline({
    path: [marker.getPosition(), chicago],
    strokeColor: 'purple',
    strokeOpacity: 1.0,
    strokeWeight: 1
  });

  line.setMap(map);
  
  
}
if (document.body.classList.contains('index')){
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
}
