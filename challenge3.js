// In deze funcie ga ik API data op de website tonen, in dit geval de teperatuur in Den Haag op dit moment
function getData() {
	//Link naar de API datata plek. De soort info, de stad en je account.
	var url = 'https://api.openweathermap.org/data/2.5/weather?q=';
	var city = 'the%20Hague';
	var apiKey ='71651970a1f747f6f025a4c39785894b';
	//Het is eigelijk een hele link maar de link is in stukjes gehakt zodat je makkelijke delen kan veranderen bijvoorbeeld de stad.
	var API = url + city + '&appid=' + apiKey;

	//Nu hebben we API data die javascript niet begrijpt, we gaan het dus omvormen naar .json data
	fetch(API)
	.then(function(data) {
		return data.json();
	})
	//Nu kunnen we werken met de data
	.then(function(data) {
		//hier reken ik bijvoorbeeld kelvin om naar celcius
		var tempperatuur = Math.round(data.main.temp - 273.15);
		//hier stop ik het in de HTML
		document.getElementById('weerbox').innerHTML = tempperatuur+'&#176;C';
	});
}

// alle functies activeren
getData();
