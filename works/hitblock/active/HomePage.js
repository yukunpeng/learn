/**
 * Created by Administrator on 2016/4/10.
 */

var homePage={
    init:function(){
        $("#homePage .btn").click(function(){
            $("#homePage").fadeOut(500);
            $("#gamePage").fadeIn(500);
            gamePage.init();
            gamePage.reset();
        })
    }
}