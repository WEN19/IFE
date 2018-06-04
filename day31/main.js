	var table = document.getElementById("table-wrapper");
	var region = document.getElementById("region-radio-wrapper");
	var product = document.getElementById("product-radio-wrapper");
	var container=document.getElementById("container");
	container.onclick=function(event){
		var event=event||window.event;
		if(event.target.nodeName.toLowerCase()=="input"){
			checkBoxStatus(event.target)
			createTable(getData());
		}
	}