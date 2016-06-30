/**
 * Created by Administrator on 2016/4/10.
 */
var tools={
    setX:function(div,value){
        div.css("left",value+"px");
    },
    setY:function(div,value){
        div.css("top",value+"px");
    },
    getX:function(div){
        return parseFloat(div.position().left) ;
    },
    getY:function(div){
        return parseFloat(div.position().top);
    },
    getGlobalX:function(div){
        return parseFloat(div.offset().left);
    },
    getGlobalY:function(div){
        return parseFloat(div.offset().top);
    },
    getBlock:function(){
        return $("<li></li>");
    },
    hitTestObj:function(obj1,obj2){
        var x=this.getGlobalX(obj2);
        var y=this.getGlobalY(obj2);
        var w=obj2.width();
        var h=obj2.height();
        if(this.hitTestPoint(obj1,x,y)){return true}
        if(this.hitTestPoint(obj1,x+w,y)){return true}
        if(this.hitTestPoint(obj1,x,y+h)){return true}
        if(this.hitTestPoint(obj1,x+w,y+h)){return true}
        x=this.getGlobalX(obj1);
        y=this.getGlobalY(obj1);
        w=obj1.width();
        h=obj1.height();
        if(this.hitTestPoint(obj2,x,y)){return true}
        if(this.hitTestPoint(obj2,x+w,y)){return true}
        if(this.hitTestPoint(obj2,x,y+h)){return true}
        if(this.hitTestPoint(obj2,x+w,y+h))return true;
        return false;
    },
    hitTestPoint:function(obj,x,y){
        var objX=this.getGlobalX(obj);
        var objY=this.getGlobalY(obj);
        var objW=obj.width();
        var objH=obj.height();
        if(x>=objX&&x<=objX+objW&&y>=objY&&y<=objY+objH)return true;
        return false;
    }

}