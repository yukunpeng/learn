/**
 * Created by Administrator on 2016/4/15.
 */
var winPage={
    init:function(){
        winPage.scoreLabel=$("#winPage .scoreLabel");
        $("#winPage .reWar").click(function(){
            $("#winPage").fadeOut(500);
            $("#gamePage").fadeIn(500);
            gamePage.reset();
        })
        $("#winPage .goHome").click(function(){
            $("#winPage").fadeOut(500);
            $("#homePage").fadeIn(500);
        })
    },
    reset:function(){
        winPage.scoreLabel.html("得分："+gamePage.score);
    }
}