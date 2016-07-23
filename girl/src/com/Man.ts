/**
 *
 * @author 
 *
 */
class Man extends egret.Sprite{
    //
    private mc:egret.MovieClip;
    
    //扔狗粮
    public plit():void{
        this.mc.gotoAndPlay("plit",1);
    }
    
	public constructor(type:string) {
    	   super();
           switch(type){
               case "boy":
                   this.mc = McManager.getBoy();
                   break;
               case "girl":
                   this.mc = McManager.getGirl();
                   break;
    	   }
    	   this.addChild(this.mc);
    	   this.mc.addEventListener(egret.Event.COMPLETE,this.mcOver,this);
	}
	
	private mcOver():void{
        this.mc.gotoAndStop(1);
	}
}
