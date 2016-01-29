$(document).ready(function() {

	var prev = 0;

	$('button').click(function() {

		var rand = Math.floor(Math.random() * 3);

		while (rand === prev) { 
			rand = Math.floor(Math.random() * 3);
		}
		prev = rand;

		if (rand === 0) {
			
        	$('img').attr('src', 'http://whalebonemag.com/wp-content/uploads/2015/08/DSC_4647-Edit-1050x701.jpg');
        	//prev = 0;
    	}
    	else if (rand === 1) {
    		$('img').attr('src', 'http://i.imgur.com/GWoeeaN.jpg');
    		//prev = 1;
    	}
    	else { 
    		$('img').attr('src', 'http://spoilednyc.com/wp-content/uploads/2015/07/23/final-5056.jpg');
    		//prev = 2;
    	}
	});
})