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
 * Created by Administrator on 2018/3/8.
 */
var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    function MovieClip() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.addStage, _this);
        return _this;
    }
    MovieClip.prototype.addStage = function (e) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigDone, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    MovieClip.prototype.onConfigDone = function (e) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onGroupDone, this);
        RES.loadGroup("preload");
    };
    MovieClip.prototype.onGroupDone = function (e) {
        // this.movie = new egret.Bitmap();
        // this.movie.texture = RES.getRes("chunli_json");
        var png = RES.getRes("chunli");
        var data = RES.getRes("chunli_json");
        // var mcFactory = new egret.MovieClipDataFactory(data,png);
        // var kongmingMC = new egret.MovieClip(mcFactory.generateMovieClipData());
        // this.addChild(kongmingMC);
        // kongmingMC.gotoAndPlay(0,999999);
        var movieFactory = new egret.MovieClipDataFactory(data, png);
        this.movie = new egret.MovieClip(movieFactory.generateMovieClipData());
        this.addChild(this.movie);
        this.movie.gotoAndPlay(0, 5);
    };
    return MovieClip;
}(DisplayObjectContainer));
__reflect(MovieClip.prototype, "MovieClip");
