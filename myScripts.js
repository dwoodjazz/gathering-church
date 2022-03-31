
function logoGathers(){ 
    gatheringimg1=document.getElementById('logo-img1');
    gatheringimg2=document.getElementById('logo-img2');
    gatheringimg3=document.getElementById('logo-img3');

    gatheringimg1.classList.replace('logo-img1-start','logo-img1-gathered');
    gatheringimg2.classList.replace('logo-img2-start','logo-img2-gathered');
    gatheringimg3.classList.replace('logo-img3-start','logo-img2-gathered');
}

function whoWeAre(){
    ovrly3=document.getElementById('connectOverlay');
    ovrly2=document.getElementById('whatWeDoOverlay');
    ovrly1=document.getElementById('whoWeAreOverlay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('notOpaque','opaque');
    mainDiv.classList.replace('notOpaque','opaque');
    ovrly1.classList.replace('noOverlayDisplay','overlayDisplay');
    ovrly2.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly3.classList.replace('overlayDisplay','noOverlayDisplay');
}

function whatWeDo(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('notOpaque','opaque');
    mainDiv.classList.replace('notOpaque','opaque');
    ovrly1.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly2.classList.replace('noOverlayDisplay','overlayDisplay');
    ovrly3.classList.replace('overlayDisplay','noOverlayDisplay');
}

function howToConnect(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('notOpaque','opaque');
    mainDiv.classList.replace('notOpaque','opaque');
    ovrly1.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly2.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly3.classList.replace('noOverlayDisplay','overlayDisplay');
}

function clearOverlays(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    ovrly1.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly2.classList.replace('overlayDisplay','noOverlayDisplay');
    ovrly3.classList.replace('overlayDisplay','noOverlayDisplay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('opaque','notOpaque');
    mainDiv.classList.replace('opaque','notOpaque');
}

function beliefCircle1(){
    circle1=document.getElementById("belief1");
    arrow1=document.getElementById("arrow1div");
    circle1.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 
    arrow1.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 
}
function beliefCircle2(){
    circle2=document.getElementById("belief2");
    arrow2=document.getElementById("arrow2div");
    circle2.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 
    arrow2.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 

}
function beliefCircle3(){
    circle3=document.getElementById("belief3");
    arrow3=document.getElementById("arrow3div");
    circle3.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 
    arrow3.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 

}
function beliefCircle4(){
    circle4=document.getElementById("belief4");
    arrow4=document.getElementById("arrow4div");
    circle4.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 
    arrow4.classList.replace('hiddenAndNoOpacity','visibleAndOpaque'); 

}


function startCircles(){
    beliefCircle1();
    setInterval("beliefCircle2()", 1500);
    setInterval("beliefCircle3()", 2500);
    setInterval("beliefCircle4()", 3500);
}

function nextMonth(){
    month1=document.getElementById("month1Div");
    month2=document.getElementById("month2Div");
    month1.classList.replace("display","noDisplay");
    month2.classList.replace("noDisplay","display");
}
function lastMonth(){
    month1=document.getElementById("month1Div");
    month2=document.getElementById("month2Div");
    month1.classList.replace("noDisplay","display");
    month2.classList.replace("display","noDisplay");
}

