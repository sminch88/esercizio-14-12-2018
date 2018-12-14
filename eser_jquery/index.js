$( document ).ready(function() {
    console.log( "sono pronto" );
});

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
    
  ans= $( "#:demo" ).innerHTML;
  }  