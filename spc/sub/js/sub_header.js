//sub_header.js

$(function(){
	//메뉴 호버
    $('.gnb-list li').mouseenter(function () {
        $(this).addClass('menu').siblings().removeClass('menu');

        var i = $(this).index();
        $('.submenu').eq(i).addClass('on').siblings().removeClass('on');

    }); //.gnb-list mouseenter

    $('.submenu').mouseleave(function () {

        $('.s-menu').parent().siblings().removeClass('on');

    }); //.submenu mouseleave


    ////eng 언어버튼 클릭
    $('.lang').click(function () {
        alert('홈페이지 준비중입니다^^');
    });
	
	$('.magazine').click(function () {
        alert('홈페이지 준비중입니다^^');
    });
	$('.gtjob').click(function () {
        alert('홈페이지 준비중입니다^^');
    });
	
	
	
	
});//jQuery






