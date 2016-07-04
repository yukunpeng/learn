/**
 *
 * @author 
 *
 */
class Tools {
    
    public static hitTest(food:eui.Image,dog:Dog):Boolean{
        var foodRect: egret.Rectangle = new egret.Rectangle(food.x,food.y,food.width,food.height);
        var dogRect: egret.Rectangle = new egret.Rectangle(dog.x - dog.width / 2,dog.y - dog.height,dog.width,dog.height);
        
        return foodRect.intersects(dogRect);
    }
    

}
