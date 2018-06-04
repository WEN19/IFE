function createTable(list){
	var regionLength=getCheckedValue(region).length;
	var productLength=getCheckedValue(product).length;
	var firstCol=getFirstColumn(regionLength,productLength);
	var arr=[];
	if(firstCol=="商品"){
		arr=["product","region","商品","地区"];
	}else{
		arr=["region","product","地区","商品"];
	}
	table.innerHTML="<tr><th>"+arr[2]+"</th><th>"+arr[3]+"</th><th>1月</th><th>2月</th><th>3月</th><th>4月</th><th>5月</th><th>6月</th><th>7月</th><th>8月</th><th>9月</th><th>10月</th><th>11月</th><th>11月</th></tr>"
	var tableHtml="";
	for(var i=0;i<list.length;i++){
	var set="<tr><td>"
	set+=list[i][arr[0]]+"</td><td>"+list[i][arr[1]];
	for(var j=0;j<list[i].sale.length;j++){
		set+="</td><td>"+list[i].sale[j];
	}
	set+="</td></tr>"
	tableHtml+=set;
	}
	table.innerHTML+=tableHtml;
	if(isMerge(regionLength,productLength))
   setRowspan();
}

function getFirstColumn(regionLength,productLength){
	if(productLength==1)
		return "商品";
	else if(regionLength==1){
		return "地区";
	}else{
		return "商品";
	}
}

function setRowspan(){
  var trs = table.getElementsByTagName("tr");
  var tds = [];
  for(var i=1;i<trs.length;i++){
	console.log(trs[i].firstChild);
    tds.push(trs[i].firstChild);
	}
  if(tds.length === 0)
    return;
  var rowspan = 1;
  var index = 0;        // 记录相邻的相同值中的第一个td的下标
  for(var i=0;i<tds.length;i++){
    var str = tds[index].innerHTML;
    if(i === 0)
      continue;
    if(str == tds[i].innerHTML){
      trs[i+1].removeChild(trs[i+1].childNodes[0]);
      rowspan++;
      if(rowspan > 1){
        trs[index+1].firstChild.setAttribute("rowspan",rowspan);
      }
    }
    else{
      index = i;
      rowspan = 1;
    }
  }
}

function isMerge(rLength,pLength){
  if(rLength <= 1 && pLength <= 1)
    return false;
  return true;
}