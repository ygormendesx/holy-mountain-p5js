/* Made with p5js by Ygor Mendes. 
license: CC BY-NC-ND 4.0
@playman, September 2022 */

const rd_fx = (max,min) =>  fxrand()*(max-min)+min;
const rd_fxI = (max,min) => Math.floor(rd_fx(max,min));
const rd_fxArr = (arr) =>  arr[rd_fxI(0,arr.length)];

let cycle = 1000;

let mountain1 = [];
let mountain2 = [];
let mountain3 = [];
let mountain4 = [];
let mountain5 = [];
let mountain6 = [];
let mountain7 = [];
let mountain8 = [];

let formationMountain;
let fogFeature = false;
let cloudsFeature = false;
let cometFeature = false;
let moonFeature = false;

const mountainCount = rd_fx(0,100);
let topRound = rd_fx(-5,-10);
let topPointed = rd_fx(-1,0.5);
let topSquad = rd_fx(6,8);
let curveTopMountain;
const curveM = rd_fx(0,100);
if (curveM <= 40) {
    curveTopMountain = topRound;
} else if (curveM > 40 && curveM < 80) {
    curveTopMountain = topPointed;
} else {
    curveTopMountain = topSquad;
}

const heightMountain = rd_fx(0,100);
let factorMountainHeight;
if (heightMountain <= 70) {
    factorMountainHeight = rd_fx(0.8, 1.5);
} else {
    factorMountainHeight = rd_fx(1.5, 3);
}

opacityFog = 120;

if (mountainCount > 60 && mountainCount < 80) {
    opacityFog = rd_fx(40,80);
} else {
    opacityFog = rd_fx(15,40)
}

let heaven = [];
let comet = [];
let moon = [];
let aurora = [];
let fog = [];
let cloud = [];

const element = rd_fx(0,100);

const showComet = rd_fx(0,100);
const Xcomet = rd_fx(50,400); 
const Ycomet = rd_fx(50,100);
const rotateComet = rd_fx(-0.1,0.2);
const sizeComet = rd_fx(0.3,0.7);
let tailComet = rd_fx(27, rd_fx(30,35));

const showMoon = rd_fx(0,100);
const xMoon = rd_fx(40,520); 
const yMoon = rd_fx(50,200);
const sizeMoon = rd_fx(0.2,0.55);

let shadowMountain1;
const xdcMountain1 = rd_fx(0,100);
if (xdcMountain1 < 50 ) {
    if (showComet > 30) {
        if (showMoon > 90) {
            if (xMoon < 180) {
                shadowMountain1 = 10
            } else if (xMoon > 180) {
                shadowMountain1 = -3
            } else {
                shadowMountain1 = -3
            }
        }
    } else if (showComet < 30) {
        if ( Xcomet > 200 ) {
            shadowMountain1 = -3
        } else {
            shadowMountain1 = 10
        }   
    }
} else if (xdcMountain1 > 50 ) {
    if (showComet > 30) {
        if (showMoon > 90) {
            if (xMoon < 180) {
                shadowMountain1 = 10
            } else if (xMoon > 180) {
                shadowMountain1 = -3
            } else {
                shadowMountain1 = 10
            }
        }
    } else if (showComet < 30) {
        if ( Xcomet > 200 ) {
            shadowMountain1 = -3
        } else {
            shadowMountain1 = 10
        }   
    }
}

let shadowMountain2;
const xdcMountain2 = rd_fx(0,100);
if (xdcMountain2 < 50) {
    if (showComet > 30) {
        if (showMoon > 90) {
            if (xMoon < 180) {
                shadowMountain2 = 8.7
            } else if (xMoon > 180) {
                shadowMountain2 = -8.7
            } else {
                shadowMountain2 = -8.7
            }
        }
    } else if (showComet < 30) {
        if ( Xcomet > 200 ) {
            shadowMountain2 = -8.7
        } else {
            shadowMountain2 = 8.7
        }   
    }
} else if (xdcMountain2 > 50|| xMoon < 180){
    if (showComet > 30) {
        if (showMoon > 90) {
            if (xMoon < 180) {
                shadowMountain2 = 8.7
            } else if (xMoon > 180) {
                shadowMountain2 = -10.7
            } else {
                shadowMountain2 = 10.7
            }
        }
    } else if (showComet < 30) {
        if ( Xcomet > 200 ) {
            shadowMountain2 = -10.7
        } else {
            shadowMountain2 = 8.7
        }   
    }
}

let shadowMountain3;
const xdcMountain3 = rd_fx(0,100);
if (xdcMountain3 < 50 || xMoon > 180) {
    shadowMountain3 = -8.7
} else if (xdcMountain3 > 50 || xMoon < 180) {
    shadowMountain3 = 8.7
}

let bgP = [10,10,10];

const arrayColors = [
    [[60,60,60,50],[60,60,60,30], "Black", bgP, [40,40,40,255]],
    [[60,60,60,50],[156,117,33,20], "Black Golden", bgP, [35,35,35,255]],
    [[99,85,97,50],[120,120,120,30], "Gray", bgP, [35,35,35,255]],
    [[91,15,113,50],[125,10,56,30], "Purple", bgP, [35,6,43,255]],
    [[20,23,102,50],[103,12,110,30], "Blue", bgP, [0,0,48,255]],
    [[70,91,97,50],[100,82,125,30], "Greyish Blue", bgP, [0,0,48,255]],
    [[62,18,102,50],[100,82,125,30], "Dark Blue", bgP, [0,0,48,255]],
    [[13,94,20,50],[11,140,94,30], "Dark Green", bgP, [64,30,13,255]],
    [[11,102,76,50],[19,171,128,30], "Teal", bgP, [64,30,13,255]],
    [[11,102,76,50],[125,99,102,30], "Greyish Teal", bgP, [64,30,13,255]],
    [[11,102,100,50],[128,118,75,80], "Earthy Teal", bgP, [64,30,13,255]],
    [[132,54,0,80],[209,99,21,10], "Dark Orange", bgP, [56,23,0,255]],
    [[176,83,37,80],[254,232,110,10], "Yellow Orange", bgP, [0,36,35,255]],
    [[97,76,0,50],[107,50,34,30], "Golden Orange", bgP, [48,23,16,255]],
    [[97,76,0,50],[133,107,64,30], "Golden", bgP, [0,0,20,255]],
    [[97,54,51,50],[110,53,97,30], "Purple Brown", bgP, [41,23,21,255]],
    [[80,7,4,50],[130,0,20,30], "Dark Red", bgP, [61,20,20,255]],
    [[140,55,42,50],[237,59,67,30], "Red", bgP, [68,15,13,255]],
]

const colorChoice = rd_fxArr(arrayColors)
const colorChoiceAurora = colorChoice[1]
const colorChoiceSky = colorChoice[0]
const colorName = colorChoice[2]
const colorBG = colorChoice[3]
const colorChoiceMountain = colorChoice[4]


function setup(){
    canva = createCanvas(800,800)
    background(colorBG);
    noStroke();
    brush();
    pixelDensity(2);
}

function draw(){
    for (let i=0; i<cycle; i++){
        if (frameCount >= 30 && mountainCount <= 50) {
            mountain1[i].update();
            mountain1[i].draw(colorChoiceMountain,shadowMountain1);
        } else if (frameCount >= 30 && mountainCount > 50 &&  mountainCount <= 65) {
            mountain2[i].update();
            mountain2[i].draw(colorChoiceMountain,shadowMountain2);
        } else if (frameCount >= 30 && mountainCount > 65 &&  mountainCount <= 78) {
            mountain3[i].update();
            mountain3[i].draw(colorChoiceMountain,shadowMountain3);
        } else if (frameCount >= 30 && mountainCount > 78 &&  mountainCount <= 88) {
            mountain4[i].update();
            mountain4[i].draw(colorChoiceMountain);
        } else if (frameCount >= 30 && mountainCount > 88 &&  mountainCount <= 94) {
            mountain5[i].update();
            mountain5[i].draw(colorChoiceMountain);
        } else if (frameCount >= 30 && mountainCount > 94 &&  mountainCount <= 98) {
            mountain6[i].update();
            mountain6[i].draw(colorChoiceMountain);
            mountain7[i].update();
            mountain7[i].draw(colorChoiceMountain);
        } else if (frameCount >= 30 && mountainCount > 98 &&  mountainCount <= 100) {
            mountain8[i].update();
            mountain8[i].draw(colorChoiceMountain);
        }

        if (frameCount <= 20) {
            heaven[i].update();
            heaven[i].draw(colorChoiceSky);
        }

        if (frameCount <= 5){
            fill(30, 2);
            rect(0,0,800,800);
        }

        if (frameCount >= 20 && frameCount <= tailComet && showComet < 30 && (Ycomet > yMoon-40 || Ycomet < yMoon+40)) {
            comet[i].update();
            comet[i].draw(Xcomet,Ycomet,rotateComet,sizeComet);
        }

        if (frameCount <= rd_fx(4,6)  && showMoon > 90 ) {
            moon[i].update();
            moon[i].draw(xMoon,yMoon,sizeMoon);
        }

        if (frameCount <= 20) {
            aurora[i].update();
            aurora[i].draw(colorChoiceAurora);
        }

        if (frameCount >= 290 && element <= 50 && mountainCount < 97 || mountainCount > 50 && mountainCount < 65) {
            fog[i].update();
            fog[i].draw(opacityFog);
        } else if (frameCount > 50 && element > 80 && showComet > 30 &&(mountainCount < 50 || mountainCount > 65)) {
            cloud[i].update();
            cloud[i].draw();
        }
    }
    
    star2();
    star();
    border();
    keyTyped();

    if (frameCount > 600) {
        noLoop();
        fxpreview();
    }
}

    function border() {
        push();
        strokeWeight(15);
        stroke('#E0E0E0');
        noFill();
        rect(0, 0, width, height);
        pop();
    }

    function star() {
        if (frameCount <= 30) {
            push();
            let qpT = rd_fx(4000,7000);
            stroke(150);
            fill(255);
            strokeWeight(0.7);
            for (let i = 0; i < qpT; i++ ) {
                point(rd_fx(0,width),  rd_fx(0,height));
            }
            pop();
        }
    }
   
    function star2() {
        if (frameCount <= 30) {
            push();
            translate(rd_fx(0,width), rd_fx(0,height/2));
            starForm(rd_fx(0,200),rd_fx(0,10));
            pop();
        }
    }

    function starForm(s1,s2) {
        push();
        scale(float(rd_fx(1,4)));
        rotate(90);
        stroke(255);
        point(s1,s1);
        point(s2,s1);
        point(s2,s2);
        point(s1,s2);
        pop();
    }

function brush() { 
    for (let i=0; i<cycle; i++){
        mountain1[i] = new Mountain1(rd_fx(0,width),rd_fx(height/float(rd_fx(rd_fx(0.1,0.9), float(rd_fx(0.2,2)))),height/factorMountainHeight), curveTopMountain);

        mountain2[i] = new Mountain2(rd_fx(width/rd_fx(2,3),width/rd_fx(1.5,1.7)),rd_fx(height, height/rd_fx(0.7,2.3)), rd_fx(rd_fx(1,70),4));

        mountain3[i] = new Mountain3(rd_fx(0,width-rd_fx(0,20)),rd_fx(height/rd_fx(rd_fx(0.1,0.15), rd_fx(0.2,3)),height/rd_fx(0.1,0.7)), rd_fx(-200,-150)+rd_fx(4,50));

        mountain4[i] = new Mountain4(rd_fx(0,width-rd_fx(0,20)),rd_fx(height/rd_fx(rd_fx(0.1,0.15), rd_fx(0.2,2)),height/rd_fx(0.7,1.2)), rd_fx(-200,-150)+rd_fx(4,50));

        mountain5[i] = new Mountain5(rd_fx(0,width-rd_fx(0,20)),rd_fx(height/rd_fx(rd_fx(0.1,0.15), rd_fx(0.2,2)),height/rd_fx(0.7,1.2)), rd_fx(-200,-150)+rd_fx(4,50));

        mountain6[i] = new Mountain6(rd_fx(0,width/rd_fx(2,1.5)-125),rd_fx(height/rd_fx(rd_fx(0.1,0.15), rd_fx(rd_fx(0.2,3.2),2)),height/rd_fx(0.2,0.1)), rd_fx(-200,-150)+rd_fx(4,50));

        mountain7[i] = new Mountain7(rd_fx(width+rd_fx(125,145),width/rd_fx(0.5,1.5)),rd_fx(height/rd_fx(rd_fx(0.1,0.15), rd_fx(rd_fx(0.2,1.5),2)),height/rd_fx(0.2,0.1)), rd_fx(-200,-150)+rd_fx(4,50));

        mountain8[i] = new Mountain8(rd_fx(width/2,width),rd_fx(height/rd_fx(rd_fx(0.1,0.7), rd_fx(0.2,1.5)),height/rd_fx(rd_fx(1.7,3.2),1.2)), rd_fx(-200,-150)+rd_fx(1,7300));

        //CÉU
        heaven[i] = new Heaven(rd_fx(0,width),rd_fx(0,height/float(rd_fx(2.2,3))), rd_fx(50,80)*0.9);


        //COMETA
        comet[i] = new Comet(rd_fx(558,560),rd_fx(130,140), rd_fx(rd_fx(1,4),1)*0.5);

        moon[i] = new Moon(rd_fx(558,560),rd_fx(150,160), rd_fx(rd_fx(1,4),1)*0.5);
        
        //AURORA
        aurora[i] = new Aurora(rd_fx(width/float(rd_fx(1,4.7)),width),rd_fx(-100,height), rd_fx(1,4)*0.7);

        //NÉVOA
        fog[i] = new Fog(rd_fx(0,width),height/float(rd_fx(rd_fx(0.1,0.9), float(rd_fx(0.2,float(rd_fx(2,2.7))))),height/0.8), float(rd_fx(-0.1,0.1))*float(rd_fx(-0.1,0.5)));

        cloud[i] = new Cloud(rd_fx(80,200),rd_fx(rd_fx(-100,300),rd_fx(700,900)), rd_fx(rd_fx(1,2),25)*1.5);
    }
}

class Mountain1 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(1, 1.4))));
        this.x += float(rd_fx(float(rd_fx(rd_fx(-2, -7), 0)), 1));
        this.r -= rd_fx(-0.1,0.9)*3;
    }

    draw(colorShadow,xdcM1) {
        push();
        drawingContext.shadowOffsetX = xdcM1;
        drawingContext.shadowOffsetY = -4;
        drawingContext.shadowBlur = 3;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 50, 200, 0);
        fill(rd_fx(200,220), opacity);
        ellipse(this.x, this.y, this.r * float(rd_fx(4.55,4.57)),75);
        pop();
    }
}

class Mountain2 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(5, float(rd_fx(2, 1.44))));
        this.x += float(rd_fx(float(rd_fx(-3, rd_fx(-2,0))), rd_fx(0.6,1.5)));
        this.r -= rd_fx(-0.7,0.1)*3;
    }

    draw(colorShadow,xdcM2) {
        push();
        drawingContext.shadowOffsetX = xdcM2;
        drawingContext.shadowOffsetY = -10.7;
        drawingContext.shadowBlur = 2;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 3000, 0);
        fill(rd_fx(210,230), opacity);
        ellipse(this.x, this.y, this.r*rd_fx(1.92,1.95) ,15);
        pop();
    }
}

class Mountain3 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(rd_fx(0.5,1), rd_fx(3, 1)));
        this.x += float(rd_fx(rd_fx(-1, 0.7), rd_fx(-0.2,0.9)));
        this.r -= rd_fx(rd_fx(-3,-6),rd_fx(4,12));
    }

    draw(colorShadow,xdcM3) {
        push();
        drawingContext.shadowOffsetX = xdcM3;
        drawingContext.shadowOffsetY = -5.7;
        drawingContext.shadowBlur = 2;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 300, 0);
        fill(rd_fx(210,230), opacity);
        ellipse(this.x, this.y, this.r / float(rd_fx(2.65,2.66)),25);
        pop();
    }
}

class Mountain4 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(2, 0))));
        this.x += float(rd_fx(float(rd_fx(int(rd_fx(-2, 2)), rd_fx(-0.1, 0.1))), rd_fx(-3.8,rd_fx(0.1,3.9))));
        this.r -= rd_fx(-0.7,15.9)*int(rd_fx(-2,9));
    }

    draw(colorShadow) {
        push();
        drawingContext.shadowOffsetX = -4.7;
        drawingContext.shadowOffsetY = -5.9;
        drawingContext.shadowBlur = 2;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 300, 0);
        fill(rd_fx(190,230), opacity);
        rect(this.x, this.y, this.r / float(rd_fx(5.65,5.7)),rd_fx(100,900),rd_fx(5,30));
        pop();
    }
}

class Mountain5 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(2, 0))));
        this.x += float(rd_fx(float(rd_fx(-3, 0.1)), rd_fx(0.6,0.9)));
        this.r -= rd_fx(-10,400.9);
    }

    draw(colorShadow) {
        push();
        drawingContext.shadowOffsetX = 10.7;
        drawingContext.shadowOffsetY = -3.7;
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 300, 0);
        fill(220, opacity);
        ellipse(this.x, this.y, this.r / float(rd_fx(5.65,5.7)),150);
        pop();
    }
}

class Mountain6 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(2, 0))));
        this.x += float(rd_fx(float(rd_fx(int(rd_fx(-2, 2)), rd_fx(-0.1, 0.1))), rd_fx(-0.8,rd_fx(0.1,3.9))));
        this.r -= rd_fx(-12,rd_fx(15,50))*int(rd_fx(1,9));
    }

    draw(colorShadow) {
        push();
        drawingContext.shadowOffsetX = -4.7;
        drawingContext.shadowOffsetY = -5.9;
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 300, 0);
        fill(rd_fx(230,255), opacity);
        rect(this.x, this.y, this.r / float(rd_fx(5.65,5.7)),15.4,5);
        pop();
    }
}

class Mountain7 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(2, 0))));
        this.x += float(rd_fx(float(rd_fx(int(rd_fx(-2, 2)), rd_fx(0.1, 0.1))), rd_fx(-0.8,rd_fx(0.1,3.9))));
        this.r -= rd_fx(-0.7,4.9)*int(rd_fx(1,9));
    }

    draw(colorShadow) {
        push();
        drawingContext.shadowOffsetX = 9.7;
        drawingContext.shadowOffsetY = -9.9;
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 75, 0);
        fill(rd_fx(230,255), opacity);
        rect(this.x, this.y, this.r / float(rd_fx(5.65,5.7)),15.4,5);
        pop();
    }
}

class Mountain8 {
    constructor(x,y,r,rr) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.rr = rr;
        this.startR = r;
    }

    update() {
        this.y += float(rd_fx(1, float(rd_fx(2, 0))));
        this.x += float(rd_fx(float(rd_fx(int(rd_fx(-2, 2)), rd_fx(-0.1, 0.1))), rd_fx(-3.8,rd_fx(0.1,3.9))));
        this.r -= rd_fx(-0.7,25.9)*int(rd_fx(-11,9));
    }

    draw(colorShadow) {
        push();
        drawingContext.shadowOffsetX = 14.7;
        drawingContext.shadowOffsetY = -2.9;
        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = color(colorShadow);
        let opacity = map(this.r, this.startR, 0, 300, 0);
        fill(rd_fx(180,250), opacity);
        rect(this.x, this.y, this.r / rd_fx(150.65,307.7),rd_fx(1,3500*1500),25);
        pop();
    }
}

class Heaven {
    constructor(x2,y2,r2) {
        this.x2 = x2;
        this.y2 = y2;
        this.r2 = r2;
        this.startR2 = r2;
    }

    update() {
        this.y2 += int(rd_fx(1, 4));
        this.x2 += float(rd_fx(-1, 1));
        this.r2 -= rd_fx(-0.5,0.9)*0.8;
    }

    draw(color) {
        push();
        let opacity = map(this.r2, this.startR2, 0, 10, 0);
        fill(color, opacity);
        ellipse(this.x2, this.y2*this.y2, this.r2 * int(rd_fx(30,40)), this.y2);
        pop();
    }
}

class Comet {
    constructor(x4,y4,r4) {
        this.x4 = x4;
        this.y4 = y4;
        this.r4 = r4;
        this.startR4 = r4;
    }

    update() {
        this.y4 -= float(rd_fx(-10, -1));
        this.x4 += float(rd_fx(-55, -1));
        this.r4 -= rd_fx(-0.1,0.5)*0.2;
    }

    draw(x,y,rotateXY, size) {
        push();
        translate(x,y);
        rotate(rotateXY)
        scale(size);
        let opacity = map(this.r4, this.startR4, 0, 70, 50);
        fill(255, opacity);
        circle(this.x4, this.y4, this.r4 * int(rd_fx(1,3)));
        pop();
    }
}

class Moon {
    constructor(x4,y4,r4) {
        this.x4 = x4;
        this.y4 = y4;
        this.r4 = r4;
        this.startR4 = r4;
    }

    update() {
        this.y4 -= float(rd_fx(rd_fx(-1, -1), rd_fx(-1, -1)));
        this.x4 += float(rd_fx(rd_fx(-1, -1), rd_fx(-1, -1)));
        this.r4 -= rd_fx(rd_fx(-5, -1),rd_fx(-5, -1))*rd_fx(4, 14);
    }

    draw(x,y,size) {
        push();
        translate(x,y);
        scale(size);
        let opacity = map(this.r4, this.startR4, 0, 5000, 0);
        fill(255, opacity);
        circle(this.x4, this.y4, this.r4 * int(rd_fx(1,1.1)));
        pop();
    }
}

class Aurora {
    constructor(x5,y5,r5) {
        this.x5 = x5;
        this.y5 = y5;
        this.r5 = r5;
        this.startR4 = r5;
    }

    update() {
        this.y5 -= float(rd_fx(-1, -10));
        this.x5 += float(rd_fx(-1, 60));
        this.r5 -= rd_fx(-0.1,0.7)*0.4;
    }

    draw(color) {
        push();
        //stroke(135,222,152);
        fill(color);
        ellipse(this.y5, this.x5, this.r5 * int(rd_fx(1,15)),this.x5);
        pop();
    }
}

class Fog {
    constructor(x6,y6,r6) {
        this.x6 = x6;
        this.y6 = y6;
        this.r6 = r6;
        this.startR6 = r6;
    }

    update() {
        this.y6 += float(rd_fx(1, float(rd_fx(1, 1.4))));
        this.x6 += float(rd_fx(float(rd_fx(rd_fx(-2, -7), 0)), 1));
        this.r6 -= rd_fx(-0.1,0.9)*3;
    }

    draw(opacityFog) {
        push();
        translate(150,130);
        drawingContext.shadowOffsetX = 20;
        drawingContext.shadowOffsetY = -5;
        drawingContext.shadowBlur = 10000;
        drawingContext.shadowColor = '#FFFFFF';
        fill(255, opacityFog);
        //x,y,posição entre as camadas(não pode deixar muita diferença se não o espaçamento entre as elipses fica grande), tamanho da elipse)
        rect(this.x6-this.r6, this.y6, this.r6 * float(rd_fx(4.55,4.7)),float(rd_fx(0.1,0.19)));
        pop();
    }
}

class Cloud {
    constructor(x3,y3,r3) {
        this.x3 = x3;
        this.y3 = y3;
        this.r3 = r3;
        this.startR3 = r3;
    }

    update() {
        this.y3 += int(rd_fx(1, 5));
        this.x3 += float(rd_fx(-30, float(rd_fx(7, 1))));
        this.r3 -= float(rd_fx(-0.1,0.3))*float(rd_fx(0.1,0.8));
    }

    draw() {
        let a = map(this.r3, this.startR3, -5, rd_fx(0,5), rd_fx(-700,-1500));
        fill(rd_fx(200,255), a);
        circle(this.y3, this.x3, this.r3 * int(rd_fx(1,4)));
    }
}

function keyTyped() {
    if (frameCount > 600) {
        if (key === "s" || key === "S") {
            noLoop();
            saveCanvas("Holy-Mountain", "png");
        }
    }
    
}