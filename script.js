  var a=1;
  var timer;
   function slideChange()
    	{
    	a++;
    		if(a===2)
{document.getElementById("image1").style = "margin-left: -9.8rem;height:100px; opacity:0";}
    else if(a===3)
{document.getElementById("image2").style ="margin-left:-9.8rem; height: 100px; opacity:0"}
   else if(a>=4){a=1;}
  if(a===1)	{document.getElementById("image1").style = "margin-left:0";
  document.getElementById("image2").style = "margin-left:0 ";}

   timer = setTimeout("slideChange()",5000);
   }
 function right()
    	{
    	a++;
    		if(a===2)
{document.getElementById("image1").style = "margin-left: -9.8rem;height:100px; opacity:0";}
    else if(a===3)
{document.getElementById("image2").style ="margin-left:-9.8rem; height: 100px; opacity:0"}
   else if(a>=4){a=3;}
   }
   function left(){
   a--;
   if(a===1)
{document.getElementById("image1").style = "margin-left: -9.8rem;height:100px; opacity:0";}
    else if(a===2)
{document.getElementById("image2").style ="margin-left:0;"}
   else if(a<=0){a=1;}
  if(a===1)	{document.getElementById("image1").style = "margin-left:0";
  }  }