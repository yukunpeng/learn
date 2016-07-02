package  {
	
	import flash.display.MovieClip;
	import gs.TweenLite;
	import fl.motion.easing.Linear;
	import flash.events.MouseEvent;
	
	
	public class Main extends MovieClip {
		private var toWhere:String;
		private var moveTime:Number=0.5;
		
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
			this.addEventListener(MouseEvent.MOUSE_DOWN,onDown);
			this.addEventListener(MouseEvent.MOUSE_UP,onUp);
			
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
		}
		
		
		
		private function onDown(e:MouseEvent):void{

			switch(e.target){
				case this["upBtn"]:
					this.toWhere="up";
					go();
					break;
				case this["downBtn"]:
					this.toWhere="down";
					go();
					break;
				case this["leftBtn"]:
					this.toWhere="left";
					go();
					break;
				case this["rightBtn"]:
					this.toWhere="right";
					go();
					break;
			}
			go();
		}
		private function onUp(e:MouseEvent):void{
			this.toWhere="no";
		}
		
		private function go():void{
			var goalPos:int;
			switch(this.toWhere){
				case "up":
					=this.hero.pos-10;
					break;
			}
			if(goalPos<0)
					tweenObj={
						 y:this["hero"].y-25,
						 onComplete:go,
						 ease:Linear.easeNone
						 }
			TweenLite.to(this.hero, moveTime,tweenObj);
		}
	}
	
}
