/**
 * Created by Administrator on 2018/3/20.
 */
class SoundTest extends DisplayObjectContainer {
    private sound : egret.Sound;
    private soundChannel : egret.SoundChannel;
    private position: number = 0;
    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.add,this);
    }

    private add() {
        RES.addEventListener(ResourceEvent.GROUP_COMPLETE,this.done,this);
        RES.loadConfig("resource/default.res.json","resource/");
        RES.loadGroup("preload");
    }



    private done() {
        this.sound = new egret.Sound();
        this.sound.addEventListener(egret.Event.COMPLETE,this.load,this);
        this.sound.load("resource/assets/sound_go.mp3");


    }

    private load() {
        // this.sound.play();
        this.playButton();
        this.pauseButton();
        this.repeatButton();
    }

    private playButton() {
        var play = new egret.Sprite();
        play.graphics.beginFill(0x00FFFF);
        play.graphics.drawRect(0,0,100,50);
        play.graphics.endFill();
        play.y = 50;
        play.touchEnabled = true;
        play.addEventListener(egret.TouchEvent.TOUCH_TAP,this.play,this);
        this.addChild(play);

    }

    private pauseButton() {
        var pause = new egret.Sprite();
        pause.graphics.beginFill(0xFF00FF);
        pause.graphics.drawRect(0,0,100,50);
        pause.graphics.endFill();
        pause.y = 150;
        pause.touchEnabled = true;
        pause.addEventListener(egret.TouchEvent.TOUCH_TAP,this.pause,this);
        this.addChild(pause);
    }

    private repeatButton() {
        var repeat = new egret.Sprite();
        repeat.graphics.beginFill(0xFFFF00);
        repeat.graphics.drawRect(0,0,100,50);
        repeat.graphics.endFill();
        repeat.y = 250;
        repeat.touchEnabled = true;
        repeat.addEventListener(egret.TouchEvent.TOUCH_TAP,this.repeat,this);
        this.addChild(repeat);
    }

    private play() {
        console.log("play");
        console.log(this.position);
        this.soundChannel = this.sound.play(0.6,1);
    }

    private pause() {
        console.log("pause");

        this.position = this.soundChannel.position;
        console.log(this.position);
        this.soundChannel.stop();

    }

    private repeat() {
        console.log("repeat");
        console.log(this.position);
        this.soundChannel = this.sound.play(this.soundChannel.position);
    }
}