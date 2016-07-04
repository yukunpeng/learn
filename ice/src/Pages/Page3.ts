

class Page3 extends BasePage {
    private gp_items:eui.Group;
    public currentsel: number = 1;
    private isAnimatting: boolean = false;
    private btn_left:eui.Image;
    private btn_right: eui.Image;
    private group_arraw:eui.Group;
    public constructor() {
        super();
        this.skinName = "src/skins/Page3Skin.exml";
        this.btn_left.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_left,this);
        this.btn_right.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_right,this);
        this.gp_items.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin_items,this);
        this.gp_items.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move_items,this);
        this.gp_items.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end_items,this);
        this.group_arraw.visible=false;
        this.group_arraw.addEventListener(egret.TouchEvent.TOUCH_TAP,this.nextPage,this);
        this.chengeItems();
        for(var i = 0;i < this.group_arraw.numChildren; i++) {
            var item = this.group_arraw.getChildAt(i);
            egret.Tween.get(item,{"loop":true})
                .wait(i * 500).to({"alpha":0},1500)
                .to({ "alpha": 1 },1000)
                .wait((this.group_arraw.numChildren - i - 1) * 500);
        }
        this.group_arraw.visible = false;
        this.addArrawUP();
        //this.addArrawDOWN();
        egret.Tween.get(this.btn_left,{ "loop": true })
            .to({ "alpha": 0.2 },1500)
            .to({ "alpha": 1 },1000);
        egret.Tween.get(this.btn_left,{ "loop": true })
            .to({ x: this.btn_left.x - 20 },800)
            .to({ x: this.btn_left.x },800);
        egret.Tween.get(this.btn_right,{ "loop": true })
            .to({ "alpha": 0.2 },1500)
            .to({ "alpha": 1 },1000);
        egret.Tween.get(this.btn_right,{ "loop": true })
            .to({ x: this.btn_right.x + 20 },800)
            .to({ x: this.btn_right.x },800);
    }
    private chenge_text() {
        this.isAnimatting = false;
        this.showItemAni();
    }
    private chengeItems() {
        if(this.isAnimatting) {
            return;
        }
        egret.Tween.get(this.gp_items)
            .to({ "x": -480 * (this.currentsel - 1) },500,egret.Ease.cubicInOut)
            .call(this.chenge_text,this);
        this.isAnimatting = true;
        this.btn_left.visible = !(this.currentsel == 1);
        this.btn_right.visible = !(this.currentsel == 4);
        //this.group_arraw.visible = !this.btn_right.visible;
        var group = <eui.Group>this.gp_items.getChildAt(this.currentsel - 1);
        group.getChildAt(1).alpha = 0;
        group.getChildAt(2).alpha = 0;
        group.getChildAt(2).anchorOffsetY = -20;
        
    }
    private showItemAni(){
        var group = <eui.Group>this.gp_items.getChildAt(this.currentsel - 1);
        egret.Tween.get(group.getChildAt(2)).wait(500)
            .to({ "anchorOffsetY": 0,"alpha" : 1},1000);
        egret.Tween.get(group.getChildAt(1))
            .to({ "alpha": 1 },1000);
    }
    private onclick_left() {
        if(this.isAnimatting) {
            return;
        }
        this.currentsel -= 1;
        if(this.currentsel <= 1) {
            this.group_arraw.visible = false;
        }
        if(this.currentsel <= 0) {
            this.currentsel = 1;
            return;
        }
        this.chengeItems();
    }
    private onclick_right() {
        if(this.isAnimatting) {
            return;
        }
        this.group_arraw.visible=true;
        this.currentsel += 1;
        if(this.currentsel >= 5) {
            this.currentsel = 4;
            return;
        }
        this.chengeItems();
    }
    private _savetouchx = 0;
    private _savetouchy = 0;
    private ontouch_begin_items(e: egret.TouchEvent) {
        this._savetouchx = e.stageX;
        this._savetouchy = e.stageY;
    }
    private ontouch_move_items() {

    }
    protected onclick_page_down() {
        this.nextPage();
    }
    private ontouch_end_items(e: egret.TouchEvent) {
        if(this._savetouchy - e.stageY > 70){
            this.nextPage();
            return;
        }
        if(e.stageX < this._savetouchx) {
            this.onclick_right();
        }
        if(e.stageX > this._savetouchx) {
            this.onclick_left();
        }
    }
    private nextPage(){
        for(var i = 0;i < this.group_arraw.numChildren;i++) {
            var item = this.group_arraw.getChildAt(i);
            egret.Tween.removeTweens(item);
        }
        this.clearListener();
        
        this.removeAndAdd_Up(new Page1());
    }
    private clearListener(){
        this.btn_left.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_left,this);
        this.btn_right.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_right,this);
        this.gp_items.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin_items,this);
        this.gp_items.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move_items,this);
        this.gp_items.removeEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end_items,this);
        this.group_arraw.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.nextPage,this);
        egret.Tween.removeTweens(this.btn_left);
        egret.Tween.removeTweens(this.btn_right);
    }
    protected onclick_page_up() {
        this.clearListener();
        this.removeAndAdd_Dwon(new Page2());
    }
}