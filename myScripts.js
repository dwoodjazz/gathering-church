const memberArray = [
    "Kristin Wood", 
    "Douglas 'Douggy Jay' Wood",
    "AJ Anderson",
    "Michael Murray",
    "Sarah Murray",
    "Joanne Zyph",
    "Dan Zyph",
    "Ken Osso",
    "Kim Osso",
    "Megan Ballard",
    "Jaden Ballard",
    "Erika Anderson",
    "Henry Anderson"
];

let nameFloat=document.getElementByID("members");
nameFloat.innerHTML="WhoopsieDaisie";

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
    ovrly1.classList.replace('hidden','visible');
    ovrly2.classList.replace('visible','hidden');
    ovrly3.classList.replace('visible','hidden');
}

function whatWeDo(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('notOpaque','opaque');
    mainDiv.classList.replace('notOpaque','opaque');
    ovrly1.classList.replace('visible','hidden');
    ovrly2.classList.replace('hidden','visible');
    ovrly3.classList.replace('visible','hidden');
}

function howToConnect(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('notOpaque','opaque');
    mainDiv.classList.replace('notOpaque','opaque');
    ovrly1.classList.replace('visible','hidden');
    ovrly2.classList.replace('visible','hidden');
    ovrly3.classList.replace('hidden','visible');
}

function clearOverlays(){
    ovrly3=document.getElementById('connectOverlay')
    ovrly2=document.getElementById('whatWeDoOverlay')
    ovrly1=document.getElementById('whoWeAreOverlay');
    ovrly1.classList.replace('visible','hidden');
    ovrly2.classList.replace('visible','hidden');
    ovrly3.classList.replace('visible','hidden');
    hero=document.getElementById('hero-div');
    mainDiv=document.getElementById('main-div');
    hero.classList.replace('opaque','notOpaque');
    mainDiv.classList.replace('opaque','notOpaque');
}