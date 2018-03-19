/**
 * Created by Administrator on 2018/3/8.
 */
class MovieClip extends DisplayObjectContainer {
    private movie : egret.MovieClip;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
    }

    private addStage(e:egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigDone,this);
        RES.loadConfig("resource/default.res.json","resource/");
    }

    private onConfigDone(e:RES.ResourceEvent) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupDone,this);
        RES.loadGroup("preload");
    }

    private onGroupDone(e:RES.ResourceEvent) {
        // this.movie = new egret.Bitmap();
        // this.movie.texture = RES.getRes("chunli_json");
        let png = RES.getRes("chunli");
        let data = RES.getRes("chunli_json");
        // var mcFactory = new egret.MovieClipDataFactory(data,png);
        // var kongmingMC = new egret.MovieClip(mcFactory.generateMovieClipData());
        // this.addChild(kongmingMC);
        // kongmingMC.gotoAndPlay(0,999999);




















        let movieFactory = new egret.MovieClipDataFactory(data,png);
        this.movie = new egret.MovieClip(movieFactory.generateMovieClipData());
        this.addChild(this.movie);
        this.movie.gotoAndPlay(0,5);
    }
}
