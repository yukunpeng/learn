
class BasePage extends eui.Component {
	public constructor() {
        super();
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);
	}
	public AniFromUp(){
	    this.anchorOffsetY = 800;
        egret.Tween.get(this).to({ "anchorOffsetY": 0 },1000,egret.Ease.quadOut);
	}
    public AniFromDown() {
        this.anchorOffsetY = -800;
        egret.Tween.get(this).to({ "anchorOffsetY": 0 },1000,egret.Ease.quadOut);
    }
    public AniToUp() {
        egret.Tween.get(this).to({ "anchorOffsetY": 800 },1000,egret.Ease.quadOut);
    }
    public AniToDown() {
        egret.Tween.get(this).to({ "anchorOffsetY": -800 },1000,egret.Ease.quadOut);
    } 
    protected removeAndAdd_Up(page:BasePage){
        this.AniToUp();
        page.AniFromDown();
        this.parent.addChild(page);
        egret.Tween.get(this).wait(1000).call(this.removethis,this);
    }
    protected removeAndAdd_Dwon(page: BasePage) {
        this.AniToDown();
        page.AniFromUp();
        this.parent.addChild(page);
        egret.Tween.get(this).wait(1000).call(this.removethis,this);
    }
    private removethis(){
        this.removeEventListener(egret.TouchEvent.TOUCH_BEGIN,this.ontouch_begin,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_MOVE,this.ontouch_move,this);
        this.removeEventListener(egret.TouchEvent.TOUCH_END,this.ontouch_end,this);
        if(this.arraw_up!=null){
            this.arraw_up.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_page_up,this);
        }
        if(this.arraw_down != null) {
            this.arraw_down.removeEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_page_down,this);
        }
        if(this.parent && this){
            this.parent.removeChild(this);
        }
        
        
    }
    private arraw_up: ArrawUP;
    protected addArrawUP(){
        this.arraw_up = new ArrawUP();
        this.arraw_up.x = 223;
        this.arraw_up.y = 26;
        this.addChild(this.arraw_up);
        this.arraw_up.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_page_up,this);
    }
    public arraw_down: ArrawDOWN;
    protected addArrawDOWN(){
        this.arraw_down = new ArrawDOWN();
        this.arraw_down.x = 223;
        this.arraw_down.y = 722;
        this.addChild(this.arraw_down);
        this.arraw_down.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_page_down,this);
    }
    protected onclick_page_up(){
        
    }
    protected onclick_page_down(){
        
    }
    private ay:number =0;
    private ontouch_begin(e:egret.TouchEvent){
        this.ay = e.stageY;
    }
    private ontouch_move(e: egret.TouchEvent) {

    }
    private ontouch_end(e: egret.TouchEvent) {
        if(e.stageY - this.ay > 70){
            this.onclick_page_up();
        }
        if(e.stageY - this.ay < -70) {
            if(this.arraw_down == null){
                return;
            }
            this.onclick_page_down();
        }
    }
}
