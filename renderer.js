// define general variables
musicplayer = document.getElementById("music-player");
var fs = require('fs');
var startbutton = document.getElementById("start-button");
var pausePlay = document.getElementById("player-button");
var voltarget = document.getElementById("volume-target");
var voldisplay = document.getElementById("volume-display");
var trials = document.getElementById("trials");
var count = 0;
pausePlay.addEventListener("click", function() {
  if(musicplayer.paused == true){
      pausePlay.src = "https://cmps-people.ok.ubc.ca/bowenhui/341/2020/project/a8assets/pause.png";
      musicplayer.play();
      voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
  }else{
      pausePlay.src = "https://people.ok.ubc.ca/bowenhui/341/2020/project/a8assets/play.png";
      musicplayer.pause();
      voldisplay.innerHTML = "Music Paused";
  }
});
//musicplayer.play();
function save() {
    fs.writeFile( path.resolve(fileDir, "JStest.csv"), dataLog, (err)=> {
    if (err) alert(err);
    alert("all tasks are done");
  });
  }                // saves data to file
function randomTarget() { 
    const arr = ['Mute', 20, 40, 60, 80, 100];
    var rand = arr[Math.floor(Math.random()*6)];
    return rand; 
 }        // generates random volume to select
function techniqueSpecific() {  }   // function to do technique specific stuff
var timedClick = function()
{
    count = 0;
    //  disables the start button so it can't be clicked twice
    startbutton.onclick = function(){};
    //  update task selection instruction 
    //  start timer 
    var start = performance.now();
    //  watch and see which button is clicked on during the task
    setvol = randomTarget();
    trials.innerHTML = "";
    voltarget.innerHTML = "Set volume: " + setvol;
    img.addEventListener("click", function() {
        if(setvol="Mute"){
            musicplayer.volume = 0;
            voldisplay.innerHTML = "Currently Muted";
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });
    img20.addEventListener("click", function() {
        if(setvol==20){
            musicplayer.volume = setvol/100;
            voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });
    img40.addEventListener("click", function() {
        if(setvol==40){
            musicplayer.volume = setvol/100;
            voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });
    img60.addEventListener("click", function() {
        if(setvol==60){
            musicplayer.volume = setvol/100;
            voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });
    img80.addEventListener("click", function() {
        if(setvol==80){
            musicplayer.volume = setvol/100;
            voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });
    img100.addEventListener("click", function() {
        if(setvol=100){
            musicplayer.volume = setvol/100;
            voldisplay.innerHTML = "Current Volume: "+musicplayer.volume*100;
            count = count + 1;
            trials.innerHTML = "Trials completed: "+count;
            voltarget.innerHTML = "Start Next Trial";
            if(count!=6){
                startbutton.onclick = timedClick;
            }else if(count==6){
                alert("All tasks are done");
            }
        }
    });

    for( var i=0; i<buttons.length; i++ )
    {
        // attach an event listener to each button click
        buttons[i].onclick = function()
        {
            var end = performance.now();
            var total = Math.round(end - start);
            
            // 1. adjust volume
            // 2. call your technique specific function
            // 3. when task selection is completed, do all this:
            // - stop timer
            // - prevent other buttons from being selected
            // - figure out which button was clicked on
            // - log trial data 
            // - update/reset various interface elements
            // - check if maxTrials completed yet 
        }
    }
}
window.onload = function()
{
    startbutton.onclick = timedClick;
    // setup technique specific callback function here
}

var img = document.getElementById("button-0");    
var img20 = document.getElementById("button-1");        
var img40 = document.getElementById("button-2"); 
var img60 = document.getElementById("button-3"); 
var img80 = document.getElementById("button-4"); 
var img100 = document.getElementById("button-5"); 

imgBoundingBox = img.getBoundingClientRect();
imgX = imgBoundingBox.left + (img.width / 2);
imgY = imgBoundingBox.top + (img.height / 2);

img20BoundingBox = img20.getBoundingClientRect();
imgX20 = img20BoundingBox.left + (img20.width / 2);
imgY20 = img20BoundingBox.top + (img20.height / 2);

img40BoundingBox = img40.getBoundingClientRect();
imgX40 = img40BoundingBox.left + (img40.width / 2);
imgY40 = img40BoundingBox.top + (img40.height / 2);

img60BoundingBox = img60.getBoundingClientRect();
imgX60 = img60BoundingBox.left + (img60.width / 2);
imgY60 = img60BoundingBox.top + (img60.height / 2);

img80BoundingBox = img80.getBoundingClientRect();
imgX80 = img80BoundingBox.left + (img80.width / 2);
imgY80 = img80BoundingBox.top + (img80.height / 2);

img100BoundingBox = img100.getBoundingClientRect();
imgX100 = img100BoundingBox.left + (img100.width / 2);
imgY100 = img100BoundingBox.top + (img100.height / 2);

var mouseTrap = function(e)
{
    // get the user's location
    var userX = e.clientX;
    var userY = e.clientY;
    var dif1 = Math.abs(imgX-userX);
    var dif2 = Math.abs(imgY-userY);
    var difX20 = Math.abs(imgX20-userX);
    var difY20 = Math.abs(imgY20-userY);
    var difX40 = Math.abs(imgX40-userX);
    var difY40 = Math.abs(imgY40-userY);
    var difX60 = Math.abs(imgX60-userX);
    var difY60 = Math.abs(imgY60-userY);
    var difX80 = Math.abs(imgX80-userX);
    var difY80 = Math.abs(imgY80-userY);
    var difX100 = Math.abs(imgX100-userX);
    var difY100 = Math.abs(imgY100-userY);
    
    //setting expanding function

    

    if(dif1 < 50 & dif2 < 50){ 
        if(img.width<100 & img.height < 100){
            img.width = img.width + 2;        //(100-dif1)/40+(100-dif2)/40
            img.height = img.height + 2;      //(100-dif1)/40+(100-dif2)/40
        }else{
            img.width = 100;
            img.height = 100;
        }
    }
    else{
        if(img.width!=50 & img.height != 50){
            img.width = img.width - 2;
            img.height = img.height - 2;
        }
        else{
            img.width = 50;
            img.height = 50;
        }
    }

    //20

    if(difX20 < 50 & difY20 < 50){ 
        if(img20.width<100 & img20.height < 100){
            img20.width = img20.width + 2;
            img20.height = img20.height + 2;
        }else{
            img20.width = 100;
            img20.height = 100;
        }
    }
    else{
        if(img20.width!=50 & img20.height != 50){
            img20.width = img20.width - 2;
            img20.height = img20.height - 2;
        }
        else{
            img20.width = 50;
            img20.height = 50;
        }
    }

    //end20

    //40

    if(difX40 < 50 & difY40 < 50){ 
        if(img40.width<100 & img40.height < 100){
            img40.width = img40.width + 2;
            img40.height = img40.height + 2;
        }else{
            img40.width = 100;
            img40.height = 100;
        }
    }
    else{
        if(img40.width!=50 & img40.height != 50){
            img40.width = img40.width - 2;
            img40.height = img40.height - 2;
        }
        else{
            img40.width = 50;
            img40.height = 50;
        }
    }

    //end40

    //60

    if(difX60 < 50 & difY60 < 50){ 
        if(img60.width<100 & img60.height < 100){
            img60.width = img60.width + 2;
            img60.height = img60.height + 2;
        }else{
            img60.width = 100;
            img60.height = 100;
        }
    }
    else{
        if(img60.width!=50 & img60.height != 50){
            img60.width = img60.width - 2;
            img60.height = img60.height - 2;
        }
        else{
            img60.width = 50;
            img60.height = 50;
        }
    }

    //end60
    
    //80

    if(difX80 < 50 & difY80 < 50){ 
        if(img80.width<100 & img80.height < 100){
            img80.width = img80.width + 2;
            img80.height = img80.height + 2;
        }else{
            img80.width = 100;
            img80.height = 100;
        }
    }
    else{
        if(img80.width!=50 & img80.height != 50){
            img80.width = img80.width - 2;
            img80.height = img80.height - 2;
        }
        else{
            img80.width = 50;
            img80.height = 50;
        }
    }

    //end80

    //100

    if(difX100 < 50 & difY100 < 50){ 
        if(img100.width<100 & img100.height < 100){
            img100.width = img100.width + 2;
            img100.height = img100.height + 2;
        }else{
            img100.width = 100;
            img100.height = 100;
        }
    }
    else{
        if(img100.width!=50 & img100.height != 50){
            img100.width = img100.width - 2;
            img100.height = img100.height - 2;
        }
        else{
            img100.width = 50;
            img100.height = 50;
        }
    }

    //end100

    // now let's print out the user's cursor coordinates
    var coords = document.getElementById("location");
    //coords.innerHTML = "You are at: (" + dif1 + "," + dif2 + ")";
}
document.onmousemove = mouseTrap;
function setVolume(vol)
{
  musicPlayer.volume = vol;
}




