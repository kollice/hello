/**
 * Created by Administrator on 2018/3/19.
 */
class FontTest extends DisplayObjectContainer {
    public  constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.add,this);
    }

    private add() {
        RES.addEventListener(ResourceEvent.CONFIG_COMPLETE,this.conf,this);
        RES.loadConfig("resource/default.res.json","resource/");
    }

    private conf() {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE,this.group,this);
        RES.loadGroup("preload");
    }

    private group() {
        let text = new egret.BitmapText();
        text.text = "Hello,BaiJianYe!";
        let font : egret.BitmapFont;
        font = RES.getRes("font");
        text.font = font;
        text.width = 500;
        this.addChild(text);
    }
}