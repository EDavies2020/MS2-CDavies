function initMap() {
        const dryslwyn = { lat: 51.870022, lng: -4.105435 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 14,
          center: dryslwyn,
        });
        const marker = new google.maps.Marker({
          position: dryslwyn,
          map: map,
        });
      }