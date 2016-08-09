var fp=[];

function findprod()
{
	document.write("Found Products<br><br>");
	_.each(shop,function(item){
		_.filter(log,function(logitem){

			if(logitem.name===item.name && logitem.size===item.size)
			{
				var match = logitem.name;
			
				if(!!match)
				{
					fp.push({id:logitem.id, name:logitem.name, color:logitem.color,size:logitem.size,qty:item.qty,price:logitem.price}); //array of objects
			
				}
			}

		}); //filter
	}); //each
	
	var grouped = _.groupBy(fp,"name");
	var key,i,j;

	for(key in grouped)
	{
		$('body').append('<h3>' + key + '</h3>');
		for(i = 0, j = grouped[key].length; i< j; i++) {

			$('body').append('<input type="checkbox" id='+grouped[key][i].id+'> color:'+grouped[key][i].color+' <br>&nbsp&nbsp&nbsp' + 'price:'+grouped[key][i].price+'<br><br>');
			
		}
	}
		
		$('body').append('<button onclick="checkout()">Done</button>');
}

function checkout()
{
	
	var net=0;
			var checked=[];
			 $('input:checked').each(function() {
  					checked.push(this.id);
				});

			 $('body').empty();
			 document.write("Your Checkout List<br><br>");
			 _.each(checked,function(chkelem){
			 	_.each(fp,function(elem)
			 	{
			 		if(chkelem===elem.id)
			 		{
			 			$('body').append('<br>Id:'+elem.id+' ' +'Name:'+elem.name+' ' + 'Color:'+elem.color+' '+'Size:'+elem.size+' '+ 'Quantity:'+elem.qty+' '+'Price:'+elem.price+'<br>');
			 			net+= elem.qty * elem.price;
			 		}
			 	});
			 	
			 });
			 $('body').append('<br> Net Purchase Amount = '+net);	
}



