;(function(){

  this.HTTPster = function(){
    
  };

  HTTPster.prototype = {
    ajax: function( params ){
      var request = new XMLHttpRequest();
      params.data = params.data || {};
      request.open( params.type, params.url, true );
      if ( params.type == "POST" || params.type == "PUT" ){
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
	  } else {
	    params.error( JSON.parse( response ) );
	  }
	}
      };
      request = null;
    },
    get: function( url, success, error ){
      this.ajax({
        url: url,
        type: 'GET',
        success: success,
        error: error
      });
    },
    post: function( url, data, success, error ){ 
      this.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    put: function( url, data, success, error ){ 
      this.ajax({
        url: url,
        type: 'PUT',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    patch: function( url, data, success, error ){ 
      this.ajax({
        url: url,
        type: 'PATCH',
        data: JSON.stringify(data),
        success: success,
        error: error
      }); 
    },
    delete: function( url, success, error ){
      this.ajax({
        url: url,
        type: 'DELETE',
        success: success,
        error: error
      }); 
    }
  };
})();