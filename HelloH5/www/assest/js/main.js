$(function  () {
	$(".pwd-checkBox").click(function  () {
	if($(this).attr('class').indexOf('uncheck')>0){
		$(this).removeClass('uncheck');
	}
	else{
		$(this).addClass('uncheck');
	}
})
})
