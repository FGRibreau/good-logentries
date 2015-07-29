## good-logentries

[Good](https://github.com/hapijs/good) Reporter for [LogEntries](https://logentries.com)

### Example

```javascript

hapi.register({
  register : require('good'),
  options : {
    reporters : [
      new GoodLogentries({
        log : '*',
        request : '*',
        error : '*',
        response : '*',
        ops : '*',
      }, {
        token : 'YOUR LOG TOKEN',
      }),
    ],
  },
}, function(err) {
  if (err) {
    throw err;
  }
});

```
