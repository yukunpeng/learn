/**
 *
 * @author 
 *
 */
class Dog extends egret.Sprite{
    public type:string;
    //
    private mc:egret.MovieClip;
    //饥饿度
    public hungry:number;
    
    public reset():void{
        this.hungry=3;
    }
    public run():void{
        this.mc.gotoAndPlay("run",-1);
    }
    public sit(): void {
        this.mc.gotoAndPlay("sit",-1);
    }
    
    public toRight():void{
        this.mc.scaleX=1;
    }
    
    public toLeft(): void {
        this.mc.scaleX = -1;
    }
    
    public constructor(type:string) {
    	   super();
    	   this.type=type;
        switch(type){
               case "jie":
                   this.mc = McManager.getJie();
                   break;
               case "shengbing":
                   this.mc = McManager.getShengbing();
                   break;
               case "diaomao":
                   this.mc = McManager.getDiaomao();
                   break;
    	   }
    	   this.addChild(this.mc);
	}
}
