//  //needs document end
// var elements = document.getElementsByTagName('*');

// for (var i = 0; i < elements.length; i++) {
//     var element = elements[i];
//     //console.log(element);
//     //element.style.setProperty('border', 'solid 1px red');

//     var r = Math.floor(Math.random() * 255);
//     var g = Math.floor(Math.random() * 255);
//     var b = Math.floor(Math.random() * 255);

//     var c = "rgb(" + r + "," + g + "," + b + ")";

//     element.style.setProperty('background-color', c);

// }

// text replacer, needs document_idle in manifest (everything finished loading)
var html = document.querySelector('html');
var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT); //only getting text nodes (cool command)

var node;

while (node = walker.nextNode()) {
    node.nodeValue = node.nodeValue.replace(/trump/gi, 'some guy'); //g stands for global, (all of them), i means case insensitive, this is whats called a regular expression
}