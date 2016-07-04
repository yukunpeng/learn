/**
 *
 * @author 
 *
 */
class Dog extends egret.Sprite{
    private dog:egret.MovieClip;
    public hungry:number;
    
    public reset():void{
        this.hungry=3;
    }
    
    public run():void{
        this.dog.gotoAndPlay("run",-1);
    }
    
    public toRight():void{
        this.dog.scaleX=-1;
    }
    
    public toLeft(): void {
        this.dog.scaleX = 1;
    }
    
	public constructor() {
    	   super();
    	   this.dog=McManager.getDog();
    	   this.addChild(this.dog);
	}
}
