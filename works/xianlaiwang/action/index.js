$(function(){
    initFoldMenu();
    initScrollAd();
})

function initScrollAd(){
    $("#banner .nav a").mouseover(function(){
        $("#banner .nav a").removeClass("active");
        $(this).addClass("active");
        $("#banner .discountContent,#banner .shopContent").hide();
        if($(this).attr("class").indexOf("discountActive")!=-1){
            $("#banner .discountContent").show();
        }else{
            $("#banner .shopContent").show();
        }
    })
    beginScroll();
    $("#banner .discountContent").mouseover(stopScroll).mouseout(beginScroll);
}
var scrollFp;
function beginScroll(){
    scrollFp=setInterval(function(){
        var scrollLi=$("#banner .discountContent li:first-child");
        scrollLi.animate({"marginTop":-scrollLi.height()+"px"},1000,function(){
            scrollLi.css("marginTop",0);
            scrollLi.appendTo($("#banner .discountContent"));
        });
    },2000)
}
function stopScroll(){
    clearInterval(scrollFp);
}
function initFoldMenu(){
    var nav=$("#nav .mainNav .header");
    var subNav=$("#nav .subNav");
    nav.mouseover(function(){
        subNav.stop(true,false).slideDown(100);
    })
    nav.mouseout(function(){
        subNav.slideUp(100);
    })
    subNav.mouseover(function(){
        subNav.stop(true,false).slideDown(100);
    })
    subNav.mouseout(function(){
        subNav.slideUp(100);
    })
}
