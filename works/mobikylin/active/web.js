/**
 * Created by Administrator on 2016/4/21.
 */
$(function(){
    web.init();
})
web={
    init:function(){
        $("#main .nav li").mouseenter(web.navEnter)
        $("#mainNav .fold a").click(web.foldClick);
    },
    foldClick:function(){
        $("#mainNav .content").slideToggle();
        return false;
    },
    navEnter:function(){
        var className=$(this).attr("class");
        var goal=$("#main .desc ."+className);
        goal.siblings().hide();
        goal.show();
    }
}