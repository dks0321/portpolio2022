// index.js

///전역변수구역//////////
var pno = 0; //현재 페이지 번호(첫페이지 0)
const totpno = 4; //전체 페이지 갯수
var psts = 0; //광스크롤 막기 (0-허용, 1-막기)

$(function(){
    
    $(document).on('mousewheel DOMMouseScroll', function(e){
        
        //1. 스크롤 기본이동 막기
        e.preventDefault(); 
        
        //스크롤 이동 중 잠금장치!
        if(psts === 1) return false;
        psts = 1;
        
        //2. ie구버전 구분하기, wheelDelta값 구하기
        var evt = window.event || e;
        //둘 중에 존재하는 (true) 전달변수가 할당됨
        
        
        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        //조건연산자 : 조건문?실행문1:실행문2;
        //var delta = evt.wheelDelta;
        
        //파이어폭스를 위한 처리////
        if(/Firefot/i.test(navigator.userAgent)){
            delta = -evt.orginalEvent.detail; 
        }
        console.log('마우스휠 델타값: '+delta);
        
        
        //3. 마우스휠 방향에 따라서 페이지 번호 변경하기
        if(delta > 0) { //양수, 윗방향
            pno--;
            if(pno === -1) pno=0; //한계수 지정
        }else{ //delta < 0, 음수, 아랫방향
            pno++;
            if(pno === totpno) pno=totpno-1;
        }
        
        
        //4. 해당순번 페이지 높이값(top) 구하기
        var pagepos = $('.page').eq(pno).offset().top;
        
        
        //5. 페이지이동 애니메이션
        $('html, body').stop().animate({
            scrollTop: pagepos + 'px'
        }, 800, 'easeInOutQuint', function(){
            psts = 0; //스크롤 잠금 풀기
        }); //animate
        
        //메뉴변경 함수 호출하기!
        chgMenu();
        
        
    }); //mousewheel 이벤트
    
    
    //// 영화 이동 버튼 기능 ////
    //1. 대상선정 : 이동버튼 .abtn(.prev, .next)
    
    document.querySelector('.prev')
        .onclick = function () {
        goSlide(0);
    } //왼쪽 버튼 클릭
    
    document.querySelector('.next')
        .onclick = function () {
        goSlide(1);
    } //오른쪽 버튼 클릭
    
    
    /*섹션3 영화관 파트 - swiper 플로그인 적용하기*/
    
    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el : '.swiper-pagination',
        },
    });
    
    
    
    
}); ///jQuery


/*//////////////////////////////////////////////////////
    함수명 : goSlide
    기능 : 맨 앞의 이미지를 맨 뒤로 또는 맨 뒤의 이미지를 맨 앞으로 이동 후 class를 다시 순서대로 주어서 트랜지션 효과를 이용, 슬라이드가 이동되게 한다.
/////////////////////////////////////////////////////*/

var prot = 0; //광클금지(0-허용, 1-금지)
function goSlide(direction) { //direction 방향(0-왼쪽, 1-오른쪽)
    
    /// 광클 금지구역!
    if (prot===1) {
        return false;
    }
    prot = 1; //금지상태 변경!
    
    
    //1. 대상선정 : .gbox
    
    var tg = document.querySelector('.gbox');
    var tg2 = tg.querySelectorAll('img'); 
    console.log('이미지갯수: '+tg2.length); //5개
    
    if(direction===0) { //왼쪽 버튼
        
        tg.insertBefore(tg2.item(tg2.length - 1), tg2.item(0));
        //insertBefore(넣을대상, 넣을대상의 이전대상)
        //insertBefore(tg2.item(4 - 마지막), tg2.item(0 - 첫번째))
        //맨 뒤의 이미지(마지막 이미지)를 선택, 맨 앞의 이미지 앞(첫 번째 이미지 앞)으로 이동!
        
        
    }else if(direction===1){ //오른쪽 버튼
        
        //맨 앞의 이미지를 맨 뒤로 이동!
        tg.appendChild(tg2.item(0));
        //첫 번째 이미지를 선택, .gbox의맨 뒤로 이동시킨다.
        
    }
    
    // 변경된 순서의 이미지를 다시 읽어오기!
    tg2 = tg.querySelectorAll('img'); 
    
    // 이미지의 class를 다시 설정함!
    for (var i = 0; i < tg2.length; i++) {
        tg2[i].setAttribute('class', 'i' + (i+1));
        //setAttribute('속성이름','속성값');
    }
    
    //광클금지 상태값 변경(허용상태로)
    setTimeout(function(){
        prot = 0;
    },500);
    
}

/*//////////////////////////////////////
    함수명 : chgMenu
    기능 : GNB메뉴가 현재 페이지와 일치되게 변경함
//////////////////////////////////////*/

function chgMenu (){
    
    $('#gnb li').eq(pno).addClass('selM').siblings().removeClass('selM');
    
    
}
















