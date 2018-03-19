class BitmapAnimation extends egret.DisplayObjectContainer {
    private bitmap: egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }


    private onAddToStage(event: egret.Event) {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    private onConfigComplete(event: RES.ResourceEvent) {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComplete,this);
        RES.loadGroup("preload");
    }


    private onGroupComplete(event : RES.ResourceEvent) {
        this.bitmap = new egret.Bitmap();
        this.bitmap.texture = RES.getRes("car");
        this.addChild(this.bitmap);
        this.animation();
    }

    private animation() {
        let tw = egret.Tween.get(this.bitmap);
        tw.to({x:290,y:0},2000).to({x:290,y:400},2000).call(this.finish,this);
    }

    private finish() {
        console.log("finish");
    }

}