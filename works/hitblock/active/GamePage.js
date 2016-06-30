/**
 * Created by Administrator on 2016/4/10.
 * 500*400
 */
var gamePage={
    BALL_SPEED:8,//小球速度
    BOARD_SPEED:8,//模板速度
    hang:3,//行
    lie:10,//列
    gap:5,//砖块间距
    boardSpeed:0,//挡板速度
    score:0,//得分
    init:function(){
        //初始化引用
        gamePage.ball=$("#gamePage .ball");
        gamePage.board=$("#gamePage .board");
        gamePage.scoreLabel=$("#gamePage .scoreLabel");
        //初始化键盘侦听
        gamePage.addKeyListen();
    },
    reset:function(){
        //创建砖块
        gamePage.clearBlocks();
        gamePage.createBlockArr();
        //重置得分
        gamePage.score=0;
        gamePage.scoreLabel.html("得分：0");
        //重置小球速度
        gamePage.ballSpeedX=gamePage.BALL_SPEED;
        gamePage.ballSpeedY=-gamePage.BALL_SPEED;
        //重置小球位置
        tools.setX(gamePage.ball,245);
        tools.setY(gamePage.ball,359);
        //重置挡板位置
        tools.setX(gamePage.board,200);
        //开始游戏
        gamePage.playGame();
    },
    playGame:function(){
        this.gameFp=setInterval(function(){
            gamePage.hitBlock();
            gamePage.hitBoard();
            gamePage.ballMove();
            gamePage.moveBoard();
            if( gamePage.checkFail()){
                gamePage.gameFail();
            }
        },50);
    },
    gamePause:function(){
        clearInterval(gamePage.gameFp);
    },
    gameFail:function(){
        console.log("fail!");
        clearInterval(gamePage.gameFp);
        failPage.reset();
        $("#gamePage").fadeOut(500);
        $("#failPage").fadeIn(500);
    },
    gameWin:function(){
        console.log("win!");
        clearInterval(gamePage.gameFp);
        $("#gamePage").fadeOut(500);
        $("#winPage").fadeIn(500);
        winPage.reset();
    },
    //---------------------------------------
    clearBlocks:function(){
        $("#gamePage .blockContainer").html("");
    },
    checkWin:function(){
        if($("#gamePage .blockContainer li").length==0)return true;
        return false;
    },
    checkFail:function(){
        if(tools.getY(gamePage.ball)>=400)return true;
        return false;
    },

    addKeyListen:function(){
        $(document).keypress(function(e){
            switch (e.which){
                case 97://a
                    gamePage.boardSpeed=-gamePage.BOARD_SPEED;
                    break;
                case 100://d
                    gamePage.boardSpeed=gamePage.BOARD_SPEED;
                    break;
            }
        });
        $(document).keyup(function(){
            gamePage.boardSpeed=0;
        });
    },
    moveBoard:function(){
        var goalX=tools.getX(gamePage.board)+gamePage.boardSpeed;
        if(goalX<0)goalX=0;
        if(goalX>500-gamePage.board.width())goalX=500-gamePage.board.width();
        tools.setX(gamePage.board,goalX);
    },
    hitBoard:function(){
        if(tools.hitTestObj(gamePage.ball,gamePage.board)){
            gamePage.ballSpeedY*=-1;
            //速度叠加
            if(gamePage.ballSpeedX>0&&gamePage.boardSpeed<0){
                gamePage.ballSpeedX=0;
            }else if(gamePage.ballSpeedX<0&&gamePage.boardSpeed>0){
                gamePage.ballSpeedX=0;
            }else if(gamePage.ballSpeedX==0&&gamePage.boardSpeed<0){
                gamePage.ballSpeedX=-gamePage.BALL_SPEED;
            }else if(gamePage.ballSpeedX==0&&gamePage.boardSpeed>0){
                gamePage.ballSpeedX=gamePage.BALL_SPEED;
            }
        }
    },
    hitBlock:function(){
        var blockNum=$("#gamePage .blockContainer li").length;
        for(var i=0;i<blockNum;i++){
            var block=$("#gamePage .blockContainer li:eq("+i+")");
            if(tools.hitTestObj(gamePage.ball,block)){
                gamePage.ballSpeedY*=-1;
                block.remove();
                gamePage.score++;
                $("#gamePage .scoreLabel").html("得分："+gamePage.score);
                if(gamePage.checkWin()){
                    gamePage.gameWin();
                }
                return;
            }
        }
    },
    ballMove:function(){
        //球撞墙
        var goalX=tools.getX(gamePage.ball)+gamePage.ballSpeedX;
        var goalY=tools.getY(gamePage.ball)+gamePage.ballSpeedY;
        if(goalX>=500-gamePage.ball.width())gamePage.ballSpeedX=-gamePage.BALL_SPEED;
        if(goalX<=0)gamePage.ballSpeedX=gamePage.BALL_SPEED;

        //if(goalY>=400-gamePage.ball.height())gamePage.ballSpeedY=-gamePage.BALL_SPEED;
        if(goalY<=0)gamePage.ballSpeedY=gamePage.BALL_SPEED;

        tools.setX(gamePage.ball,goalX);
        tools.setY(gamePage.ball,goalY);
    },
    createBlockArr:function(){
        var sum=this.hang*this.lie;
        var blockContainer=$("#gamePage .blockContainer");
        for(var i=0;i<sum;i++){
            var block=tools.getBlock();
            var goalX=(i%10)*(40+this.gap);
            var goalY=Math.floor(i/10)*(10+this.gap);
            tools.setX(block,goalX);
            tools.setY(block,goalY);
            blockContainer.append(block);
        }
    }

}