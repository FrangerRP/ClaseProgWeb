var dpns=true;
function ComenzarTodo(){
if(dpns==true){

	$(function(){						
	var img=null;
  	var sayCheese = new SayCheese('#webcam', { 
  		snapshot: true,
  		width: 500,
  		height:200				  				
  	});
  	sayCheese.start();
  	//Parte2
  	$('#tomarFoto').bind('click', function(e){

  		sayCheese.takeSnapshot(300,200);

  		return false;
  	});

  	sayCheese.on('snapshot', function(snapshot) {

  		img = document.createElement('img');

 		$(img).on('load', function(){

  			$('#FotoArea').html(img);

  		});

  		img.src = snapshot.toDataURL('image/png');
	});  

	
	$('#CamSaveImg').bind('click', function(){
		var src = img.src;
		$('#imgg').attr('src',src);		
	});

});
dpns=false;

}

}