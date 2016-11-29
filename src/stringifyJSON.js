// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  
  if (obj == 'undefined') {
    return;
  }

  if (obj == null) {
  	return 'null';
  }

  if (typeof obj === "number") {
  	return "" + obj;		
  }

  if (Array.isArray(obj)) {
  	if (obj.length == 0) {
  		return "[]";
  	}
  	var result = "[" + stringifyJSON(obj[0]);
  	for (var i = 1; i < obj.length; i++) {
  		result += "," + stringifyJSON(obj[i]);
  	}
  	return result + "]";
  }

  if (typeof obj === "object") {
  	var keys = Object.keys(obj);

  	if (keys.length == 0) {
  		return "{}";
  	}

  	var result = "{";

  	if (typeof keys[0] != "undefined" && keys[0] != "functions" && keys[i] != "undefined") {
  		result += "\"" + keys[0] + "\":" + stringifyJSON(obj[keys[0]]);
  	}

  	
  	
  	for (var i = 1; i < keys.length; i++) {
  		if (typeof keys[i] != "undefined" && keys[i] != "functions" && keys[i] != "undefined") {
  			result += ",\"" + keys[i] + "\":" + stringifyJSON(obj[keys[i]]);	
  		}
  	}
  	
  	return result + "}";// + obj.toString() + "}";
  }

  if (typeof obj === "string") {
  	return "\""+ obj + "\"";
  }

  else {
  	return obj.toString();
  }
  
};
