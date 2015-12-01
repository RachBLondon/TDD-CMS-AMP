var test = require('tape');
var markdowner = require('../lib/markerdower.js')

test('check markdowner returns markdown', function(t) {
  var mdtxt = '# Remarkable rulezz!';
  var expected = '<h1>Remarkable rulezz!</h1>\n';
  var actual = markdowner(mdtxt);
  t.equal(actual, expected, "passed")
  t.end();
});

test('replace <img> with <amp-img>', function(t) {
  var mdimage = '![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)';
  var expected = '<p><amp-img src="https://octodex.github.com/images/yaktocat.png" alt="Image of Yaktocat"></p>\n';
  var actual = markdowner(mdimage);
  console.log("actual>>>>",actual, "expected>>>>>",expected);
  t.equal(actual, expected, "passed")
  t.end();
});
