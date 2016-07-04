

class ArrawUP extends eui.Component{
    protected group_arraw:eui.Group;
	public constructor() {
    	super();
        this.skinName = "src/skins/ArrawUPSkin.exml";
    	this.init();
	}
	protected init(){
        
        for(var i = this.group_arraw.numChildren - 1;i >= 0;i--) {
            var item = this.group_arraw.getChildAt(i);
            item.alpha = 0;
            egret.Tween.get(item,{ "loop": true })
                .wait((this.group_arraw.numChildren - i - 1) * 500).to({ "alpha": 1 },1500)
                .to({ "alpha": 0 },1000)
                .wait((i) * 500);
        }
	}
}
class ArrawDOWN extends ArrawUP{
    public constructor() {
        super();
        
    }
    protected init() {
        
        for(var i = 0;i < this.group_arraw.numChildren;i++) {
            var item = <eui.Image>this.group_arraw.getChildAt(i);
            item.source = RES.getRes("arraw2_png");
            egret.Tween.get(item,{ "loop": true })
                .wait(i * 500).to({ "alpha": 0 },1500)
                .to({ "alpha": 1 },1000)
                .wait((this.group_arraw.numChildren - i - 1) * 500);
        }
    }
}