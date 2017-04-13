$(function() {
	//底部样式
	var href = window.location.href;
	if(href.indexOf('myLearns') >= 0) {
		$("#icon-learn").removeClass('icon-learn');
		$("#icon-learn").addClass("learnOn");
	} else if(href.indexOf('course') >= 0) {
		$("#icon-class").removeClass('icon-class');
		$("#icon-class").addClass("classOn");
	}

	//我的学习页面slider
	for(i = 0; i < $(".learn-bar").length; i++) {
		var speed = $('.learn-bar').eq(i).children('.learn-list-bar').children('i').text();
		$('.learn-bar').eq(i).children('.mui-progressbar').children('span').css('left', speed);
		//					console.log(speed)
	}
	$("#onprogressBtn").click(function() {
		$(".learn-state-title p").removeClass("on");
		$(this).addClass("on");
		$(".mui-slider-group").css('transform', 'translateX(0px)');
	})
	$("#hasfinishBtn").click(function() {

		$(".learn-state-title p").removeClass("on");
		$(this).addClass("on")
		$(".mui-slider-group").css('transform', 'translateX(-375px)');
	})
	var clientHeight = document.documentElement.clientHeight;
	var Height1 = $(".title").outerHeight();
	var Height2 = $(".user-info-wrap").outerHeight();
	var Height3 = $(".Ranking").outerHeight();
	var Height4 = $(".Assessment").outerHeight();
	var Height5 = $(".learn-state-title").outerHeight();
	var Height6 = $("footer").outerHeight();
	var height = clientHeight - (Height1 + Height2 + Height3 + Height4 + Height5 + Height6)
	$(".noClass-wrap").css('height', height + 'px')
})