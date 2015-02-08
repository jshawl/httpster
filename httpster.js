var httpster = (function(){

  var HTTPster = function(){
    
  };

  HTTPster.prototype = {
    ajax: function( params ){
      return new Promise(function( resolve, reject ){
	var request = new XMLHttpRequest();
	params.data = params.data || {};
	params.success = params.success || function(){};
	params.error = params.error || function(){};
	request.open( params.type, params.url, true );
	if ( params.type == "POST" || params.type == "PUT" || params.type == "PATCH" ){
	  request.setRequestHeader( 'Content-Type', 'application/json; charset=UTF-8' );
	  request.send( params.data );
	} else {
	  request.send();
	}
	request.onreadystatechange = function() {
	  if ( this.readyState === 4 ){
	    var response = this.responseText ? this.responseText : "{}";
	    if (this.status >= 200 && this.status < 400) {
	      params.success( JSON.parse( response ) );
	      resolve( JSON.parse( response ) );
	    } else {
	      params.error( JSON.parse( response ) );
	      reject( Error( JSON.parse( response ) ) );
	    }
	  }
	};
	request = null;
      });
    },
    get: function( url, success, error ){
      return this.ajax({
        url: url,
        type: 'GET',
        success: success,
        error: error
      });
    },
    post: function( url, data, success, error ){ 
      return this.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    put: function( url, data, success, error ){ 
      return this.ajax({
        url: url,
        type: 'PUT',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    patch: function( url, data, success, error ){ 
      return this.ajax({
        url: url,
        type: 'PATCH',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    delete: function( url, success, error ){
      return this.ajax({
        url: url,
        type: 'DELETE',
        success: success,
        error: error
      }); 
    }
  };
  return new HTTPster()
})();