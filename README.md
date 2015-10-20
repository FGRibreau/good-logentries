## good-logentries **(fork)**

[Good](https://github.com/hapijs/good) Reporter for [LogEntries](https://logentries.com)

### This fork includes:

- flat nested objects to better be consumed inside LogEntries
- [changelog](/CHANGELOG.md)

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
