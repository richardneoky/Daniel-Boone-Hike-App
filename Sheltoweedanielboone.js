    //toggleJS
    const toggle = (type) => {
        const matches = document.getElementsByClassName(type)
        for (element of matches){
          if (element.style.display === 'none'){
            element.style.display = "block"
          } else {
            element.style.display = "none"
          }
        }
       }

   //MarkerJs

  

    /*function createMarker(lng, lat, name, info, type, isLandmark, customImg) {


      const popup = new mapboxgl.Popup().setHTML(
        `<h3>${name}</h3><p>${info}</p>`
      );

      const el = document.createElement('div');
      el.className = `marker ${type}`;
      if (isLandmark) el.className += ' landmark'
      if (customImg) el.style.backgroundImage = `url(${customImg})`
      el.style.display = 'none';
      const marker = new mapboxgl.Marker(el)
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(map);
    }

    const mapMarkerData = [
      {
        //Miguel's
        lng: -83.68291,
        lat: 37.78336,
        name: 'Miguels',
        info: 'Miguels Pizza 1890 Natural Bridge Rd, Slade, KY 40376 http://www.miguelspizza.com/ +16066631975 ',
        type: 'food',
        isLandMark: true,
        customImg: 'https://lh3.googleusercontent.com/ce-P1gGXKq8oVV0B0BE66NSyY6jJ-KLA2o4pG8RJEYJ_IG_Y0BgMS85ZdNw7q5rnXu41mPg4ly2E-p9vMjG-jQK09rbd3Blc0SlfmWQm2HMIa_BzepS86HnUxuoVfUerky3oz1qpOg=s200-p-k',
      },
    ]







    for (const markerData of mapMarkerData) {
        createMarker(markerData.lng, markerData.lat, markerData.name, markerData.info, markerData.type, markerData.isLandMark, markerData.customImg)
      }
*/
      //Zoom Controls
      
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());
    
    