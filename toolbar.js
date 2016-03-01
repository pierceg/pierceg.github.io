function search(){
	var query = document.getElementById("searchtxt");
	var querytxt = query.value;
	if (querytxt == '60201' || querytxt == 'Evanston'){
		window.location.href = 'searchresult.html';
	}
	else{
		window.location.href = 'noresult.html';
	}
}

function gohome(){
	window.location.href = "pierceg.github.io/index.html";}