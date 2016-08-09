var fp=[];

function findprod()
{
	_.each(shop,function(item){
		var found=_.filter(log,function(logitem){

			if(logitem.name===item.name)
			{
				var match = logitem.name;
			}
		if(!!match)
		{
			fp.push({id:logitem.id, name:logitem.name, qty:item.qty});
			
		}
		

	});
});
	for(i=0;i<(log.length);i++)
		{
			document.write(fp[i].id+"&nbsp");
			document.write(fp[i].name+"&nbsp");
			document.write(fp[i].qty+"<br>");
		}
}



