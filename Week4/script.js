function print5()
{
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}
print5();
print5();
var element = document.getElementById('pageheading');

function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);