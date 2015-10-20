## good-logentries **(fork)**

[Good](https://github.com/hapijs/good) Reporter for [LogEntries](https://logentries.com)

### This fork includes:

- flat nested objects

### Todo

- Support for good v6

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
