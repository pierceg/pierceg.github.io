function search(){
	var query = document.getElementById("searchtxt");
	var querytxt = query.value;
	if (querytxt == '60201' || querytxt == 'Evanston'){
		window.location.href = 'searchresult.html';
		alert("correct input");
	}
	else{
		window.location.href = 'noresult.html';
		alert(querytxt);
	}
}

function gohome(){
	window.location.href = ‘index.html';
}