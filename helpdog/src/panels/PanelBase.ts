/**
 *
 * @author 
 *
 */
class PanelBase extends eui.Component{
	public constructor(skinName:string) {
    	super();
    	this.skinName=skinName;
    	this.addEventListener(egret.TouchEvent.TOUCH_TAP,this.onTouch,this);
	}
	
	public onTouch(e:egret.TouchEvent):void{
	    
	}
}
