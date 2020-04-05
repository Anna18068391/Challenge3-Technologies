// lat en long to string van function to global variabele zodat gebruik bij api
// moet infoWeer() call herhaaldelijk voor if/else check?

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
		document.getElementById('zicht4').innerHTML = zicht+'m ver zicht';
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
		if(zicht>=19000){
			document.getElementById('zicht4').classList.add("check");
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
		document.getElementById('zicht1').innerHTML = zicht+'m ver zicht';
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
		if(zicht>=19000){
			document.getElementById('zicht1').classList.add("check");
		}
		else{
			document.getElementById('zicht1').classList.remove("check");
		}
	});
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
		document.getElementById('zichtOCISLY').innerHTML = zicht+'m ver zicht';
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
		if(zicht>=19000){
			document.getElementById('zichtOCISLY').classList.add("check");
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
		document.getElementById('zichtJRTI').innerHTML = zicht+'m ver zicht';
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
		if(zicht>=19000){
			document.getElementById('zichtJRTI').classList.add("check");
		}
		else{
			document.getElementById('zichtJRTI').classList.remove("check");
		}
	});
}

// alle functies activeren
infoLandingPad4();
infoWeer4();
infoLandingPad1();
infoWeer1();
infoLandingPadOCISLY();
infoWeerOCISLY();
infoLandingPadJRTI();
infoWeerJRTI();
