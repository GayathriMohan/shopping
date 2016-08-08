var fp=[];

function findprod()
{
	_.each(shop,function(item){
		var found=_.filter(log,function(logitem){
			return each.name===logitem.name;
		})
		if(!!found)
		{
			_.each(found,function(index){
			fp.push(index);
			});
		}

	});
}



