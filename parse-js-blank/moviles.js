
$(document).ready(function(){
 Parse.initialize("c6rnG1RBUmPam6giOQxBMrk1Fg5PZIX61UXIJuWj", "Ao4SEoDdIyPwVpZo4V6oT6ciYz48Vl0qd2N6Yy3G");
    
   /* var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({foo: "bar"},{
		success: function(object) {
			$(".success").show();
			alert("yeahhhhhhhhhhhhhhhhhhh");
		},
		error: function(model, error) {
			$(".error").show();
		}
	});*/
	
	var Cosmeticos =Parse.Object.extend("Cosmeticos");
	var direccion ="";
	var query = new Parse.Query(Cosmeticos);
	query.find({
		success: function(results){
			//alert("Successfully retrieved " + results.length + " images.");
			for (var i = 0; i < results.length; i++) 
				{ 
				  var object = results[i];
				  
				  direccion+=object.get('nombre');
				  direccion+='<IMG SRC="'+object.get('url')+'">';
				 // alert(object.id + ' - ' + object.get('nombre'));
				} $("#cosmetics").html(direccion);},
				error: function(error) {
				alert("Error: " + error.message);
				}
			} );
			
	
	
	

	});



