let map;
function initMap() {
  // Default center — change to any coords e.g., Bangalore
  const defaultCenter = { lat: 12.9716, lng: 77.5946 };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: defaultCenter,
  });

  // Add a marker at the center
  new google.maps.Marker({
    position: defaultCenter,
    map,
    title: "Default location",
  });

  // Button to move to user's current location
  const btn = document.getElementById("loc-btn");
  btn.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const p = { lat: pos.coords.latitude, lng: pos.coords.longitude };
          map.setCenter(p);
          map.setZoom(14);
          new google.maps.Marker({ position: p, map, title: "You are here" });
        },
        (err) => {
          alert("Could not get location: " + err.message);
        }
      );
    } else {
      alert("Geolocation not supported by this browser.");
    }
  });
}
