import ResourceEvent = RES.ResourceEvent;
class SpriteSheet extends DisplayObjectContainer {
    private bitmap : egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
    }

    private addStage(event: egret.Event) {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE,this.onConfigDone ,this);
        RES.loadConfig("resource/default.res.json","resource/");
    }

    private onConfigDone(event: ResourceEvent) {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE,this.init,this);
        RES.loadGroup("preload");
    }

    private init(event: ResourceEvent) {
        this.bitmap = new egret.Bitmap();
        this.bitmap.texture = RES.getRes("db.oceanbase");
        this.addChild(this.bitmap);
        // this.bitmap.width = this.bitmap.height = 150;
    }
}