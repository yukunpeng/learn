/**
 *
 * @author 
 *
 */
class Hero extends eui.Component{
    private leftX: number = 120;
    private rightX: number = 270;
    
    private girl:egret.MovieClip;
    
	public constructor() {
    	   super();
    	   this.init();
	}
	
	public init():void{
    	   this.girl = McManager.getIns().getGirl();
        this.girl.x = 38;
        this.girl.y = 138;
        this.addChild(this.girl);
        this.girl.gotoAndPlay("stand",-1);
	}
	
	public reset():void{
        this.girl.visible = true;
        this.girl.gotoAndPlay("stand",-1); this.girl.gotoAndPlay("stand",-1);
	}
	
	public stand():void{
        this.girl.gotoAndPlay("stand",-1);
	}
    public jump(): void {
        this.girl.gotoAndPlay("jump",1);
        this.girl.addEventListener(egret.Event.COMPLETE,this.jumpOver,this);
    }
    public die(): void {
        this.girl.visible=false;
    }
    
    
    private jumpOver():void{
        this.girl.removeEventListener(egret.Event.COMPLETE,this.jumpOver,this);
        this.girl.gotoAndPlay("stand",-1);
    }
	
	public isAtLeft():Boolean{
	    if(this.x==this.leftX){
	        return true;
	    }
	    return false;
	}

    public toLeft(): void {
        this.x = this.leftX;
    }
    public toRight(): void {
        this.x = this.rightX;
    }
}
