//포트폴리오

var p1pos, p2pos, p3pos, p4pos, p5pos, p6pos;


var tmsts = 0; /*탑메뉴 스크롤 이동 전-0, 탑메뉴 스크롤 이동 후-1*/

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    console.log('현재 스크롤 높이: ' + scTop);

    //헤더 고정 값 변경
    if (scTop > p1pos && tmsts === 0) {
        tmsts = 1;

        $('#top').css({
            position: 'fixed',
            top: '-10px'
        }).animate({
            top: '0px'
        }, 800).addClass('sc-top');
        $('.submenu').css({
            position: 'absolute',
            top: '50px'
        });

    } else if (scTop <= p1pos && tmsts === 1) {
        tmsts = 0;

        $('#top').css({
            top: '0px',
            transition: 'all .6s ease-out'
        }).removeClass('sc-top').animate({
            top: '0px',
        }, 800);
        $('.submenu').css({
            position: 'absolute',
            top: '80px'
        });

    };

}); //scroll



$(function () {

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



    //메인 슬라이드 fadeIn, fadeOut

    var autocall;
    autocall = setInterval(fadeImg, 3000);

    $('.main-box').hover(
        function () {
            clearInterval(autocall);
        },
        function () {
            autocall = setInterval(fadeImg, 3000);
        }); //hover

    //메인영역 자동 호출
    //autocall = setInterval(fadeImg, 2000);


    //메인탭버튼 클릭 - .main-tab 하위에 li는 없어요
    $('.main-tab a').click(function (e) {

        e.preventDefault();
        //alert('클릭클릭~~~');

        var tabcl = $(this).attr('href');
        console.log(tabcl);

        clearInterval(autocall);

        $(tabcl).addClass('active').fadeIn(3000, function () {
            $(this).siblings().removeClass('active');
        });
        $(this).parent().addClass('on').siblings().removeClass('on');


        setTimeout(function () {
            autocall = setInterval(fadeImg, 3000);
        });

    }); //click


}); //jQuery


///////메인페이지 자동 페이드///////////
function fadeImg() {

    //alert('함수실행중~~~~');

    var fimg = $('.main-box li').first();
    var nimg = fimg.next();

    nimg.hide().addClass('active') //active: z-index 1

        .fadeIn(1500, function () {

            $('.main-box').append(fimg);
            fimg.removeClass('active');

        });

    var idx = nimg.attr('data-seq');
    console.log('현재 슬라이드의 data-seq: ' + idx);

    $('.main-tab').eq(idx).addClass('on').siblings().removeClass('on');

} //fadeImg



/////////////spc-value 도넛 카운팅 섹션///////////////////////

$(function () {

    $('#count1').counter({
        autoStart: false,
        duration: 7000,
        countTo: 167576,
        plaeholder: 0,
        easing: "easeOutCubic",
        runOnce: true
    });
    $('#count2').counter({
        autoStart: false,
        duration: 7000,
        countTo: 27,
        plaeholder: 0,
        easing: "easeOutCubic",
        runOnce: true
    });
    $('#count3').counter({
        autoStart: false,
        duration: 7000,
        countTo: 810,
        plaeholder: 0,
        easing: "easeOutCubic",
        runOnce: true
    });
    $('#count4').counter({
        autoStart: false,
        duration: 7000,
        countTo: 1792344,
        plaeholder: 0,
        easing: "easeOutCubic",
        runOnce: true
    });
}); //jQuery

$(window).scroll(function () {

    var scTop = $(this).scrollTop();
    if (scTop > 500) {
        $('#count1').counter("start");
        $('#count2').counter("start");
        $('#count3').counter("start");
        $('#count4').counter("start");
    };
});



////////////Business 영역//////////////////////////////////

var icons = 0; //스크롤액션 실행전-0/실행후-1

$(window).scroll(function () {

    var scTop = $(this).scrollTop();

    //스크롤 탑이 1300보다 클때 비지니스 아이콘 박스 자동 페이드 인
    if (scTop > 1400) {
        $('.business-list').animate({
            marginTop: '120px',
            opacity: '1'
        }, 1500);
        if (icons === 1) return false;
        icons = 1;
    }

});





/////////////Brand 영역///////////////////////////

//전역변수 설정//
var pno = 0; //*left값에 곱해줄 값*/
const limit = 3; //*페이지4에 도달하면 더이상 슬라이드 안되도록 장치*/

var pg = 1; //*페이지 넘어갈때 숫자 바꿔주는 변수*/
//var width= $('.brands-list').width();

var clksts = 0; //클릭상태


$(function () {


    $('.next').click(function (e) {

        e.preventDefault();

        pno++;
        //console.log(pno);

        if (clksts === 1) {
            return false;
        }
        var clksts = 1;

        if (pno > limit) {
            pno = 3;
            return false;
        }

        $('.brands-list').css({
            left: ('100' * -pno) + '%',
            transition: 'all 1s'
        });

        /*$('.brands-list').css({
            left: ('100' * -pno) + '%',
            transition: 'all 1s'
        }, function () {
            //클릭했을 때 더이상 슬라이드X
            if (pno > limit) {
                return false;
                pno = 0;
            }
        });*/


        ///화살표 눌렀을 때 숫자 변경
        pg++;
        $('.pg-btn p>span').text(pg);
        /* if (pg > limit) {
             return false;
             pg = 4;
         }*/

        clksts = 0; //클릭 가능 상태 변경

    }); //.next_click





    $('.prev').click(function (e) {
        e.preventDefault();

        pno--;
        
        if (clksts === 1) {
            return false;
        }
        var clksts = 1;
        
        if (pno < 0) {
            pno = 0;
            return false;
        }
        

        $('.brands-list').css({
            left: ('100' * -pno) + '%',
            transition: 'all 1s'
        });

        //클릭했을 때 더이상 슬라이드X
        /*if (pno < 1) {
            return false;
            pno = 0;
        }*/

        ///화살표 눌렀을 때 숫자 변경
        pg--;
        $('.pg-btn p>span').text(pg);
        /*if (pg < 1) {
            return false;
            pg = 1;
        }*/
    }); //.prev_click

}); //jQuery









////////////////스크롤 위치값
$(function () {

    //스크롤 위치값
    p1pos = $('#main-section').offset().top;
    p2pos = $('#page1').offset().top;
    p3pos = $('#page2').offset().top;
    p4pos = $('#page3').offset().top;
    p5pos = $('#page4').offset().top;
    p6pos = $('#page5').offset().top;

}); //jQuery