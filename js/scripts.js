//Fonctions





$(function(){
	$("#btnSearch").on('click', function(){	
		var search = $('#iptSearch').val();
		var lien ='http://www.omdbapi.com/';
		$.ajax({
			type: "GET",
			url: 		lien,
			dataType:   "json",
			data :{ 
				s : search,
				apikey :"efdc2275",
				type:"movie"
			},
			success:    function(info){
				
				if(info.Search != undefined){
					tabFilm = info.Search;
					$('#tabFilm tbody').html("");
					for (let film of tabFilm){
						var str = '<tr data-id='+film.imdbID+'>';
						str+= '<td>'+ film.Year+'</td>';
						str+= '<td>'+ film.Title+'</td>';
						str+= '<td><img src="'+ film.Poster+'" width="200" ></td>';
						str+= '<td>'+ getBtnAjout()+'</td>';
						str += '</tr>';
						$('#tabFilm').append(str);
					}
				}
			}
					
		}).fail(function(){alert('error')});
		
	});
});