var findRemoveSync = require('find-remove');
var result = findRemoveSync(__dirname + '/src', {
    extensions: ['.js', '.map']
});
console.log(__dirname + '/src');
console.log(result);