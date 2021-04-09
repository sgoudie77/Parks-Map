// Set the starting map position and zoom ([lat, lon], zoom-level)
var map = L.map('map').setView([48.80686346108519, -55.32714843750001], 6);

// Add a default map from Map Tiler
streets = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=CFUEyunMBd2JLEvHOg9L', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    crossOrigin: true
}).addTo(map);

// Add additional map layers from Leaflet Provider
satellite = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

geo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
	maxZoom: 16
});

// Check the coordinates of a position on click
map.on('click', function(e){
    var coord = e.latlng;
    var lat = coord.lat;
    var lng = coord.lng;
    console.log("You clicked the map at latitude and longitude: " + lat + ", " + lng);
    });

// Set the icon variables
    // National Park Icons
var nat = L.icon ({
    iconUrl: 'img/parkn.png',
    iconSize: [25, 25],
    //iconAnchor: [0, 0],
    popupAnchor: [1, -62]
});
    // Provincial Park Icons - Camping
var prov = L.icon ({
    iconUrl: 'img/park.png',
    iconSize: [25, 25],
    //iconAnchor: [0, 0],
    popupAnchor: [1, -62]
});
    // Provincial Park Icons - Day Use
var dayUse = L.icon ({
    iconUrl: 'img/parkd.png',
    iconSize: [25, 25],
    //iconAnchor: [0, 0],
    popupAnchor: [1, -62]
});

// Position Map For Each Popup Opened
map.on('popupopen', function (e) {
    map.setView(e.target._popup._latlng, e.target._zoom);
});

//National Parks Markers
var grosMorne = L.marker([49.64273443429918, -57.70294189453126], {icon: nat}).addTo(map)
    .bindPopup('<h2>Gros Morne National Park</h2><p>Gros Morne National Park is a Canadian national park and world heritage site located on the west coast of Newfoundland.</p> <img src="img/gros.jpg">', {maxWidth: "auto"})
var terraNova = L.marker([48.53161171429281, -53.97033691406251], {icon: nat}).addTo(map)
    .bindPopup('<h2>Terra Nova National Park</h2><p>Terra Nova National Park is Canada\'s most easterly national park. Four hundred square kilometres of natural beauty.</p> <img src="img/terranova.jpg">', {maxWidth: "auto"})
    
//Provincical Parks Markers - Camping    
var barachois = L.marker([48.47747334905567, -58.25088500976563], {icon: prov}).addTo(map)
    .bindPopup('<h2>Barachois Pond Provincial Park</h2><p>Barachois Pond is the largest Provincial Park in Western Newfoundland. Located off the Trans Canada Highway the park is 20 kilometres from Stephenville.</p><img src="img/barachois.jpg">', {maxWidth: "auto"})
var blowMeDown = L.marker([49.11702904077932, -58.37036132812501], {icon: prov}).addTo(map)
    .bindPopup('<h2>Blow Me Down Provincial Park</h2><p>Blow Me Down Provincial Park is situated on a peninsula between Lark and York Harbours.</p><img src="img/blowmedown.jpg">', {maxWidth: "auto"})
var butterPot = L.marker([47.40113785699674, -53.07289123535157], {icon: prov}).addTo(map)
    .bindPopup('<h2>Butter Pot Provincial Park</h2><p>The Park is located on the Avalon Peninsula approximately 36 km southwest of St. John’s along the Trans Canada Highway.</p> <img src="img/butterpot.jpg">', {maxWidth: "auto"})
var cheeseman = L.marker([47.632428981146155, -59.25922393798829], {icon: prov}).addTo(map)
    .bindPopup('<h2>JT Cheeseman Provincial Park</h2><p>J.T. Cheeseman is a Natural Environment Park located approximately 10km east of Channel-Port aux Basques and 200km west of Corner Brook on the Trans Canada Highway.</p> <img src="img/cheeseman.jpg">', {maxWidth: "auto"})
var dildoRun = L.marker([49.535012996758276, -54.75036621093751], {icon: prov}).addTo(map)
    .bindPopup('<h2>Dildo Run Provincial Park</h2><p>Dildo Run Provincial Park was opened to the public in 1967. The parks 328 hectares provide visitors with an ideal central and convenient location for sightseeing.</p> <img src="img/dildorun.jpg">', {maxWidth: "auto"})
var frenchman = L.marker([47.212105775622426, -55.403366088867195], {icon: prov}).addTo(map)
    .bindPopup('<h2>Frenchman\'s Cover Provincial Park</h2><p>Frenchman’s Cove Provincial Park is located on the west side of the Burin Peninsula on route 213. The park is comprised of 51 hectares of varied habitat.</p> <img src="img/frenchman.jpg">', {maxWidth: "auto"})
var laManche = L.marker([47.183995990963396, -52.90311813354493], {icon: prov}).addTo(map)
    .bindPopup('<h2>La Manche Provincial Park</h2><p>La Manche Provincial Park is located approximately 53 kilometres south of St. John’s, along Highway 10. The park was first opened to the public in August 1966.</p> <img src="img/lamanche.jpg">', {maxWidth: "auto"})
var lockston = L.marker([48.44127305662841, -53.37432861328126], {icon: prov}).addTo(map)
    .bindPopup('<h2>Lockston Path Provincial Park</h2><p>Lockston Path Provincial Park is located approximately 6 kilometres from Port Rexton on highway route 236. Comprising 773 hectares, this park was first opened to the public in 1966.</p> <img src="img/lockston.jpg">', {maxWidth: "auto"})
var notreDame = L.marker([49.11728183920247, -55.07969856262208], {icon: prov}).addTo(map)
    .bindPopup('<h2>Notre Dame Provincial Park</h2><p>Notre Dame Provincial Park is located approximately 1 kilometre east of the Notre Dame Junction and approximately 41 kilometres west of Gander on the Trans Canada Highway.</p> <img src="img/notre.jpg">', {maxWidth: "auto"})
var pistolet = L.marker([51.54676205809522, -55.68283081054688], {icon: prov}).addTo(map)
    .bindPopup('<h2>Pistolet Bay Provincial Park</h2><p>Pistolet Bay Provincial Park is located on route 437, 12 kilometres off route 430 on the tip of the Great Northern Peninsula. The park encompasses 897 hectares of delightfully varied vegetation.</p> <img src="img/pistolet.jpg">', {maxWidth: "auto"})
var sandbanks = L.marker([47.60662599398087, -57.64663696289063], {icon: prov}).addTo(map)
    .bindPopup('<h2>Sandbanks Provincial Park</h2><p>Is located near the town of Burgeo, which is approximately 150 km from the Trans Canada Highway on Route 480. The park is named for its undulating sand dunes and long expanses of flat, sandy beaches.</p> <img src="img/sandbanks.jpg">', {maxWidth: "auto"})
var sirRichard = L.marker([49.354202988113265, -57.17353820800782], {icon: prov}).addTo(map)
    .bindPopup('<h2>Sir Richard Squires Memorial Provincial Park</h2><p>Locally known as Big Falls Park, Sir Richard Squires Memorial Park is located approximately 36 kilometres northeast of Deer Lake along Highway No. 422. The park is situated on the scenic Humber River and is a popular place for salmon angling.</p> <img src="img/richard.jpg">', {maxWidth: "auto"})

// Provincial Parks Markers - Day Use
var arches = L.marker([50.0915121659595, -57.65075683593751], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Arches Provincial Park</h2><p>This site features a natural rock archway created by tidal action. The massive formation is within view of picnic sites.</p> <img src="img/arches.jpg">', {maxWidth: "auto"})
var cataracts = L.marker([47.23215842421882, -53.60916137695313], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Cataracts Provincial Park</h2><p>A deep river gorge with two cascading waterfalls provide a scenic setting for photographs. Stairs and walkways enable the visitor to descend the gorge and cross the river.</p> <img src="img/cataracts.jpg">', {maxWidth: "auto"})
var chanceCove = L.marker([46.76949812802645, -53.026542663574226], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Chance Cove Provincial Park</h2><p>This park is located on the south east corner of the Avalon peninsula along route 10, or the Irish Loop. Just a few minutes east of Trepassey, this parks 2068 hectares stretch from the highways edge to the coast.</p> <img src="img/chance.jpg">', {maxWidth: "auto"})
var codroy = L.marker([47.83453442138389, -59.338188171386726], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Codroy Valley Provincial Park</h2><p>The beautiful view of the Long Range Mountains from this valley location and the large beach area with an abundance of shore birds are important natural features of this park.</p> <img src="img/codroy.jpg">', {maxWidth: "auto"})
var deadman = L.marker([49.335637873332665, -53.69773864746094], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Deadman\'s Bay Provincial Park</h2><p>This beach of fine white sand provides a fantastic view of icebergs in early summer. The park is located on the northeast coast or ‘straight’ shore near Lumsden.</p> <img src="img/deadman.jpg">', {maxWidth: "auto"})
var dog = L.marker([49.44268229737176, -54.61544036865235], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Dog Bay Pond Provincial Park</h2><p>Dog Bay Pond Provincial Park is a park in Newfoundland and Labrador and is situated east of Boyd\'s Cove, north of First Pond.</p> <img src="img/dog.jpg">', {maxWidth: "auto"})
var dungeon = L.marker([48.66670468318454, -53.084735870361335], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Dungeon Provincial Park</h2><p>A collapsed sea cave with a natural archway carved out by sea action is the focus of this site. The park is located on the tip of the Bonavista Peninsula near Bonavista.</p> <img src="img/dungeon.jpg">', {maxWidth: "auto"})
var gooseberry = L.marker([47.07020951304142, -54.0928602218628], {icon: dayUse}).addTo(map)
    .bindPopup('<h2>Gooseberry Cove Provincial Park</h2><p>This attractive sandy beach with a grassy back shore is ideal for picnicking. High wave action restricts swimming. The park is located south of Placentia on the Avalon Peninsula.</p> <img src="img/gooseberry.jpg">', {maxWidth: "auto"})

// Map Layer Groups
var provincial = L.layerGroup([laManche, butterPot, blowMeDown, barachois, cheeseman, dildoRun, frenchman, lockston, notreDame, pistolet, sandbanks, sirRichard]);
var national = L.layerGroup([grosMorne, terraNova]);
var dayUse = L.layerGroup([arches, cataracts, chanceCove, codroy, deadman, dog, dungeon, gooseberry]);

// Add Each Layer To The Map On Load
map.addLayer(national)
map.addLayer(provincial)
map.addLayer(dayUse)

// Define Layers Control - Base Maps
var baseMaps = {
    "Streets": streets,
    "Satellite": satellite,
    "Geographic": geo
}

// Define Layers Control - Marker Layers
var overlayMaps = {
    "National": national,
    "Provincial": provincial,
    "Day Use": dayUse
}

// Add Layer Control Icon and Selector With Options Displayed
L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);
