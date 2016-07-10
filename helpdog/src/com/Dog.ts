/**
 *
 * @author 
 *
 */
class Dog extends egret.Sprite{
    //jie,shengbing,diaomao
    public type:string;
    //
    private mc:egret.MovieClip;
    //饥饿度
    public hungry:number;
    
    private tipArr:eui.Image[];
    
    //打击dog
    public hit():void{
        
        this.tipArr[this.hungry-1].visible = false;
        this.hungry--;
    }
    
    public reset():void{
        this.hungry=3;
        for(var i:number=0;i<3;i++){
            this.tipArr[i].visible=true;
        }
    }
    public run():void{
        this.mc.gotoAndPlay("run",-1);
    }
    public sit(): void {
        this.mc.scaleX = 1;
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
    	   this.tipArr=[];//提示
    	   var wl:string="";//文理
    	   var _y:number;//提示坐标
        switch(type){
               case "jie":
                   this.mc = McManager.getJie();
                   _y=-120;
                   wl="jiefood_png";
                   break;
               case "shengbing":
                   this.mc = McManager.getShengbing();
                   _y = -120;
                   wl = "shengbingfood_png";
                   break;
               case "diaomao":
                   this.mc = McManager.getDiaomao();
                   _y = -160;
                   wl = "diaomaofood_png";
                   break;
    	   }
    	   this.addChild(this.mc);
    	   for(var i:number=0;i<3;i++){
               var img: eui.Image = new eui.Image(RES.getRes(wl));
               img.y = _y;
               img.x = i*25;
               this.tipArr.push(img);
               this.addChild(img);
    	   }
	}
}
