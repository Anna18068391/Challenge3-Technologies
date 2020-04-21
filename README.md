# Challenge3 Technologies
_Website van Anna  
CMD jaar 2  
IxD & Technology 2  
2030_

> Elon Musk onze hulp nodig om de perfecte landingsplek te vinden voor terugkerende Marsbewoners.

Op deze website is een overzicht van verschillende landingsplekken te zien voor het Starship van SpaceX. Dit dashboard kan gebruikt worden om de verschillende landingsplekken te vergelijken. Zo kan er een goede keuze worden gemaakt tussen de landingsplekken als het Starship terugkomt van Mars.

Het dashboard is door mij gemaakt met HTML5, CSS en JavaScript. De site is responsive en maakt gebruik van media-queries, CSS grid en flexbox (bij de knoppen op de kleinere schemen). Bij deze challenge moesten we gebruik maken van API's. Ik heb drie API's gebuikt, een API van [SpaceX](https://docs.spacexdata.com/?version=latest), [OpenWeather](https://openweathermap.org/current) en [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/).

Eerst zal ik wat vertellen over hoe ik op het idee voor de website gekomen ben, vervolgens over de landingplekken die ik heb gekozen en de informatie die ik daarbij toon en tot slot over de responsiveness van de website.

## Het idee
Bij deze challenge vond ik het best lastig om te bedenken wat ik op de website zou laten zien. Wat is er belangrijk bij het kiezen van een landingsbasis? Welke factoren hebben invloed bij een raketlanding? Eerst heb ik hier onderzoek naar gedaan, daar kwam bijvoorbeeld uit dat het weer veel invloed heeft op een raketlanding. En ook dat SpaceX verschillende landingsplekken heeft in de Verenigde Staten.
Toen ik een idee had van de informatie die ik op de site wilde tonen, ging ik nadenken over het design. Omdat ik de website steeds uitbreidde en veranderde in de loop van de challenge heb ik veel met het design gepuzzeld. Ik moest er steeds voor zorgen dat alle informatie goed zichtbaar bleef op de verschillende schermformaten. Uiteindelijk heb ik een design gemaakt met tabbladen, verschilldende lay-outs binnen sections en verschilldende lay-outs met sections zelf.

## Landingsplekken
Ik heb vier landingsplekken van SpaceX gevonden: _Landingsbase 4_ in Californie, _Landingsbase 1_ in Florida en twee landingsschepen. De landingsschepen hebben de namen _Of course I Still love_ you en _Just Read The Instructions_. Op de website geef ik informatie over de landingsplekken zoals de naam en locatie. Deze data komt van de [SpaceX API](https://docs.spacexdata.com/?version=latest). De details wilde ik eerst ook uit de SpaceX API halen, maar omdat de beschrijving in de API Engels was, heb ik een eigen, Nederlandse beschrijving getypt.

## Weer
Het weer is erg belangrijk bij een raketlanding. Als er iets teveel wind staat kan de raket al van koers af vliegen, of niet juist op het platform landen. Door de warmte kunnen stoffen zoals metaal uitzetten waardoor berekeningen niet meer kloppen en als het vriest word de landingsplek erg glad. Ook het zicht is belangrijk, het moet helder weer zijn zodat de raket goed in zicht is.
Deze drie variabelen laat ik zien op de website met gebruik van [OpenWeather API](https://openweathermap.org/current). Met een groene of rode achtergrondkleur wordt er aangegeven of de weersomstandingeheden goed zijn. Dit heb ik gedaan door een class `.check` toe te kennen als waardes binnen beperkte grenzen liggen.

## Locatie
Er zijn verschillende soorten landingsbases te zien op de website. Twee statische landingsbases: een in Californië, een in Florida en twee landingsschepen. 

#### Live kaart
De schepen varen en kunnen dus veranderen van locatie. Het leek me voor de schepen handig om een kaart te laten zien met de huidige locatie van de schepen. Ik gebruik hier de API van [Mapbox](https://docs.mapbox.com/mapbox-gl-js/api/) voor. De kaart was niet echt in het thema van SpaceX dus heb ik een eigen map-style gemaakt met de Mapbox studio. Deze style heeft een donker spacethema dat goed bij de website past.

#### Live video
Voor de statische landingsbases leek het me niet nodig om een kaart te laten zien. De locatie is al te zien in de informatie over de base en zal niet veranderen.
Het leek me handiger om met eigen ogen het weer te kunnen zien in de buurt van de base. Daarom ging ik kijken of er live video's waren in de buurt van de landingsplekken. Ik vond weathercams die je via een linkje kon bekijken en deze linkjes gebruik ik in mijn code waardoor je live het weer kan zien. Omdat er verschillende tijdzones zijn in de Verenigde Staten heb ik de lokale tijd boven de video's geplaatst.

## Responsive
De website is responsive gemaakt met media-queries en CSS grid. Op mobile schermen staat alle informatie onder elkaar, op tablet schermen staat de informatie in twee kolommen, voor laptops staat de informatie naast elkaar in rijen en bij de grote schermen staat alle informatie naast elkaar in vier kolommen.
Omdat ik uiteindelijk best veel informatie laat zien op de website, merkte ik dat je veel moest scrollen op kleinere apperaten en dit maakte de website onoverzichtelijk. Daarom heb ik besloten om knoppen te tonen op tablet formaat schermen en kleiner. Hierdoor zie je informatie over 1 base per keer. Dit heb ik gedaan met de functie `toonTabbladen()`, als er op een knop word geklikt komt alle informatie op `style.display = "none"` te staan behalve de informatie over de aangeklikte base.