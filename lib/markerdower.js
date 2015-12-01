var Remarkable = require('remarkable');
var md = new Remarkable('full');

var mdtxt = '# Remarkable rulezz!';
var mdimage = '![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png)';

// => <h1>Remarkable rulezz!</h1>

function changeToHtml(markdown){
  markdown = md.render(markdown).toString();

  if (markdown.indexOf("<img")> -1){
    console.log("inside control flow>>>");
    markdown = markdown.replace("<img","<amp-img");
  }

  return markdown;
}

module.exports = changeToHtml;
