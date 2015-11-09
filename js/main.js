//@codekit-prepend "../bower_components/jquery/dist/jquery.js"

$(document).ready(function() {
	jQuery(document).ready(function($) {
		// Region polygons are listed counter clockwise repeating the first vertex
		var regions = [{
			'name': 'test',
			'coords': [[-118,34], [-118,32], [-116,32], [-116,34], [-118,34]]
		}, {
			'name': 'test2',
			'coords': [[1,1], [1,2], [2,2], [2,1]]
		}];

		function pointInPolygon(point, vs) {
	        var x = point[0], y = point[1];
		    var inside = false;
		    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
		        var xi = vs[i][0], yi = vs[i][1];
		        var xj = vs[j][0], yj = vs[j][1];
		        
		        var intersect = ((yi > y) != (yj > y))
		            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
		        if (intersect) inside = !inside;
		    }
		    
		    return inside;
      	}

      	function locatePoint(point){
      		for (var i = regions.length - 1; i >= 0; i--) {
      			if (pointInPolygon(point, regions[i].coords)) return regions[i].name;
      		};
      		return null;
      	}

      	function locateUser(){
      		navigator.geolocation.getCurrentPosition(locateUserCallback);
      	}

      	function locateUserCallback(position){
      		console.log(locatePoint([position.coords.longitude, position.coords.latitude]));
      	}
      	setTimeout(locateUser, 2000)
// function getLocation() {
//     if (navigator.geolocation) {
        
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude; 
// }
	});
});