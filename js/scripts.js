//Fonctions





$(function(){
	$("#btnSearch").click(function(){	
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
					$('#resultats').html("");
					var bigstr = "";
					var i = 0;
					for (let film of tabFilm){
						var str =  "<div class='col-lg-3 col-md-4 col-sm-6 portfolio-item' style='margin-top: 2%;'>";
						str += "<div class='card h-100'>";
						if(film.Poster != undefined && film.Poster != "N/A"){
							str+= '<a href="#"><img class="card-img-top" src="'+film.Poster+'" alt=""></a> <div class="card-body"><h4 class="card-title">';
						}else{
							str+= '<a href="#"><img class="card-img-top" src="images/affiche_vide.jpg" alt=""></a> <div class="card-body"><h4 class="card-title">';
						}
						str+= '<a href="details.html?&id='+film.imdbID+'">'+film.Title+'</a></h4>';
						str+= ' <p class="card-text">'+film.Released+'</p></div></div></div>';
						str += '</tr>';
						bigstr += str;
						i++;
					}
					bigstr = "<div class='row col-lg-12'><h4>Résultats de la recherche ("+ i +")</h4></div>"+ bigstr;
					$('#resultats').html(bigstr);
				}
			}
					
		}).fail(function(){alert('error')});
		
	});
});