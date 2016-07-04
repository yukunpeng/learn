/**
 *
 * @author 
 *
 */
class Page2 extends BasePage {
    private img_1: eui.Image;
    private img_1_1:eui.Image;
    private img_2: eui.Image;
    private img_3: eui.Image;
    private img_4: eui.Image;
    private img_5: eui.Image;
    private img_6: eui.Image;
    private img_7: eui.Image;
    private img_8: eui.Image;
    private img_9: eui.Image;
    private img_9_0: eui.Image;
    private img_10: eui.Image;
    private img_11: eui.Image;
    private img_12: eui.Image;
    private img_13: eui.Image;
    private img_14:eui.Image;
    private gp_fish:eui.Group;
    private img_point: eui.Image;
    private img_point0: eui.Image;
	public constructor() {
        super();
        this.skinName = "src/skins/Page2Skin.exml";
        for(var i = 6;i < this.numChildren;i++) {
            var item = this.getChildAt(i);
            item.alpha = 0;
        }
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_1,this);
        //this.addArrawUP();
        this.addArrawDOWN();
        this.arraw_down.visible=false;
        this.img_point.alpha = 1;
        egret.Tween.get(this.img_point,{ "loop": true }).to({ "alpha": 1 },500).wait(500).to({ "alpha": 0.5 },1500);
    }
    private onclick_1() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_1,this);
        this.arraw_down.visible = true;
        egret.Tween.get(this.img_2).to({ "alpha": 0 },1000);
        egret.Tween.get(this.img_1_1).to({ "alpha": 0.3 },1000);
        egret.Tween.get(this.img_3).to({ "alpha": 1 },1000)
            .wait(100).to({ "x": -250 },1000);
        egret.Tween.get(this.img_4)
            .to({ "alpha": 1 },1000)
            .wait(100).to({ "x": this.img_4.x + 190 },1000).call(this.addTOuch3,this);
        egret.Tween.get(this).wait(800).call(this.playSound,this);
        //this.gp_fish.alpha = 1;
        for(var i = 0;i < this.gp_fish.numChildren; i++) {
            var fish = this.gp_fish.getChildAt(i);
            fish.x = -200 - Math.random() * 300;
            egret.Tween.get(fish,{ "loop": true }).to({ "x": 480,"scaleX": 0.5,"scaleY": 0.5},4000 * Math.random() + 1000);
            egret.Tween.get(fish,{ "loop": true })
                .to({ "anchorOffsetY": 100 },1500,egret.Ease.quadInOut)
                .to({ "anchorOffsetY": 0 },1500,egret.Ease.quadInOut);
        }
        this.img_point.visible = false;
        egret.Tween.removeTweens(this.img_point);
    }
    private playSound(){
        Sound.getInstance().PlayHai();
    }
    private addTOuch2() {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_2,this);
        this.img_5.alpha = 0;
    }
    private addTOuch3() {
        //this.img_point0.visible = true; 
        this.img_point0.alpha = 1;
        egret.Tween.get(this.img_point,{ "loop": true }).to({ "alpha": 1 },500).wait(500).to({ "alpha": 0.5 },1500);

        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_3,this);
    }
    private addTOuch4() {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_4,this);
    }
    private addTOuch5() {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_5,this);
    }
    private addTOuch6() {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_6,this);
    }
    private addTOuch7() {
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_7,this);
    }
    private onclick_2() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_2,this);
        egret.Tween.get(this.img_5)
            .to({ "alpha": 1 },1000)
            .call(this.addTOuch3,this);
    }
    private onclick_3(e: egret.TouchEvent) {
        var hittest: boolean = false;
        for(var i = 0;i < this.gp_fish.numChildren;i++) {
            var fish = this.gp_fish.getChildAt(i);
            var rect = new egret.Rectangle(fish.x,fish.y,fish.width,fish.height);
            if(rect.containsPoint(new egret.Point(e.stageX,e.stageY))) {
                hittest = true;
                break;
            }
        }
        if(!hittest) {
            return;
        }

        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_3,this);
        this.img_6.anchorOffsetY = 100;
        this.img_6.x = 106;
        this.img_6.y = 222 + this.img_6.anchorOffsetY;
        this.img_6.width = 76;
        this.img_6.height = 77;
        
        egret.Tween.get(this.img_6)
            .wait(500)
            .to({ "alpha": 1,"width": 178,"height": 179,"x": 218,"y": 190},500)
            .to({ "alpha": 1,"anchorOffsetY" : 0},1500,egret.Ease.bounceOut);
        egret.Tween.get(this.img_7)
            //.wait(1000)
            .to({ "alpha": 1 },1000)
            .call(this.addTOuch4,this);
        egret.Tween.get(this.img_8)
            .wait(1000)
            .to({ "alpha": 1 },500)
            .call(this.onclick_4,this);
        Sound.getInstance().PauseHai();
    }
    private onclick_4() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_4,this);
        egret.Tween.get(this.img_9_0)
            .to({ "alpha": 1 },1000);
        egret.setTimeout(()=>{
            this.img_9.anchorOffsetY = -100;
            egret.Tween.get(this.img_9)
                .to({ "alpha": 1,"anchorOffsetY": 0 },1500,egret.Ease.cubicOut)
                .call(this.addTOuch5,this);
            },this,1000);           
    }
    private onclick_5() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_5,this);
        egret.Tween.get(this.img_10)
            .to({ "alpha": 1 },1000);
            
        this.img_11.anchorOffsetY=100;
        egret.Tween.get(this.img_11)
            .to({ "alpha": 1,"anchorOffsetY": 0 },1500)
            .call(this.onclick_6,this);
    }
    private onclick_6() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_6,this);
        egret.Tween.get(this.img_12)
            .to({ "alpha": 1 },1000);
        egret.Tween.get(this.img_13).wait(1000)
            .to({ "alpha": 1 },1000)
            .call(this.addTOuch7,this);
        this.img_14.anchorOffsetY = -20;
        egret.Tween.get(this.img_14).wait(1000)
            .to({ "alpha": 1,"anchorOffsetY": 0  },1000)
            .call(this.addTOuch7,this);
    }
    private onclick_7() {
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_7,this);
        this.nextPage();
    }
    private nextPage(){
        this.onclick_page_down();
        
    }
    protected onclick_page_down(){
        egret.Tween.removeAllTweens();
        this.removeAndAdd_Up(new Page3());
        Sound.getInstance().PauseHai();
    }
    protected onclick_page_up(){
        
        egret.Tween.removeAllTweens();
        Sound.getInstance().PauseHai();
        this.removeAndAdd_Dwon(new Page2());
    }
}
