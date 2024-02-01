$(document).ready(function(){
  
  $("img").draggable( 
  {
      stop: function() {
        alert( $("img").position().left ); 
       }
  });  
});