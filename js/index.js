var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");
var lis = list1.children;
var arr = [];
var oS = '';
//一打开页面的时候就获取localstorage，并且渲染到页面，这样保证localStorage中的内容能渲染到页面中
oS = window.localStorage.getItem('list');
if(oS){
	var aS = oS.split(',');
	arr = aS;
	showList(aS);
}
window.addEventListener('storage',function(){
	if(oS){
		var aS = oS.split(',');
		arr = aS;
		showList(aS);
	}else{
		arr.length = 0;
		ul2.innerHTML = '';
	}
})
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
	if(ev.target.tagName=="LI"){
		var removeValue = ev.target.innerHTML;
		for (var i = 0; i < arr.length; i++) {
			if(arr[i] == removeValue){
				arr.splice(i,1);
				i--;
			}
		}
		showList(arr);//渲染到页面
		window.localStorage.setItem('list',arr);
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
