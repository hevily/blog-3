/**
 * Created by Administrator on 2017/3/21.
 */
$(function () {
    
        
        //article，hover
        $('article').mouseover(function  () {
        	$('article h3').removeClass('articleHover');
        	$(this).find('h3').addClass('articleHover');
        })

})