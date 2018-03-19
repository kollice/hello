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
var ResourceEvent = RES.ResourceEvent;
var SpriteSheet = (function (_super) {
    __extends(SpriteSheet, _super);
    function SpriteSheet() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    SpriteSheet.prototype.addStage = function (event) {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE, this.onConfigDone, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    SpriteSheet.prototype.onConfigDone = function (event) {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE, this.init, this);
        RES.loadGroup("preload");
    };
    SpriteSheet.prototype.init = function (event) {
        this.bitmap = new egret.Bitmap();
        this.bitmap.texture = RES.getRes("db.oceanbase");
        this.addChild(this.bitmap);
        // this.bitmap.width = this.bitmap.height = 150;
    };
    return SpriteSheet;
}(DisplayObjectContainer));
__reflect(SpriteSheet.prototype, "SpriteSheet");
