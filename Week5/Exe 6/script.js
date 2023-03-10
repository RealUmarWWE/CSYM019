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

/*function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text';
   }

   function myLoadFunction2() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading...';
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text...';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   document.addEventListener('click', myLoadFunction2);*/
   
   
   function myClickFunction1()
    {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading';
    }
    function myClickFunction2()
    {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph text';
    }
   function myLoadFunction1() 
    {
    var element = document.getElementById('pageheading');
    element.addEventListener('click', myClickFunction);
    }
    function myLoadFunction2() 
    {
    var element = document.getElementById('paragraph');
    element.addEventListener('click', myClickFunction);
    }
   document.addEventListener('DOMContentLoaded', myLoadFunction1);
   document.addEventListener('DOMContentLoaded', myLoadFunction2);