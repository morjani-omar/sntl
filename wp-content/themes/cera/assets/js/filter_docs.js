jQuery(document).ready(function ($) {
    

    $('#parent-theme_doc').change(function(){

       var parent_id = jQuery(this).val();
       console.log(parent_id)
                
                jQuery.ajax({
               type : "POST",
                url : ajaxurl,
                data : {
                    action: "select_docs",
                    parent_id:parent_id,
                },
           success: function(response){
            console.log(response[0] );
            jQuery.each(response, function (i, val) {
                console.log(val);
                jQuery('#child-theme_doc').append(`<option value="${val['term_id']}">${val['name']}</option>`);
            });	
                
                        // jQuery('#cat').append(`<option value="Tous">${tous}</option>`);
               

                    					
           }
       })	
        
             
    })
    
});