$(function(){
    $('[id*=region_').on('click',function(){
      
// region sur laquelle on clique
        let region = $(this);

        let regionId = $(this)["0"].id;
        let allRegion = $('[id*=region_');

    
 // lors du clic toutes les régions deviennent blanche, 
 // ensuite la région clicquée devient orange
    
        allRegion.css('fill','#fff');
        region.css('fill','#ff7f50');

// on coupe la partie region_ de l' id
        regionId = regionId.replace('region_','région ');

           console.log(regionId)

         let boucle = true;
         do {  
//Faire : dès qu'on trouve un underscore, on le remplace par du 'vide' 
           
               regionId = regionId.replace('_', ' ');


// Si on trouve un underscore=-1, on arrête la boucle
             if((regionId.indexOf('_')) == -1)
             boucle = false;

         }while(boucle); 

        $('#infosRegion').text(regionId);
              
         console.log(regionId);
         
    });
})    
