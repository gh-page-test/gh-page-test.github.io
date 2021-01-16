 var m_arr = ['Месяц', 'Январь', 'Ферваль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

var p_m = getElementById('month_p');
var p_m.innerHTML = "Месяц";

var p_y = getElementById('year_p');
var p_y.innerHTML = "Год";



function month (m_arr) {
	var irms = document.getElementById('month');
	var p_m = getElementById('month_p');
	var p_m.innerHTML = m_arr[irms.value];

};

function year () {
	var irys = document.getElementById('year');	 
	var p_y = getElementById('year_p');
	var p_y.innerHTML = irys.value ;

};