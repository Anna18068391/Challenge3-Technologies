// lat en long to string van function to global variabele zodat gebruik bij api
// moet infoWeer() call herhaaldelijk voor if/else check?

var latitude= '36.778259';
var longitude= '-119.417931';

function infoLandingPad(){
	var API='https://api.spacexdata.com/v3/landpads/LZ-4';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		//info
		var naam =data.location.name+" - "+data.full_name;
		var regio=data.location.region;
		document.getElementById('naam').innerHTML = naam;
		document.getElementById('regio').innerHTML = regio;
		//locatie
		latitude = data.location.latitude;
		longitude = data.location.longitude;
	});
}

function infoWeer() {
	var url = 'https://api.openweathermap.org/data/2.5/weather?lat=';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	var API = url + latitude +'&lon='+ longitude + '&appid=' + apiKey+'&units=metric'+'&lang=nl';
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	.then(function(data) {
		var temperatuur=Math.round(data.main.temp);
		var wind=data.wind.speed;
		var zicht=data.visibility;
		document.getElementById('temperatuur').innerHTML = temperatuur+'&#176;C';
		document.getElementById('wind').innerHTML = wind+' meter/sec';
		document.getElementById('zicht').innerHTML = zicht+'m ver zicht';
		if(temperatuur>=5 && temperatuur<=25){
			document.getElementById('temperatuur').classList.add("check");
		}
		else{
			document.getElementById('temperatuur').classList.remove("check");
		}
		if(wind<=3.3){
			document.getElementById('wind').classList.add("check");	
		}
		else{
			document.getElementById('wind').classList.remove("check");
		}
		if(zicht>=19000){
			document.getElementById('zicht').classList.add("check");
		}
		else{
			document.getElementById('zicht').classList.remove("check");
		}
	});
}

// alle functies activeren
infoLandingPad();
infoWeer();
