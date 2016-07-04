/**
 *
 * @author 
 *
 */
class PageShare extends BasePage {
    private gp_items:eui.Group;
    private gp_share:eui.Group;
    private btn_more:eui.Image;
    private btn_share:eui.Image;
	public constructor() {
        super();
        this.skinName = "src/skins/PageShareSkin.exml";
        this.btn_more.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_more,this);
        this.btn_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_share,this);
        this.gp_share.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_close_share,this);
        for(var i = 0;i < this.gp_items.numChildren;i++) {
            var item = this.gp_items.getChildAt(i);
            item.alpha = 0;
        }
        egret.Tween.get(this).wait(1000).call(this.begin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onclick_stop,this);
        this.addArrawUP();
	}
	private begin(){
	    for(var i = 0; i < this.gp_items.numChildren; i++) {
            var item = this.gp_items.getChildAt(i);
            egret.Tween.get(item).wait(i * 1000)
                .to({"alpha":1},1000);
	    }
	}
    private onclick_stop(){
        //egret.Tween.removeAllTweens();
        for(var i = 0;i < this.gp_items.numChildren;i++) {
            
            var item = this.gp_items.getChildAt(i);
            egret.Tween.removeTweens(item);
            item.alpha = 1;
            
        }
    }
    private onclick_more() {
        //点击更多
        console.log("on click more!");
        //http://support-cn.samsung.com/campaign/Ref/familyhub/
        self.location.href = "http://support-cn.samsung.com/campaign/Ref/familyhub/";
    }
    private onclick_close_share() {
        this.gp_share.visible = false;
    }
    private onclick_share() {
        this.gp_share.visible = true;
    }
    protected onclick_page_up() {
        this.removeAndAdd_Dwon(new Page5());
    }
    
    
}
