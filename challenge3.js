// data uit de SpaxeX API halen meer info = https://docs.spacexdata.com/?version=latest
function infoLandingPad4(){
	// API link
	var API='https://api.spacexdata.com/v3/landpads/LZ-4';
	fetch(API)
	.then(function(data) {
		//json bestand zodat we de data kunnen gebruiken
		return data.json();
	})
	.then(function(data) {
	// data bewerken
		// info
		var naam = data.location.name+" - "+data.full_name;
		var regio = data.location.region;
		// data tonen
		document.getElementById('naam4').innerHTML = naam;
		document.getElementById('regio4').innerHTML = regio;
		// locatie
		var latitude4 = data.location.latitude;
		var longitude4 = data.location.longitude;
		// coordinaten doorgeven
		infoWeer4(latitude4, longitude4);
	});
}

// data uit de OpenWeather API meer info = https://openweathermap.org/current
function infoWeer4(inhoudlat4, inhoudlon4) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	// API link samenvoegen, coordinaten van SpaceX API gebruiken
	var API = url + inhoudlat4 +'&lon='+ inhoudlon4 + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp); //afronden op heel getal
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuur4').innerHTML = temperatuur+'&#176;C';
		document.getElementById('wind4').innerHTML = wind+' meter/sec';
		document.getElementById('zicht4').innerHTML = Math.round(zicht/1000)+' km ver zicht'; // van meter naar kilometer
		// checken of de weersomstandingheden optimaal zijn voor een raketlanding
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuur4').classList.add("check"); // groene achtergrond bij .check (CSS)
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

function infoLandingPad1(){
	var API='https://api.spacexdata.com/v3/landpads/LZ-1';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam = data.location.name+" - "+data.full_name;
		var regio = data.location.region;
		document.getElementById('naam1').innerHTML = naam;
		document.getElementById('regio1').innerHTML = regio;
		//locatie
		latitude1 = data.location.latitude;
		longitude1 = data.location.longitude;
		infoWeer1(latitude1, longitude1);
	});
}

function infoWeer1(inhoudlat1, inhoudlon1) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + inhoudlat1 +'&lon='+ inhoudlon1 + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
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
		document.getElementById('zicht1').innerHTML = Math.round(zicht/1000)+' km ver zicht';
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

function infoLandingPadOCISLY(){
	var API='https://api.spacexdata.com/v3/landpads/OCISLY';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam = data.full_name;
		var regio = data.location.region+" - "+data.location.name;
		document.getElementById('naamOCISLY').innerHTML = naam;
		document.getElementById('regioOCISLY').innerHTML = regio;
		//locatie
		var latitudeOCISLY = data.location.latitude;
		var longitudeOCISLY = data.location.longitude;
		infoWeerOCISLY(latitudeOCISLY, longitudeOCISLY);
		// coordinaten in array voor kaart
		var locatieOCISLY = [longitudeOCISLY, latitudeOCISLY];
		laadMapOCISLY(locatieOCISLY);
	});
}

function infoWeerOCISLY(inhoudlatOCISLY, inhoudlonOCISLY) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + inhoudlatOCISLY +'&lon='+ inhoudlonOCISLY + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
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
		document.getElementById('zichtOCISLY').innerHTML = Math.round(zicht/1000)+' km ver zicht';
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

function infoLandingPadJRTI(){
	var API='https://api.spacexdata.com/v3/landpads/JRTI';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam = data.full_name;
		var regio = data.location.region+" - "+data.location.name;
		document.getElementById('naamJRTI').innerHTML = naam;
		document.getElementById('regioJRTI').innerHTML = regio;
		//locatie
		var latitudeJRTI = data.location.latitude;
		var longitudeJRTI = data.location.longitude;
		infoWeerJRTI(latitudeJRTI, longitudeJRTI);
		var locatieJRTI=[longitudeJRTI, latitudeJRTI];
		laadMapJRTI(locatieJRTI);
	});
}

function infoWeerJRTI(inhoudlatJRTI, inhoudlonJRTI) {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + inhoudlatJRTI +'&lon='+ inhoudlonJRTI + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
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
		document.getElementById('zichtJRTI').innerHTML = Math.round(zicht/1000)+' km ver zicht';
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

// API key Mapbox API meer info = https://docs.mapbox.com/mapbox-gl-js/api/
mapboxgl.accessToken = 'pk.eyJ1IjoiMTgwNjgzOTEiLCJhIjoiY2s5NzdndWZxMDl4YzNmbWdkYmtxY3BndyJ9.dJL2YabEA7cPVAzBlyX2Vw';

// kaart voor het landingschip Of Course I Still Love You
function laadMapOCISLY(locOCISLY) {
	// maak kaart
	var mapOCISLY = new mapboxgl.Map({
		// plek in html
		container: 'kaartOCISLY',
		// style (custom thema)
		style: 'mapbox://styles/18068391/ck97ev0et2h6a1io76tah1fzv',
		center: locOCISLY, // coordinaten van SpaceX API
		zoom: 10,
	});
	// marker van locatie schip met coordinaten van SpaceX API
	var marker = new mapboxgl.Marker().setLngLat(locOCISLY).addTo(mapOCISLY);
	// voeg controls toe
	mapOCISLY.addControl(new mapboxgl.NavigationControl()); 
}

// kaart voor het landingschip Just Read The Instructions
function laadMapJRTI(locJRTI) {
	var mapJRTI = new mapboxgl.Map({
	  container: 'kaartJRTI',
	  style: 'mapbox://styles/18068391/ck97ev0et2h6a1io76tah1fzv',
	  center: locJRTI,
	  zoom: 10,
	});
	var marker = new mapboxgl.Marker().setLngLat(locJRTI).addTo(mapJRTI);
	mapJRTI.addControl(new mapboxgl.NavigationControl());
}

function toonTijdFlorida() {
	var date = new Date();
	// Florida tijdzone
	var uren = date.getUTCHours()-4;
	// als het uur uit 1 getal bestaat voeg er dan een '0' aan toe
	if (uren <=9){
		uren = '0'+uren;
	}
	var minuten = date.getUTCMinutes();
	if (minuten <=9){
		minuten = '0'+minuten;
	}
	var seconden = date.getUTCSeconds();
	if (seconden <=9){
		seconden = '0'+seconden;
	}
	// in de HTML
	document.getElementById('tijdflorida').innerHTML=uren+":"+minuten+":"+seconden;
}

function toonTijdCalifornie() {
	var date = new Date();
	// Californie tijdzone
	var uren = date.getUTCHours()-7;
	// als het uur uit 1 getal bestaat voeg er dan een '0' aan toe
	if (uren <=9){
		uren = '0'+uren;
	}
	var minuten = date.getUTCMinutes();
	if (minuten <=9){
		minuten = '0'+minuten;
	}
	var seconden = date.getUTCSeconds();
	if (seconden <=9){
		seconden = '0'+seconden;
	}
	// in de HTML
	document.getElementById('tijdcalifornie').innerHTML=uren+":"+minuten+":"+seconden;
}

function toonTabbladen() {
	var base4=document.getElementById('base4');
	var base1=document.getElementById('base1');
	var baseOCISLY=document.getElementById('baseOCISLY');
	var baseJRTI=document.getElementById('baseJRTI');

	// laat bij kleine schermen maar 1 base tegelijkertijd zien
	if (window.innerWidth<768) {
		base4.style.display = "block";
		base1.style.display = "none";
		baseOCISLY.style.display = "none";
		baseJRTI.style.display = "none";

		// laat base 4 zien als er op de knop voor base 4 word gedrukt en laat de andere bases dan niet zien
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
	
	// laat bij tablet formaat schermen 1 base tegelijkertijd zien met een grid
	else if (window.innerWidth<1024 && screen.width>=768) {
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

	// laat bij grotere schermen alle bases zien
	else {
		base4.style.display = null;
		base1.style.display = null;
		baseOCISLY.style.display = null;
		baseJRTI.style.display = null;
	}
}

// alle functies activeren
infoLandingPad4();
infoLandingPad1();
infoLandingPadOCISLY();
infoLandingPadJRTI();
setInterval(toonTijdFlorida, 500); // check de tijd om de 500 miliseconden
setInterval(toonTijdCalifornie, 500);
toonTabbladen();
window.onresize = toonTabbladen; // voer de functie ook uit als het formaat van de site veranderd