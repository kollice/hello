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
/**
 * Created by Administrator on 2018/3/19.
 */
var FontTest = (function (_super) {
    __extends(FontTest, _super);
    function FontTest() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.add, _this);
        return _this;
    }
    FontTest.prototype.add = function () {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE, this.conf, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    FontTest.prototype.conf = function () {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE, this.group, this);
        RES.loadGroup("preload");
    };
    FontTest.prototype.group = function () {
        var text = new egret.BitmapText();
        text.text = "Hello,BaiJianYe!";
        var font;
        font = RES.getRes("font");
        text.font = font;
        text.width = 500;
        this.addChild(text);
    };
    return FontTest;
}(DisplayObjectContainer));
__reflect(FontTest.prototype, "FontTest");
