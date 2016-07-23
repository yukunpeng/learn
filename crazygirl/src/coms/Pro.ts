/**
 *
 * @author 
 *
 */
class Pro extends eui.Component{
    private rect:eui.Rect;
	public constructor() {
    	   super();
	}
	
	/**
	 * 为倒计时加时间
	 */ 
    public add(dis: number):void{
        //清除tween
        egret.Tween.removeTweens(this.rect);
        var scaleY: number = this.rect.scaleY + dis;
        if(scaleY > 1) {
            scaleY = 1;
        }
        var time: number = scaleY * GameData.getIns().getTotalTime() * 1000;
        this.rect.scaleY=scaleY;
        egret.Tween.get(this.rect).to({ scaleY: 0 },time).call(this.timeOver,this);
	}
	/**
	 * 重置倒计时
	 */ 
    public reset():void{
        this.rect.scaleY = 0.5;
        var time: number = this.rect.scaleY * GameData.getIns().getTotalTime() * 1000;
        egret.Tween.get(this.rect).to({ scaleY: 0 },time).call(this.timeOver,this);
    }
	/**
	 * 倒计时暂停
	 */ 
	public stop():void{
        egret.Tween.removeTweens(this.rect);
	}
	
	public init():void{
    	   this.rect = this["rect"];
        this.rect.anchorOffsetY = 132;
        this.rect.y = 140;
	}
	
	private timeOver():void{
	    this.dispatchEventWith("timeOver");
	}
}
