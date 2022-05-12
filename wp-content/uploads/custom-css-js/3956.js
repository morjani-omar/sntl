<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">

			//let myIframe = document.getElementById("myIframe");
            let url_string = "http://sntl3.local/docs/";
			let url_string2 = "http://sntl3.local/docs/create/";
            let width = "728";
            let height = "90";
            let note = "fr";
    
            let adsURL = url_string+"?note="+note+"&size="+width+"x"+height;
 			let adsURL2 = url_string2+"?create-note="+note+"&size="+width+"x"+height;
            console.log(adsURL);
			console.log(adsURL2);


			//let myIframe2 = document.getElementById("myIframe2");
            let url_string3 = "http://sntl3.local/docs/";
			let url_string4 = "http://sntl3.local/docs/create/";
            let width3 = "728";
            let height3 = "90";
            let procedure = "fr";
    
            let adsURL3 = url_string3+"?procedure="+procedure+"&size="+width3+"x"+height3;
			let adsURL4 = url_string4+"?create-procedure="+procedure+"&size="+width3+"x"+height3;
            console.log(adsURL3);
			console.log(adsURL4);

jQuery(document).ready(function($){  

  
   jQuery('.doctable tr').each(function(){
        var x = jQuery(this).find('#type-doc').text();
        var y = jQuery.trim(x);
      if( location.href == "http://sntl3.local/docs/?note=fr&size=728x90"){
             jQuery('#bp-create-doc-button').attr('href','http://sntl3.local/docs/create/?create-note=fr&size=728x90')
             jQuery('#bp-create-doc-button').text('Nouveau note de service');
             jQuery('#bp-docs-all-docs a').text('Tous les notes de servces');
             jQuery('#bp-docs-all-docs a').attr('href','http://sntl3.local/docs/?note=fr&size=728x90');
           	

           if((y == 'Processus') || (y == 'Procédure')) {
             jQuery(this).remove();
           }
         }
     else if( location.href == "http://sntl3.local/docs/?procedure=fr&size=728x90"){
             jQuery('#bp-create-doc-button').attr('href',' http://sntl3.local/docs/create/?create-procedure=fr&size=728x90/')
             jQuery('#bp-create-doc-button').text('Nouveau procédure');
             jQuery('#bp-docs-all-docs a').text('Tous les procédures');
             jQuery('#bp-docs-all-docs a').attr('href','http://sntl3.local/docs/?procedure=fr&size=728x90');
         	jQuery('h1.single-title.page-title.entry-title').text('Procédure de la SNTL'); 
           	 //jQuery('#menu-item-4623 a').css('background-color','')
             //jQuery('#menu-item-3834 a').css('background-color','var(--grimlock-navigation-menu-item-active-background-color)')
          

           if((y == 'Processus') || (y == 'Notes de services')) {
             jQuery(this).remove();
           }
         }
      else{
             jQuery('#bp-create-doc-button').text('Nouveau processus');
             jQuery('#bp-docs-all-docs a').text('Tous les processus');
           	jQuery('h1.single-title.page-title.entry-title').text('Processus de la SNTL'); 
           if((y == 'Notes de services') || (y == 'Procédure')){
              jQuery(this).remove();
           }
       }  
        
	})
  
    jQuery('#Type > option').each(function(){
      if ( location.href == "http://sntl3.local/docs/create/?create-note=fr&size=728x90" ) { 
        jQuery('#d217').remove();
        jQuery('#d231').remove();
         jQuery('#bp-docs-all-docs a').attr('href','http://sntl3.local/docs/?note=fr&size=728x90');
      	jQuery('#bp-docs-all-docs a').text('Tous les notes de services');
        jQuery('h1.single-title.page-title.entry-title').text('Créer un note de service');      
      	jQuery('.bp-docs.bp-docs-container.bp-docs-theme-cera-pl h2').text('Nouveau note de service');
      }
    
     else if(location.href == "http://sntl3.local/docs/?create-procedure=fr&size=728x90" ) {
        jQuery('#d217').remove();
        jQuery('#d218').remove();
         jQuery('#bp-docs-all-docs a').attr('href','http://sntl3.local/docs/?procedure=fr&size=728x90');
      	jQuery('#bp-docs-all-docs a').text('Tous les procédures');
        jQuery('h1.single-title.page-title.entry-title').text('Créer une procédure');      
      	jQuery('.bp-docs.bp-docs-container.bp-docs-theme-cera-pl h2').text('Nouveau procédure');
            
     }
     else{
        jQuery('#d218').remove();
        jQuery('#d231').remove();
     }
  })
  /  
  jQuery('a#associated-toggle-link').html('<span class="show-pane plus-or-minus"></span>Activité associé');
  jQuery('th.groups-cell').text('Activité');
  })</script>
<!-- end Simple Custom CSS and JS -->
