/**
 * Convert a blog post written in markdown into html
 */

var markdown = require('markdown').markdown;
var fs = require('fs');

if(process.argv.length > 2) {
  var mdFilename = process.argv[2];
  var htmlFilename = mdFilename.replace('.md','.html');
  var templateStr = fs.readFileSync('template.html','utf8');
  var mdStr = fs.readFileSync(process.argv[2],'utf8');
  var bodyStr = markdown.toHTML(mdStr);
  var finalStr = templateStr.replace('$BODY$', bodyStr);
  fs.writeFileSync(htmlFilename, finalStr, 'utf8');
}

