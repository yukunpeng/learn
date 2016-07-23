/**
 *
 * @author 
 *
 */
class Floor extends eui.Component{
    private leftX: number = 85;
    private rightX: number = 235;
    private floorArr: any[] = [];
    
	public constructor() {
    	   super();
	}
	
	//下一步
	public nextStep():void{
	    var floor=this.floorArr.shift();
	    this.floorArr.push(floor);
        floor.x = this.getPosX(this.floorArr[3].x,GameData.getIns().getHardNum());
        for(var i: number = 0;i < 5;i++) {
            //定位y
            this.floorArr[i].y = 50 + 150 * i;
        }
	}
	
	//左边是否安全
	public isLeftSafe():Boolean{
	    if(this.floorArr[1].x==this.leftX){
	        return true;
	    }
	    return false;
	}
	
    public initFloorArr(): void {
        for(var i: number = 0;i < 5;i++) {
            this.floorArr.push(this["floor" + i]);
        }
    }
	
	public resetFloorArr():void{
        for(var i: number = 0;i < 5;i++) {
            if(i<2){
                //前两个因为不走，所以随机
                if(Math.random()>0.5){
                    this.floorArr[i].x = this.leftX;
                }else{
                    this.floorArr[i].x = this.rightX;
                }
            }else{
                this.floorArr[i].x = this.getPosX(this.floorArr[i-1].x,GameData.getIns().getHardNum());
            }
            //定位y
            this.floorArr[i].y = 50 + 150 * i;
        }
	}
	
	/**
	 * 根据难度系数获得楼梯的位置
	 * hardNum越大越难
	 */ 
	private getPosX(preX:number,hardNum:number):number{
    	   if(Math.random()<hardNum){
        	   //返回相反的位置
    	       if(preX==this.leftX){
    	           return this.rightX;
    	       }else{
    	           return this.leftX;
    	       }
    	   }   
        return preX;
	}
}
