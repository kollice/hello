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
var ResourceConfig = RES.ResourceConfig;
var MyText = (function (_super) {
    __extends(MyText, _super);
    function MyText() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    MyText.prototype.addStage = function () {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE, this.configDone, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    MyText.prototype.configDone = function () {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE, this.groupDone, this);
        RES.loadGroup("preload");
    };
    MyText.prototype.groupDone = function () {
        this.pic = new egret.Bitmap();
        this.pic.texture = RES.getRes("car");
        this.text = new egret.TextField();
        this.text.text = "我是一个文本";
        this.text.x = 200;
        this.text.y = 500;
        this.text.size = 28;
        this.text.textColor = 0xFFFFFF;
        this.text.stroke = 5;
        this.text.strokeColor = 0x006633;
        this.text.$alpha = 0.5;
        this.text.fontFamily = "KaiTi";
        this.text.bold = true;
        this.text.italic = true;
        this.text.size = 55;
        this.text.textAlign = egret.HorizontalAlign.CENTER;
        this.text.verticalAlign = egret.VerticalAlign.MIDDLE;
        this.text.border = true;
        this.shape = new egret.Shape();
        this.shape.graphics.beginFill(0xFF0000);
        this.shape.graphics.drawRect(0, 0, 700, 700);
        this.shape.graphics.endFill();
        this.addChild(this.shape);
        this.addChild(this.pic);
        this.addChild(this.text);
    };
    return MyText;
}(DisplayObjectContainer));
__reflect(MyText.prototype, "MyText");
