;(function(){

  this.HTTPster = function(){
    
  };

  HTTPster.prototype = {
    get: function( url, success, error ){
      var request = new XMLHttpRequest();
      request.open('GET', url, true);
      request.onreadystatechange = function() {
	if (this.readyState === 4) {
	  if (this.status >= 200 && this.status < 400) {
            success( JSON.parse(this.responseText) );
	  } else {
            error( JSON.parse(this.responseText) );
	  }
	}
      };
      request.send();
      request = null;
    }
  };

})();