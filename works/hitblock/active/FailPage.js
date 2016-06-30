/**
 * Created by Administrator on 2016/4/15.
 */
var failPage={
    init:function(){
        failPage.scoreLabel=$("#failPage .scoreLabel");
        $("#failPage .reWar").click(function(){
            $("#failPage").fadeOut(500);
            $("#gamePage").fadeIn(500);
            gamePage.reset();
        })
        $("#failPage .goHome").click(function(){
            $("#failPage").fadeOut(500);
            $("#homePage").fadeIn(500);
        })
    },
    reset:function(){
        failPage.scoreLabel.html("得分："+gamePage.score);
    }
}