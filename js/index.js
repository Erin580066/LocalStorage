var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var lis = list1.children;
var arr = [];
var oS = '';

oS = window.localStorage.getItem('list');
for (var i = 0; i < lis.length; i++) {
	lis[i].onclick = function(){
		var value = this.innerHTML;//当前点击的内容
		arr.push(value);//当前点击的内容放到数组里
		arr = fnQc(arr);//数组去重
		window.localStorage.setItem('list',arr);//去重好的值存到localstorage中
		showList(arr);//渲染到页面
	}
};
//选中删除
list2.onclick = function(ev){
	//如果点到了已选商品的li
	if(ev.target.tagName == 'LI'){
		//先拿到要删除的内容
		var removeValue = ev.target.innerHTML;
		//数组筛选
		for(var i=0;i<arr.length;i++){
			if(arr[i] == removeValue){
				arr.splice(i,1);
				i--;
			}
		}
		//渲染页面
		showList(arr);
		//将新的数组给localStorage
		window.localStorage.setItem('list',arr);
		console.log(arr)
	}
}
//渲染页面
function showList(arr){
	var str = '';
	for (var i = 0; i < arr.length; i++) {
		str +='<li>'+arr[i]+'</li>';
	}
	list2.innerHTML = str;
}
//数组去重
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
