# httpster

A JavaScript Library for AJAX’n

## Usage

```html
<script src='js/httpster.js' type='text/javascript'></script>
<script type='text/javascript'>
  var h = new HTTPster();
  h.get('url', function( response ){
    console.log( response ); 
  })
</script>
```

## .ajax( options )

```js
h.ajax({
  url: url,
  type: "GET" || "POST" || "PUT" || "PATCH" || "DELETE",
  data: data,
  success: success,
  error: error
});
```

## .get( url, success, error )

```js
h.get('url', function( response ){
  console.log( response );
})
```

## .delete( url, success, error )

```js
h.delete('url', function( response ){
  console.log( response );
})
```
## .post( url, data, success, error )

```js
h.post('url', { name: "Jesse" }, function( response ){
  console.log( response );
})
```

## .patch( url, data, success, error )

```js
h.patch('url', { name: "Jesse" }, function( response ){
  console.log( response );
})
```

## .put( url, data, success, error )

```js
h.put('url', { name: "Jesse" }, function( response ){
  console.log( response );
})
```