// Main.js posee en un js toda la logica relacionada a la aplicacion. 
$(document).on("pagecreate",".page_parent",initmobile);

// Initmobile inicializa la funcion de la aplicacion
function initmobile(){
	var page = $(".page_parent"); // .page_parent es generica a todas las paginas de la aplicacion
	var func = page.attr("id"); // Se obtiene la id de la pagina, y se hace su llamada de funcion especifica para esa pagina
	functions[func]();
}

// Tiene la coleccion de las distintas funciones para llamar segun la pagina
var functions = {
	// Estas funciones sirven para la pagina partido_page
	"get_partidos":function(){
		var partidos = [];
		$.ajax({
			"url":"http://app.uy/ort/api/matches/get.php",
			"dataType":"json",
			"type":"GET",
			success:function(data){
				partidos = data.records;
				functions["showInfo"](partidos[0]);
			},
			error:function(err){
				console.error(err);
			}
		});
	},
	"showInfo":function(hashinfo){
		$("p.team_1_soccer").text(hashinfo.country1.name);
		$("p.team_2_soccer").text(hashinfo.country2.name);
		$("p.date_soccer").text(hashinfo.date);
	}
}