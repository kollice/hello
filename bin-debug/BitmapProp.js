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
var DisplayObjectContainer = egret.DisplayObjectContainer;
var BitmapProp = (function (_super) {
    __extends(BitmapProp, _super);
    function BitmapProp() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addToStage, _this);
        return _this;
    }
    BitmapProp.prototype.addToStage = function () {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    BitmapProp.prototype.onConfigComplete = function () {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupComplete, this);
        RES.loadGroup("preload");
    };
    BitmapProp.prototype.onGroupComplete = function () {
        this.car = new egret.Bitmap();
        this.car.texture = RES.getRes("car");
        this.car.x = 50;
        this.car.y = 150;
        var temp = this.car;
        temp.width = temp.height = 150;
        temp.scaleX = temp.scaleY = .6;
        temp.rotation = 45;
        temp.anchorOffsetX = temp.anchorOffsetY = 0.5;
        this.addChild(this.car);
    };
    return BitmapProp;
}(DisplayObjectContainer));
__reflect(BitmapProp.prototype, "BitmapProp");
