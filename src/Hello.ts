/**
 * Created by Administrator on 2018/2/28.
 */
class Hello extends egret.DisplayObjectContainer {
    private loadingView: LoadingUI;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        console.log("hello baijianye");
    }


}