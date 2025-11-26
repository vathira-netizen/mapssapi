let map;

// MUST match callback name in HTML
function initMap() {
  // Default center (Bangalore). Replace with any location.
  const defaultLocation = { lat: 12.9716, lng: 77.5946 };

  // Create map
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: defaultLocation,
  });

  // Add marker
  new google.maps.Marker({
    position: defaultLocation,
    map,
    title: "Default Location",
  });

  // Button: go to user location
  const btn = document.getElementById("loc-btn");

  btn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          map.setCenter(userPos);
          map.setZoom(15);

          new google.maps.Marker({
            position: userPos,
            map,
            title: "You are here",
          });
        },
        () => {
          alert("Could not get your location.");
        }
      );
    } else {
      alert("Geolocation not supported.");
    }
  });
}
