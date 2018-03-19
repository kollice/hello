import DisplayObjectContainer = egret.DisplayObjectContainer;
class BitmapProp extends DisplayObjectContainer {
    private car : egret.Bitmap;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE , this.addToStage,this);
    }

    private addToStage() {
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE,this.onConfigComplete,this);
        RES.loadConfig("resource/default.res.json","resource/");
    }

    private onConfigComplete() {
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE,this.onGroupComplete,this);
        RES.loadGroup("preload");
    }

    private onGroupComplete(){
        this.car = new egret.Bitmap();
        this.car.texture = RES.getRes("car");
        this.car.x = 50;
        this.car.y = 150;
        let temp = this.car;
        temp.width = temp.height = 150;
        temp.scaleX = temp.scaleY = .6;
        temp.rotation = 45;
        temp.anchorOffsetX = temp.anchorOffsetY = 0.5;
        this.addChild(this.car);
    }
}