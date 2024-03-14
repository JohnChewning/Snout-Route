const mapData = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.016193,-83.705521&radius=5000&type=park&key=AIzaSyDxyl56_sTUDJJ1UQoztW668OEGNHjTRHo"

function initMap(){
    map = new google.maps.Map(document.getElementById("map"), {
       center: { lat: -34.397, lng: 150.644 },
       zoom: 10
    });
   }
   
   fetch(mapData).then(data => {
       return data.json()
   }).then(jsonData => {
       console.log(jsonData.results)
   }).catch(error => {console.log(error);
   })