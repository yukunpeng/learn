//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-2015, Egret Technology Inc.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        _super.call(this);
        this.rect = new eui.Rect();
        this.createView();
    }
    var d = __define,c=LoadingUI,p=c.prototype;
    p.createView = function () {
        var bg = new eui.Rect();
        bg.width = 480;
        bg.height = 800;
        bg.fillColor = 0xffffff;
        this.addChild(bg);
        var img = new eui.Image();
        img.x = (480 - 120) / 2;
        img.y = 200;
        img.source = "resource/assets/loadingbg.jpg";
        this.addChild(img);
        var icon = new eui.Image();
        icon.x = (480 - 120) / 2 + 30;
        icon.y = 200 + 84;
        icon.anchorOffsetX = 11 / 2;
        icon.anchorOffsetY = 26 / 2;
        icon.source = "resource/assets/loading2.png";
        this.addChild(icon);
        egret.Tween.get(icon, { "loop": true }).to({ "rotation": -15 }, 1000)
            .to({ "rotation": 0 }, 1000)
            .to({ "rotation": 15 }, 1000)
            .to({ "rotation": 0 }, 1000);
        var rectbg = new eui.Rect(112, 12, 0xffffff);
        rectbg.x = (480 - 112) / 2;
        rectbg.y = (430);
        rectbg.ellipseWidth = rectbg.ellipseHeight = 15;
        rectbg.strokeWeight = 2;
        rectbg.strokeColor = 0x000000;
        this.addChild(rectbg);
        this.rect = new eui.Rect(100, 4, 0x000000);
        this.rect.x = (480 - 100) / 2;
        this.rect.y = (430 + 4);
        this.rect.ellipseWidth = rectbg.ellipseHeight = 15;
        this.addChild(this.rect);
        this.textField = new egret.TextField();
        this.textField.size = 20;
        this.textField.textColor = 0x000000;
        this.addChild(this.textField);
        this.textField.y = 450;
        this.textField.width = 480;
        this.textField.textAlign = "center";
    };
    p.setProgress = function (current, total) {
        this.textField.text = Math.floor(current * 100 / total) + "%";
        this.rect.width = (current / total) * 100;
    };
    return LoadingUI;
}(egret.Sprite));
egret.registerClass(LoadingUI,'LoadingUI');
