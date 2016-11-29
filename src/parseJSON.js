// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  console.log(json);


  var result;

  var json = json.trim();

  if (json.charAt(0) == "[" && json.charAt(json.length - 1) != "]") {
  	return false;
  }

  // Array
  if (json.charAt(0) == "[" && json.charAt(json.length - 1) == "]") {
	result = [];
	var value = json.slice(1,json.length - 1); //parseJSON(); // take out surrounding brackets {}

	if (json.indexOf(",") == -1) {
		if (value != undefined && value != "") {
			result.push(value);	
		}
		
	}
	else {
		var values = value.split(",");

		for (var i=0; i < values.length; i++) {
			
			result.push(parseJSON(values[i].trim()));
		}
	}

	return result;
  }

  if (json.charAt(0) == "{" && json.charAt(json.length - 1) == "}") {
  	result = {};

  	if (function(json) {
  		// for (var prop in json) {
  		// 	if(json.hasOwnProperty(prop)) {
  		// 		return false;
  		// 	}
  		// }
  		return json === JSON.stringify({});
  	}(json)) {
  		return result;
  	}

  	var values = json.slice(1,json.length - 1);

  	if (json.indexOf(",") == -1) {

  		var key = values.split(": ")[0].replace(/^"(.*)"$/, '$1');
		var value = values.split(": ")[1].replace(/^"(.*)"$/, '$1');

		if (value == "") {
			result[key] = "";
		}
		else {
			result[key] = parseJSON(value);	
		}
  	}
  	else {
  		var values = values.split(",");
  		for (var i=0; i < values.length; i++) {
  			var key = values[i].trim().split(": ")[0].replace(/^"(.*)"$/, '$1');
  			var value = values[i].trim().split(": ")[1].replace(/^"(.*)"$/, '$1');

  			if (value == "") {
  				result[key] = "";
  			}
  			else {
  				result[key] = parseJSON(value);	
  			}
  			
		}
  	}

  	return result;
  }
  
  // number
  if (/^-?[\d.]+(?:e-?\d+)?$/.test(json)) {
  	return parseFloat(json, 10);
  }

  // string
  if (typeof json == "string") {
  	if (json == "null") {
  		return null;
  	}
  	if (json == "true") {
  		return true;
  	}
  	if (json == "false") {
  		return false;
  	}
  	if (json == "") {
  		return "";
  	}
  	else {
  		if (json.charAt(0) == "\"" && json.charAt(json.length - 1) == "\"") {
  			return json.slice(1,json.length-1);
  		}
  		else {
  			return json;	
  		}
  	}
  }
  	

  // if (result === undefined) {
  // 	return;
  // }

  return result;
};
