

class Page5 extends BasePage {
    private img_progress:ProgressControl;
    private img_control:eui.Image;
    private img_1:eui.Image;
    private img_2:eui.Image;
    private img_left:eui.Image;
    private img_right:eui.Image;
    private gp_player:eui.Group;
    private gp_gudian:eui.Group;
    private img_text:eui.Image;
    private img_text_1:eui.Image;
    private img_hand:eui.Image;
    private img_point:eui.Image;
    public constructor() {
        super();
        this.skinName = "src/skins/Page5Skin.exml";
        this.img_point.alpha = 0.5;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch2,this);
        egret.startTick(this.onupdate,this);
        this.addArrawUP();
        this.addArrawDOWN();
        
        //this.img_progress.SetProgress(0.1293);
        egret.Tween.get(this.img_point,{ "loop": true }).to({ "alpha": 1 },500).wait(500).to({ "alpha": 0.5 },1500);
    }
    private onupdate():boolean{
        var p = Sound.getInstance().getGudianPoint();
        //console.log(p);
        this.img_progress.SetProgress(p);
        return false;
    }
    private ontouch2(){
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch2,this);
        this.img_point.visible = false;
        egret.Tween.get(this.img_1).to({ "rotation": 0 },1000);
        egret.Tween.get(this.img_2).wait(1000).to({ "alpha": 1 },1000).call(this.addTouch3,this);
    }
    private addTouch3(){
        this.img_point.visible = true;
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch3,this);
        this.img_control.source = RES.getRes("p4_10_1_png");
        Sound.getInstance().PauseBGM();
        Sound.getInstance().PlayGudian();
    }
    private ontouch3(){
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch3,this);
        this.gp_gudian.visible = true;
        this.gp_gudian.alpha = 0;
        this.img_left.alpha = 0;
        this.img_right.alpha = 0;
        this.img_left.x -= 50;
        this.img_right.x += 50;
        this.arraw_down.visible = false;
        egret.Tween.get(this.gp_gudian).to({ "alpha": 1 },1000).call(this.addTouch4,this);
        egret.Tween.get(this.img_left).to({ "x": this.img_left.x + 50,"alpha": 1 },1000);
        egret.Tween.get(this.img_right).to({ "x": this.img_right.x - 50,"alpha": 1 },1000);
    }
    private addTouch4() {
        this.img_point.visible = false;
        egret.Tween.removeTweens(this.img_point);
        //this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch4,this);
        var x = this.img_left.x;
        egret.Tween.get(this.img_left,{ "loop": true })
            .to({ "x": x - 20,"rotation": -5 },2000)
            .to({ "x": x,"rotation": 0 },2000);
        x = this.img_right.x;
        egret.Tween.get(this.img_right,{ "loop": true })
            .to({ "x": x+20,"rotation": 5 },2000)
            .to({ "x": x,"rotation": 0 },2000);
        egret.Tween.get(this).wait(3000).call(this.ontouch4,this);
    }
    private ontouch4(){
        this.arraw_down.visible = true;
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch4,this);
        egret.Tween.removeTweens(this.img_left);
        egret.Tween.removeTweens(this.img_right);
        this.arraw_down.visible=false;
        this.gp_player.visible = true;
        this.gp_player.alpha = 0;
        this.img_text.alpha = 0;
        this.img_text_1.alpha = 0;
        this.img_hand.alpha = 0;
        this.img_hand.anchorOffsetX = -100;
        egret.Tween.get(this.gp_player).to({ "alpha": 1 },1000)
            .wait(1000)
            .call(this.addTouch5,this);
    }
    private addTouch5(){
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch5,this);
        egret.Tween.get(this.img_hand).to({ "anchorOffsetX": 0,"alpha": 1 },1000);
        egret.Tween.get(this.img_text).wait(1000).to({ "anchorOffsetX": 0,"alpha": 1 },1000);
        egret.Tween.get(this.img_text_1).wait(2500).to({ "alpha": 1 },1000);
    }
    private ontouch5(){
        this.onclick_page_down();
    }
    protected onclick_page_down(){
        if(this.arraw_down.visible == false) {
            //return;
        }
        this.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.ontouch5,this);
        Sound.getInstance().PlayBGM();
        Sound.getInstance().PauseGudian();
        egret.stopTick(this.onupdate,this);
        this.removeAndAdd_Up(new Page6());
    }
    protected onclick_page_up() {
        Sound.getInstance().PlayBGM();
        Sound.getInstance().PauseGudian();
        this.removeAndAdd_Dwon(new Page4());
    }
}
