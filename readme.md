# httpster

A JavaScript Library for AJAX’n

## Usage

```html
<script src='./httpster.js' type='text/javascript'></script>
<script type='text/javascript'>
  httpster.get(url, function( response ){
    console.log( response ); 
  });

  // **or** with promises!
  var request = httpster.get('url');
  request.then( function( response ){
    console.log( response ); 
  });
</script>
```



## .ajax( options )

```js
httpster.ajax({
  url: url,
  type: "GET" || "POST" || "PUT" || "PATCH" || "DELETE",
  data: data,
  success: success,
  error: error
});
```

## .get( url, success, error )

```js
httpster.get(url, function( response ){
  console.log( response );
})
```

## .post( url, data, success, error )

```js
httpster.post(url, { name: "Jesse" }, function( response ){
  console.log( response );
})
```

## .patch( url, data, success, error )

```js
httpster.patch(url, { name: "Jesse" }, function( response ){
  console.log( response );
})
```

## .put( url, data, success, error )

```js
httpster.put(url, { name: "Jesse" }, function( response ){
  console.log( response );
})
```

## .delete( url, success, error )

```js
httpster.delete(url, function( response ){
  console.log( response );
})
```