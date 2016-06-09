var init_stock_lookup;

init_stock_lookup = function(){
  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
  $('#stock-lookup').replaceWith(data);
  // You need to add the init_stock_lookup(); again 
  // since the listeners are gone once you replace 
  // with the data that's returned so you have to re-initialize it
  init_stock_lookup();
  });
}


$(document).ready(function() {
  init_stock_lookup();
});


   
 


