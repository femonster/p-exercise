var c = document.getElementById('canvas');
var ctx = c.getContext("2d");
c.width = document.body.offsetWidth;
c.height= document.body.offsetHeight;
var w = c.width;
var h = c.height;
var scaleNumAll=1;
//烟雾粒子
var particleCount = 80;
var maxVelocity=1;
var particles=[];
var rectW = 400,rectH = 350;

//动画进程
var progress = -10; 
var ref;

// 雪碧图，光环，奶油，雾气，汁水
var sources = {
	iceStar:"./img/iceStar_1.png",
	halo:"./img/weirao.png",
	butter:"./img/ice_top.png",
	mist:"./img/smoke_cute.png",
	juice:"./img/small_ice.png",
    eyes_white:"./img/eyes_white.png",
    eye:"./img/eye_left.png"

}

// 图片
var images = {};

// 加载图片
function loadImg(source,img,fn) {
	var loadedImages = 0;
    var numImages = 0;
    for (var src in source) {
        numImages++;
    }
    for (var src in source) {
        img[src] = new Image();
        img[src].onload = function() {
            if (++loadedImages >= numImages) {
                fn();
            }
        };
        img[src].src = source[src];
    }
}

var imgLoc = {
	planet:{
        sx:623,
        sy:657,
		sw:330,
		sh:320,
        x:-330/2,
        y:-320/2
	},
    iceCream:{
        sx:17,
        sy:686,
        sw:354,
        sh:290,
        x:-330/2,
        y:-320/2-30
    },
    butter:{
        sx:0,
        sy:0,
        sw:205,
        sh:259,
        x:-330/2+150,
        y:-320/2-30
    },
    hat:{
        sx:192,
        sy:457,
        sw:187,
        sh:195,
        x:-330/2+232,
        y:-320/2-115
    },
    han:{
        sx:126,
        sy:107,
        sw:162,
        sh:170,
        x:-330/2+258,
        y:-320/2-115
    },
    orange:{
        sx:852,
        sy:230,
        sw:120,
        sh:120,
        x:-330/2,
        y:-320/2-40 
    },
    smIce:{
        sx:720,
        sy:5,
        sw:124,
        sh:116,
        x:-330/2+55,
        y:-320/2+25  
    },
    eyes_white:{
        sx:0,
        sy:0,
        sw:70,
        sh:68,
        x:-330/2+250,
        y:-320/2-10  
    },
    eyes_black:{
        sx:0,
        sy:0,
        sw:70,
        sh:68,
        x:-330/2+255,
        y:-320/2-10  
    },
    eye:{
        sw:34,
        sh:36
    },
    straw:{
        sx:32,
        sy:461,
        sw:76,
        sh:119,
        x:-330/2+70,
        y:-320/2-80  
    },
    halo:{
        sx:0,
        sy:0,
        sw:481,
        sh:192,
        x:-330/2-95,
        y:-320/2+115  
    },
    star:{
        sx:510,
        sy:170,
        sw:229,
        sh:213,
        x:-330/2+55,
        y:-320/2-15  
    },
    juice:{
        sx:0,
        sy:0,
        sw:45,
        sh:89,
        x:-330/2+30,
        y:-320/2-40
    }
}
// small Planet
function smallPlan(x,y,r,color,alpha) {
    ctx.beginPath();
    ctx.fillStyle=color;
    ctx.arc(x,y,r,0,Math.PI*2,true);
    ctx.fill();
}


// 执行
function init() {
	loadImg(sources,images,function() {
        for (var i = 0; i < particleCount; ++i) {
            var particle = new Particle();
            // 随机位置
            particle.setPosition(generateRandom(0, rectW), generateRandom(0, rectH));
            // 设置随机速度
            particle.setVelocity(generateRandom(0, 0.5), generateRandom(-maxVelocity, maxVelocity));
            particles.push(particle);
        }
        particles.forEach(function(particle) {
            particle.setImage(images.mist);
        });
        drawImg();
    });
}


// 绘图
function drawImg(){
	ctx.clearRect(0,0,w,h);
    progress++;

    // 控制烟雾
    ctx.save();
    ctx.translate(w/2-280,h/2-320);
    
    if (progress>=36&&progress<280) {
        ctx.globalAlpha = Math.abs(quartEaseIn(progress,0,0.3,82));
    }else{
        ctx.globalAlpha=0;
    }
    if (progress>=70&&progress<280) {
        update();
    }
    if (progress<280) {
        draw_smoke();
    }
    ctx.restore();
   
    ctx.save();
    ctx.translate(w/2,h/2);
    ctx.scale(scaleNumAll,scaleNumAll); 
	drawplanet.draw();
    drawIceCream.draw();
    drawStraw.draw();
    drawOrange.draw();
    drawJuice.draw();
    drawSmIce.draw();
    drawStar.draw();
    drawButter.draw();
    
    smPlan1.draw();
    smPlan2.draw();
    smPlan3.draw();

    drawHat.draw();
    drawEyes.draw();
    drawHan.draw();
    drawHalo.draw();
    ctx.restore();
    if (progress>=280) {
        scaleNumAll=quartEaseIn(progress,1,-1,300);
    }
    if (scaleNumAll<0) {
        scaleNumAll=0;
    }
    ref = requestAnimationFrame(drawImg);
    if (progress>300) {
        window.cancelAnimationFrame(ref);
        console.log("over");
    }
}		

// 星球
var drawplanet={
	yh:0,
    yhs:0.2,
    scaleNum:0.1,
    alpha:0,
	draw: function() {
        var self=this;
        var opath=imgLoc.planet;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        ctx.scale(self.scaleNum,self.scaleNum);
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=28) {
            self.alpha=1;
        }
        if (progress<=64) {
            self.scaleNum=elasticEaseInOut(progress,0,1,64);
        }
    }
}

// 冰激凌（大）
var drawIceCream={
    yh:0,
    yhs:0.2,
    scaleNum:0.1,
    scaleself:1,
    sselfs:0.05,
    scaleIce:1,
    ssIces:0.0015,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.iceCream;
        ctx.save();
        ctx.translate(0,self.yh);
        if (progress<=64) {
            ctx.globalAlpha=self.alpha;
            ctx.scale(self.scaleNum,self.scaleNum);
            ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);

        }else{
            ctx.translate(0,-opath.sh/2-80);
            ctx.scale(1,self.scaleIce);
            ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y+opath.sh/2+80,opath.sw,opath.sh);

        }
        ctx.restore();
        self.yh+=self.yhs;
        self.scaleself+=self.sselfs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=28) {
            self.alpha=1;
        }
        if (progress<=64) {
            self.scaleNum=elasticEaseInOut(progress,0,1,64);
        }
        else{
            self.scaleIce+=self.ssIces;
            if (self.scaleIce>=1.05||self.scaleIce<1) {
                    self.ssIces=-self.ssIces;
            }
        }

    }
}

// 奶油
var drawButter={
    yh:0,
    yhs:0.2,
    scaleNum:0.1,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.butter;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        ctx.scale(self.scaleNum,self.scaleNum);
        ctx.drawImage(images.butter,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=32) {
            self.alpha=1;
        }
        if (progress<=64) {
            self.scaleNum=elasticEaseInOut(progress,0,1,64);
        }
    }
}

// 橘子
var drawOrange={
    yh:0,
    yhs:0.2,
    alpha:0,
    scaleNum:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.orange;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.scale(self.scaleNum,self.scaleNum);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=32) {
            self.alpha = 1;
        }
        if (progress>=32&&progress<=64) {
            self.scaleNum = elasticEaseInOut(progress,0,1,72);   
        }
    }
}

// 冰激凌（小）
var drawSmIce={
    yh:0,
    yhs:0.2,
    scaleNum:0.1,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.smIce;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        ctx.scale(self.scaleNum,self.scaleNum);
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=32) {
            self.alpha=1;
        }
        if (progress<=64) {
            self.scaleNum=elasticEaseInOut(progress,0,1,64);
            
        }
    }
}

// 吸管
var drawStraw={
    yh:0,
    yhs:0.2,
    alpha:0,
    scaleNum:1,
    draw: function() {
        var self=this;
        var opath=imgLoc.straw;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.scale(self.scaleNum,self.scaleNum);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=50) {
            self.alpha = 1;
        }
        if (progress>=40&&progress<=72) {
            self.scaleNum=elasticEaseInOut(progress,0,1,80);
        }
    }
}

// 帽子
var drawHat={
    ty:-40,
    tx:40,
    yh:0,
    yhs:0.2,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.hat;
        ctx.save();
        if (progress>=32&&progress<=48){
            ctx.translate(self.tx,self.ty);
        }else{
            ctx.translate(0,self.yh);
        }
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=32) {
            self.alpha = 1;
        }
        if (progress>=32&&progress<=48) {  
            if (self.tx>=0&&self.ty<=0) {
                self.tx -= 5;
                self.ty += 5;
            }
        }
    }
}

// 眼睛
var drawEyes={
    yh:0,
    yhs:0.2,
    alpha:0,
    rotatenum:0,
    ros:-0.4,
    alphaclose:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.eye;
        var opath2=imgLoc.eyes_white;
        ctx.translate(0,self.yh);
        ctx.save();
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.eyes_white,opath2.sx,opath2.sy,opath2.sw,opath2.sh,opath2.x,opath2.y,opath2.sw,opath2.sh);
        ctx.restore();

        ctx.save();
        ctx.translate(120,-130);
        ctx.globalAlpha = self.alpha;
        ctx.rotate(self.rotatenum*Math.PI/180);
        ctx.drawImage(images.eye,0,0,opath.sw,opath.sh,-35,-35,opath.sw,opath.sh);
        ctx.restore();

        ctx.save();
        ctx.translate(150,-110);
        ctx.globalAlpha = self.alpha;
        ctx.rotate(self.rotatenum*Math.PI/180);
        ctx.drawImage(images.eye,0,0,opath.sw,opath.sh,-35,-35,opath.sw,opath.sh);
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = self.alphaclose;
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.moveTo(110,-130);
        ctx.lineTo(90,-150);
        ctx.stroke();
        ctx.restore();

        ctx.save();
        ctx.globalAlpha = self.alphaclose;
        ctx.beginPath();
        ctx.lineWidth = 5;
        ctx.lineCap = "round";
        ctx.moveTo(120,-125);
        ctx.lineTo(145,-115);
        ctx.stroke();
        ctx.restore();

        self.yh+=self.yhs;
        self.rotatenum+=self.ros;

        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }

        if (self.rotatenum>=0||self.rotatenum<-15) {
            self.ros = -self.ros;
        }

        if (progress>=64) {
            self.alpha = 1;
        }
        if (progress>=80&&progress<=88) {
            self.alpha = 0;
            self.alphaclose =1;
        }
        if (progress>88&&progress<=96) {
            self.alpha = 1;
            self.alphaclose =0;
        }
        if (progress>96&&progress<=104) {
            self.alpha = 0;
            self.alphaclose =1;
        }
        if (progress>104) {
            self.alphaclose =0;
        }
    }
}

// 汗水
var drawHan={
    yh:0,
    yhs:-0.2,
    xh:0,
    xhs:0.2,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.han;
        ctx.save();
        ctx.translate(self.xh,self.yh);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        self.xh+=self.xhs;
        if (self.yh<-14||self.yh>0) {
            self.yhs = -self.yhs;
        }
        if (self.xh>14||self.xh<0) {
            self.xhs = -self.xhs;
        }
        if (progress>=64) {
            self.alpha = 1;
        }
    }
}

//小星星
var drawStar={
    yh:0,
    yhs:0.2,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.star;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.iceStar,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=48&&progress<=64) {
            self.alpha=Math.abs(cubicEaseInOut(progress,0,1,64));
        }
    } 
}

// 光环
var drawHalo={
    yh:0,
    yhs:0.2,
    alpha:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.halo;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.halo,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=64) {
            self.alpha = Math.abs(quartEaseIn(progress,0,1,100));;
        }
    }
}

// TODO 汁水 (有待改进)
var drawJuice={
    yh:0,
    yhs:0.2,
    alpha:0,
    scaleNum:0,
    draw: function() {
        var self=this;
        var opath=imgLoc.juice;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha = self.alpha;
        ctx.drawImage(images.juice,opath.sx,opath.sy,opath.sw,opath.sh,opath.x,opath.y,opath.sw,opath.sh);
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=88) {
            self.alpha = cubicEaseIn(progress,0,1,168);
        }

    }
}

//小星球s

var smPlan1={
    alpha:0,
    yh:0,
    yhs:0.2,
    draw:function() {
        var self=this;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        smallPlan(-330/2-50,-320/2+250,15,"#fdaf00");
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<-6) {
            self.yhs = -self.yhs;
        }
        if (progress>=36&&progress<=64) {
            self.alpha=Math.abs(quartEaseIn(progress,0,1,64));
        }
    }
}

var smPlan2={
    alpha:0,
    yh:0,
    yhs:0.2,
    draw:function() {
        var self=this;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        smallPlan(-330/2+400,-320/2+200,12.5,"#fdaf00");
        smallPlan(-330/2,-320/2+330,10,"rgba(241,104,120,0.4)");
        smallPlan(-330/2-60,-320/2+30,9,"rgba(255,152,197,0.2)");
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>14||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=56&&progress<=78) {
            self.alpha=Math.abs(cubicEaseInOut(progress,0,1,78));
        }
    }
}

var smPlan3={
    alpha:0,
    yh:0,
    yhs:0.4,
    draw:function() {
        var self=this;
        ctx.save();
        ctx.translate(0,self.yh);
        ctx.globalAlpha=self.alpha;
        smallPlan(-330/2-40,-320/2+85,4.5,"#fdaf00");
        smallPlan(-330/2+150,-320/2-100,5,"#fdaf00");
        smallPlan(-330/2+300,-320/2+330,4,"#fdaf00");
        smallPlan(-330/2+370,-320/2+180,6,"#ffef68");
        ctx.restore();
        self.yh+=self.yhs;
        if (self.yh>20||self.yh<0) {
            self.yhs = -self.yhs;
        }
        if (progress>=56&&progress<=72) {
            self.alpha=Math.abs(cubicEaseInOut(progress,0,1,72));
        }
    }
}

// ------TODO 烟雾  -----------------
//-------其实不是烟雾，是寒气·······
//--不知道怎么做···
function Particle() {

    this.x = 0;
    this.y = 0;

    this.xv = 0;
    this.yv = 0;

    this.radius = 20;

    this.draw = function () {
        if (this.image) {               
            ctx.globalAlpha=this.alpha;
            var fillWidth = rectW/2,
                fillHeight= fillWidth - fillWidth*(this.x / rectW *this.y /rectH);

            ctx.drawImage(this.image,0,0,this.imageWidth,this.imageHeight,this.x,this.y,fillWidth,fillHeight);
        }
    };

    this.update = function () {

        this.x += this.xv;
        this.y += this.yv;
        
        if (this.x >= rectW) {
            this.xv = -this.xv;
            this.x = rectW;
        }
        else if(this.x <= 0){
            this.xv = -this.xv;
            this.x = 0;
        }

        if (this.y>=rectH) {
            this.yv = -this.yv;
            this.y = rectH;
        }
        else if(this.y<=0){
            this.yv = -this.yv;
            this.y = 0;
        }

        this.alpha = (1 - Math.abs(rectW * 0.5 - this.x) / rectW) * (0.7 - Math.abs(rectH * 0.5 - this.y) / rectH);
    };

    this.setPosition = function (x,y) {
        this.x = x;
        this.y = y;
    };

    this.setVelocity = function (x,y) {
        this.xv = x;
        this.yv = y;
    };

    this.setImage = function(image) {
        this.imageWidth = image.width;
        this.imageHeight= image.height;
        this.image = image;
    };
}

function generateRandom(min,max) {

    return Math.random() * (max - min) + min;   
}

function draw_smoke() {
    // 绘制所有粒子
    particles.forEach(function(particle) {
        particle.draw();
    });
}
function update() {
    particles.forEach(function(particle) {
        particle.update();
    });
}