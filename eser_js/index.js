
  var myVar;
        
  function myFunction() {
    myVar = setTimeout(showPage, 3000);
  }
  
  function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
     }


  




  const items =[{
    id:1,
    name: "vins"
  },

  {
    id:2,
    name: "vins"
  },
  {
    id:3,
    name: "vins"
  }]


  let ans =""
  for (i=0; i<3; i++){
    ans+= (items[i].id + items[i].name);
    document.getElementById("demo").innerHTML = ans
  }  
      
 