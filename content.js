document.onmousemove = function mousePosition(event) {
    // let x = event.offsetX;
    // let y = event.offsetY;

    // document.getElementById("positions").insertAdjacentHTML('afterbegin', ` 
    // <div class="trail" style= "
    // left:${x}px;  
    // top:${y}px;
    // font-size: ${y/20}px;
    // ">(${x+40},${y+40})
    // </div>  `);

    var elements = document.getElementsByTagName("*");

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        // let x = event.pageX;
        // let y = event.pageY;

        // var xpos = x + "px";
        // var ypos = y + "px";
        // element.style.setProperty('left', xpos);
        // element.style.setProperty('top', ypos);

        element.style.left = event.pageX / 90 + "%";
        element.style.top = event.pageY / 90 + "%";


        // element.style.left = event.pageX / 5 + "px";
        // element.style.top = event.pageY / 5 + "px";


        // document.querySelector("body").style.left = "0px !important"
        // document.querySelector("html").style.left = "0px !important"

        // element.style.transform = "skew(" + (event.pageY / 200) + "deg)";

    }
}




















// //  //needs document end
// // var elements = document.getElementsByTagName('*');

// // for (var i = 0; i < elements.length; i++) {
// //     var element = elements[i];
// //     //console.log(element);
// //     //element.style.setProperty('border', 'solid 1px red');

// //     var r = Math.floor(Math.random() * 255);
// //     var g = Math.floor(Math.random() * 255);
// //     var b = Math.floor(Math.random() * 255);

// //     var c = "rgb(" + r + "," + g + "," + b + ")";

// //     element.style.setProperty('background-color', c);

// // }

// // text replacer, needs document_idle in manifest (everything finished loading)
// // var html = document.querySelector('html');
// // var walker = document.createTreeWalker(html, NodeFilter.SHOW_TEXT); //only getting text nodes (cool command)

// // var node;

// // while (node = walker.nextNode()) {
// //     node.nodeValue = node.nodeValue.replace(/trump/gi, 'some guy'); //g stands for global, (all of them), i means case insensitive, this is whats called a regular expression
// // }

// // var elements = document.getElementsByTagName('*');

// // for (var i = 0; i < elements.length; i++) {
// //     var element = elements[i];
// //     //console.log(element);
// //     //element.style.setProperty('border', 'solid 1px red');

// //     var date = new Date();
// //     var hours = date.getHours();
// //     var minutes = date.getMinutes();
// //     var seconds = date.getSeconds();
// //     console.log(minutes)

// //     var c = "rgb(" + 9 + "," + 9 + "," + seconds + ")";

// //     element.style.setProperty('background-color', c);
// // };

// setInterval(function() {
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var seconds = date.getSeconds();
//     console.log(minutes)

//     var c = "rgb(" + hours + "," + 255 + "," + minutes + ")";
// }, 1000);
// // check query syntax
// document.querySelector("div").style.setProperty('background-color', c);