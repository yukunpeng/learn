/**
 *
 * @author 
 *
 */
class Bg extends eui.Component{
    private bg0: eui.Image;
    private bg1: eui.Image;
    
    private dis:number=20;
	public constructor() {
    	super();
	}
	
	public init():void{
        this.bg0 = this["bg0"];
        this.bg1 = this["bg1"];
	}
	
    public step():void{
        this.bg0.y -= this.dis;
        this.bg1.y -= this.dis;
	    if(this.bg0.y+800<0){
	        this.bg0.y=this.bg1.y+800;
	    }
        if(this.bg1.y+800 < 0) {
            this.bg1.y = this.bg0.y + 800;
        }
	}
}
