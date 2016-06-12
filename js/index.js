var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var lis = list1.children;
var arr = [];
var oS = '';

oS = window.localStorage.getItem('list');
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = function(){
		var value = this.innerHTML;
		arr.push(value);
		arr = fnQc(arr);
		showList(arr);
	}
}
function showList(arr){
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str +='<li>'+arr[i]+'</li>';
	}
	list2.innerHTML = str;
}
function fnQc(arr){
	var arr2 = [];
	var json = {};
	for (var i = 0; i < arr.length; i++) {
		var v= arr[i];
		if(!json[typeof(v) + v]){ 
			arr2.push(arr[i]);
			json[typeof(v) + v] = 1; 
		}
	}
	return arr2
}
