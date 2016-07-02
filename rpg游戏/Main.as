package  {
	
	import flash.display.MovieClip;
	import gs.TweenLite;
	import fl.motion.easing.Linear;
	import flash.events.MouseEvent;
	
	
	public class Main extends MovieClip {
		private var toPos:int;
		private var moveTime:Number=0.5;
		private var isMove:Boolean;
		
		
		private var blockDataArr:Array=[
									2,2,2,2,2,2,2,2,2,2,
									2,1,1,1,1,1,1,1,1,2,
									2,1,1,1,1,1,1,1,1,2,
									2,1,1,1,1,1,1,1,1,2,
									2,1,1,1,1,1,1,1,1,2,
									2,1,1,1,1,1,1,1,1,2,
									2,2,2,2,2,2,2,2,2,2
									];
		private var hero:Hero;
		private var blockArr:Array=[];
		
		public function Main() {
			
			
			// constructor code
			for(var i:int=0;i<blockDataArr.length;i++){
				var block:Block=new Block();
				block.x=block.width*(i%10)+100;
				block.y=block.height*(Math.floor(i/10))+100;
				block.type=blockDataArr[i];
				block.pos=i;
				block.gotoAndStop(blockDataArr[i]);
				addChild(block);
				this.blockArr.push(block);
			}
			
			hero=new Hero();
			hero.pos=11;
			hero.x=this.blockArr[hero.pos].x+this.blockArr[hero.pos].width/2;
			hero.y=this.blockArr[hero.pos].y+this.blockArr[hero.pos].height/2;
			addChild(hero);
			this.addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this.addEventListener(MouseEvent.MOUSE_UP,onUp);
		}
		
		private function onDown(e:MouseEvent):void{
			switch(e.target){
				case this["upBtn"]:
					this.toPos-=10;
					tweenOver();
					break;
				case this["downBtn"]:
					this.toPos+=10;
					tweenOver();
					break;
				case this["leftBtn"]:
					this.toPos-=1;
					tweenOver();
					break;
				case this["rightBtn"]:
					this.toPos+=1;
					tweenOver();
					break;
			}
		}
		private function onUp(e:MouseEvent):void{
			this.toPos=-1;
		}
		
		private function go():void{
			//开始移动
			this.isMove=true;
			TweenLite.to(this.hero, moveTime,{
						 x:this.blockArr[this.toPos].x+this.blockArr[this.toPos].width/2,
						 y:this.blockArr[this.toPos].y+this.blockArr[this.toPos].height/2,
						 onComplete:tweenOver,
						 ease:Linear.easeNone
						 });
		}
		
		private function tweenOver():void{
			//结束移动
			this.isMove=false;
			if(toPos<0||toPos>=this.blockArr.length){
				return;
			}
			go();
		}
		
	}
	
}
