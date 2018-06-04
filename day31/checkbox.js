	function checkBoxStatus(che){
		var checks=che.parentNode.parentNode.getElementsByTagName("input");
		if(che.value=="全选"){
			for(var i=1;i<checks.length;i++){
				checks[i].checked=true;
			}
		}else{
			var checkedNum=0;
			for(var i=1;i<checks.length;i++){
				if(checks[i].checked==true){
					checkedNum++;
				}
			}
			if(checkedNum==3){
				checks[0].checked=true;
			}
			for(var i=1;i<checks.length;i++){
				if(!checks[i].checked){
					checks[0].checked=false;
				}
			}
		}
	}

	function getData(){
		var regionValue=getCheckedValue(region);
		var productValue=getCheckedValue(product);
		var list=[];
		for(var i=0;i<sourceData.length;i++){
			for(var j=0;j<regionValue.length;j++){
				for(var k=0;k<productValue.length;k++){
					if(productValue[k]==sourceData[i].product&&regionValue[j]==sourceData[i].region){
							list.push(sourceData[i]);
					}
				}
			}
		}
		//console.log(list);
		return list;
	}
	
	function getCheckedValue(foo){
		var checkboxs = foo.getElementsByTagName("input");
		var valArr = [];
		for(var i=1;i<checkboxs.length;i++){
		if(checkboxs[i].checked)
		valArr.push(checkboxs[i].value);
	}
		return valArr;
}