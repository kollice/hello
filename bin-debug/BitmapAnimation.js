var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BitmapAnimation = (function (_super) {
    __extends(BitmapAnimation, _super);
    function BitmapAnimation() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    BitmapAnimation.prototype.onAddToStage = function (event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    BitmapAnimation.prototype.onConfigComplete = function (event) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadGroup("preload");
    };
    BitmapAnimation.prototype.onGroupComplete = function (event) {
        this.bitmap = new egret.Bitmap();
        this.bitmap.texture = RES.getRes("car");
        this.addChild(this.bitmap);
        this.animation();
    };
    BitmapAnimation.prototype.animation = function () {
        var tw = egret.Tween.get(this.bitmap);
        tw.to({ x: 290, y: 0 }, 2000).to({ x: 290, y: 400 }, 2000).call(this.finish, this);
    };
    BitmapAnimation.prototype.finish = function () {
        console.log("finish");
    };
    return BitmapAnimation;
}(egret.DisplayObjectContainer));
__reflect(BitmapAnimation.prototype, "BitmapAnimation");
