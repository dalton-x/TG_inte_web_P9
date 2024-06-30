$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });

  initMap();
});

function initMap() {
    // Coordonnées de votre adresse
    const location = { lat: 44.8465743, lng: -0.6065365 };
  
    // Créer la carte
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: location,
    });
  
    // Marker sur l'adresse
    new google.maps.Marker({
      position: location,
      map: map,
      title: "68 avenue Alsace-Lorraine, 33200 Bordeaux",
    });
  }
  
