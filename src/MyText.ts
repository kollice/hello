import ResourceConfig = RES.ResourceConfig;
class MyText extends DisplayObjectContainer {
    private pic: egret.Bitmap;
    private text:egret.TextField;
    private shape : egret.Shape;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.addStage,this);
    }

    private addStage() {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE,this.configDone,this);
        RES.loadConfig("resource/default.res.json","resource/");
    }

    private configDone() {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE,this.groupDone,this);
        RES.loadGroup("preload");
    }

    private groupDone() {
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
        this.shape.graphics.drawRect(0,0,700,700);
        this.shape.graphics.endFill();
        this.addChild(this.shape);


        this.addChild(this.pic);
        this.addChild(this.text);
    }
}
