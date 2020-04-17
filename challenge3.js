var latitude4= '36.778259';
var longitude4= '-119.417931';

function infoLandingPad4(){
	var API='https://api.spacexdata.com/v3/landpads/LZ-4';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam =data.location.name+" - "+data.full_name;
		var regio=data.location.region;
		document.getElementById('naam4').innerHTML = naam;
		document.getElementById('regio4').innerHTML = regio;
		//locatie
		latitude4 = data.location.latitude;
		longitude4 = data.location.longitude;
	});
}

function infoWeer4() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + latitude4 +'&lon='+ longitude4 + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp);
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuur4').innerHTML = temperatuur+'&#176;C';
		document.getElementById('wind4').innerHTML = wind+' meter/sec';
		document.getElementById('zicht4').innerHTML = Math.round(zicht/1000)+'km ver zicht';
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuur4').classList.add("check");
		}
		else{
			document.getElementById('temperatuur4').classList.remove("check");
		}
		if(wind<=3.3){
			document.getElementById('wind4').classList.add("check");	
		}
		else{
			document.getElementById('wind4').classList.remove("check");
		}
		if(zicht>=16093){
			document.getElementById('zicht4').classList.add("check");
			document.getElementById('zicht4').innerHTML = 'Maximaal zicht';
		}
		else{
			document.getElementById('zicht4').classList.remove("check");
		}
	});
}

var latitude1= '28.485833';
var longitude1= '-80.544444';

function infoLandingPad1(){
	var API='https://api.spacexdata.com/v3/landpads/LZ-1';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam =data.location.name+" - "+data.full_name;
		var regio=data.location.region;
		document.getElementById('naam1').innerHTML = naam;
		document.getElementById('regio1').innerHTML = regio;
		//locatie
		latitude1 = data.location.latitude;
		longitude1 = data.location.longitude;
	});
}

function infoWeer1() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + latitude1 +'&lon='+ longitude1 + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp);
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuur1').innerHTML = temperatuur+'&#176;C';
		document.getElementById('wind1').innerHTML = wind+' meter/sec';
		document.getElementById('zicht1').innerHTML = Math.round(zicht/1000)+'km ver zicht';
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuur1').classList.add("check");
		}
		else{
			document.getElementById('temperatuur1').classList.remove("check");
		}
		if(wind<=3.3){
			document.getElementById('wind1').classList.add("check");	
		}
		else{
			document.getElementById('wind1').classList.remove("check");
		}
		if(zicht>=16093){
			document.getElementById('zicht1').classList.add("check");
			document.getElementById('zicht1').innerHTML = 'Maximaal zicht';
		}
		else{
			document.getElementById('zicht1').classList.remove("check");
		}
	});
}

var kaart1;
var kaartOCISLY;
var kaartJRTI;

function infoKaart() {
	// set options for map 
	var kaartStijl=[
		  {
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#8ec3b9"
		      }
		    ]
		  },
		  {
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1a3646"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.country",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.land_parcel",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#64779e"
		      }
		    ]
		  },
		  {
		    "featureType": "administrative.province",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#4b6878"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.man_made",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#334e87"
		      }
		    ]
		  },
		  {
		    "featureType": "landscape.natural",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#6f9ba5"
		      }
		    ]
		  },
		  {
		    "featureType": "poi",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.business",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "poi.park",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#3C7680"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#304a7d"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.icon",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "road",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#2c6675"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "geometry.stroke",
		    "stylers": [
		      {
		        "color": "#255763"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#b0d5ce"
		      }
		    ]
		  },
		  {
		    "featureType": "road.highway",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#023e58"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "stylers": [
		      {
		        "visibility": "off"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#98a5be"
		      }
		    ]
		  },
		  {
		    "featureType": "transit",
		    "elementType": "labels.text.stroke",
		    "stylers": [
		      {
		        "color": "#1d2c4d"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.line",
		    "elementType": "geometry.fill",
		    "stylers": [
		      {
		        "color": "#283d6a"
		      }
		    ]
		  },
		  {
		    "featureType": "transit.station",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#3a4762"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "geometry",
		    "stylers": [
		      {
		        "color": "#0e1626"
		      }
		    ]
		  },
		  {
		    "featureType": "water",
		    "elementType": "labels.text.fill",
		    "stylers": [
		      {
		        "color": "#4e6d70"
		      }
		    ]
		  }
		];

	var kaartOpties1 = {
		center: {
			lat: 28.4104, 
			lng: -80.6188
		},
		zoom: 11,
		styles:kaartStijl
	};

	// create map and add to page
	kaart1 = new google.maps.Map(document.getElementById('kaart1'), kaartOpties1);

	var kaartOptiesOCISLY = {
		center: {
			lat: 28.4104, 
			lng: -80.6188
		},
		zoom: 11,
		styles:kaartStijl
	};

	kaartOCISLY = new google.maps.Map(document.getElementById('kaartOCISLY'), kaartOptiesOCISLY);

	var kaartOptiesJRTI = {
		center: {
			lat: 28.4104, 
			lng: -80.6188
		},
		zoom: 11,
		styles:kaartStijl
	};

	// create map and add to page
	kaartJRTI = new google.maps.Map(document.getElementById('kaartJRTI'), kaartOptiesJRTI);
}

var latitudeOCISLY= '28.4104';
var longitudeOCISLY= '-80.6188';

function infoLandingPadOCISLY(){
	var API='https://api.spacexdata.com/v3/landpads/OCISLY';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam =data.full_name;
		var regio=data.location.region+" - "+data.location.name;
		document.getElementById('naamOCISLY').innerHTML = naam;
		document.getElementById('regioOCISLY').innerHTML = regio;
		//locatie
		latitudeOCISLY = data.location.latitude;
		longitudeOCISLY = data.location.longitude;
	});
}

function infoWeerOCISLY() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + latitudeOCISLY +'&lon='+ longitudeOCISLY + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp);
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuurOCISLY').innerHTML = temperatuur+'&#176;C';
		document.getElementById('windOCISLY').innerHTML = wind+' meter/sec';
		document.getElementById('zichtOCISLY').innerHTML = Math.round(zicht/1000)+'km ver zicht';
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuurOCISLY').classList.add("check");
		}
		else{
			document.getElementById('temperatuurOCISLY').classList.remove("check");
		}
		if(wind<=3.3){
			document.getElementById('windOCISLY').classList.add("check");	
		}
		else{
			document.getElementById('windOCISLY').classList.remove("check");
		}
		if(zicht>=16093){
			document.getElementById('zichtOCISLY').classList.add("check");
			document.getElementById('zichtOCISLY').innerHTML = 'Maximaal zicht';
		}
		else{
			document.getElementById('zichtOCISLY').classList.remove("check");
		}
	});
}

var latitudeJRTI= '33.7291858';
var longitudeJRTI= '-118.262015';

function infoLandingPadJRTI(){
	var API='https://api.spacexdata.com/v3/landpads/JRTI';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam =data.full_name;
		var regio=data.location.region+" - "+data.location.name;
		document.getElementById('naamJRTI').innerHTML = naam;
		document.getElementById('regioJRTI').innerHTML = regio;
		//locatie
		latitudeJRTI = data.location.latitude;
		longitudeJRTI = data.location.longitude;
	});
}

function infoWeerJRTI() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + latitudeJRTI +'&lon='+ longitudeJRTI + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp);
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuurJRTI').innerHTML = temperatuur+'&#176;C';
		document.getElementById('windJRTI').innerHTML = wind+' meter/sec';
		document.getElementById('zichtJRTI').innerHTML = Math.round(zicht/1000)+'km ver zicht';
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuurJRTI').classList.add("check");
		}
		else{
			document.getElementById('temperatuurJRTI').classList.remove("check");
		}
		if(wind<=3.3){
			document.getElementById('windJRTI').classList.add("check");	
		}
		else{
			document.getElementById('windJRTI').classList.remove("check");
		}
		if(zicht>=16093){
			document.getElementById('zichtJRTI').classList.add("check");
			document.getElementById('zichtJRTI').innerHTML = 'Maximaal zicht';
		}
		else{
			document.getElementById('zichtJRTI').classList.remove("check");
		}
	});
}

function toonTabbladen() {
	var base4=document.getElementById('base4');
		var base1=document.getElementById('base1');
		var baseOCISLY=document.getElementById('baseOCISLY');
		var baseJRTI=document.getElementById('baseJRTI');

	if (screen.width<768) {
		base4.style.display = "block";
		base1.style.display = "none";
		baseOCISLY.style.display = "none";
		baseJRTI.style.display = "none";

		document.getElementById('knop4').onclick=
		function toonBase4(){
			base4.style.display = "block";
			base1.style.display = "none";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knop1').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "block";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knopOCISLY').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "none";
			baseOCISLY.style.display = "block";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knopJRTI').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "none";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "block";
		}
	}
	else if (screen.width<1024 && screen.width>=768) {
		base4.style.display = "grid";
		base1.style.display = "none";
		baseOCISLY.style.display = "none";
		baseJRTI.style.display = "none";

		document.getElementById('knop4').onclick=
		function toonBase4(){
			base4.style.display = "grid";
			base1.style.display = "none";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knop1').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "grid";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knopOCISLY').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "none";
			baseOCISLY.style.display = "grid";
			baseJRTI.style.display = "none";
		}

		document.getElementById('knopJRTI').onclick=
		function toonBase4(){
			base4.style.display = "none";
			base1.style.display = "none";
			baseOCISLY.style.display = "none";
			baseJRTI.style.display = "grid";
		}
	}
	else {
		base4.style.display = null;
		base1.style.display = null;
		baseOCISLY.style.display = null;
		baseJRTI.style.display = null;
	}
}

// alle functies activeren
toonTabbladen();
window.onresize = toonTabbladen;
infoLandingPad4();
infoWeer4();
infoLandingPad1();
infoWeer1();
infoLandingPadOCISLY();
infoWeerOCISLY();
infoLandingPadJRTI();
infoWeerJRTI();
