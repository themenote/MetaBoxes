jQuery(function($){
	$('#rudr_select2_posts').select2({
  		ajax: {
    			url: ajaxurl, 
    			dataType: 'json',
    			delay: 250, 
    			data: function (params) {
      				return {
        				q: params.term, 
        				action: 'mishagetposts' 
      				};
    			},
    			processResults: function( data ) {
				var options = [];
				if ( data ) {
					$.each( data, function( index, text ) { 
						options.push( { id: text[0], text: text[1]  } );
					});
 
				}
				return {
					results: options
				};
			},
			cache: true
		},
		minimumInputLength: 3 
	});
});