// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    let status = document.getElementById('flightStatus');
    let backgroundColor = document.getElementById('shuttleBackground');
    let shuttleHeight = document.getElementById('spaceShuttleHeight')
    debugger

    rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    rocket.style.left = "0px";
    rocket.style.bottom = "0px"

    let takeOff = this.document.getElementById('takeoff');
    takeOff.addEventListener("click", function(){
        result = window.confirm("Confirm that the shuttle is ready for takeoff.")
        if (result){
            status.innerHTML = 'Shutttle in flight';
            backgroundColor.style.background = 'blue';
            shuttleHeight.innerHTML = '10000';
        }
    })

    let landing = document.getElementById("landing");
    landing.addEventListener('click', function(){
        window.alert("The shuttle is landing. Landing gear engaged.");       
        status.innerHTML = 'The shuttle has landed.';
        backgroundColor.style.background = 'green';
        shuttleHeight.innerHTML = '0';
        rocket.style.left = "0px";
        rocket.style.bottom = "0px"
    })

    let abortMission = document.getElementById("missionAbort")
    abortMission.addEventListener("click", function(){
        result = window.confirm("Confirm that you want to abort the mission.");
        if (result){
            debugger
            status.innerHTML = "Mission aborted";
            backgroundColor.style.background = "green";
            shuttleHeight.innerHTML = '0';
            rocket.style.left = "0px";
            rocket.style.bottom = "0px"
        }
    })
    
    
    let upBtn = this.document.getElementById('upBtn');
    upBtn.addEventListener("click", function(){
        move = parseInt(rocket.style.bottom);
        if(move<=40){
            move = move+10+'px';
        rocket.style.bottom = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000;
        console.log(move)
        }else{
            alert("Rocket cannot move further")
        }
        
    })
    let downBtn = this.document.getElementById('downBtn');
    downBtn.addEventListener("click", function(){
        move = parseInt(rocket.style.bottom);
        if(move>-260){
            move = move - 10+'px';
        rocket.style.bottom = move;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
        } else{
            alert("Rocket cannot move further.")
        }
        
    })
    let rightBtn = this.document.getElementById('rightBtn');
    rightBtn.addEventListener("click", function(){
        move = parseInt(rocket.style.left)
        if(move < 300){
            move = move +10+'px';
            rocket.style.left = move;
            console.log(move)
        }else{
            alert("Rocket cannot move further.")
        }
        
    })
    let leftBtn = this.document.getElementById('leftBtn');
    leftBtn.addEventListener("click", function(){
        move = parseInt(rocket.style.left)
        if(move > -300){
            move = move - 10+'px';
            rocket.style.left = move;
            console.log(move)
        } else{
            alert("Rocket cannot move further.")
        }
    })
    


}

window.onload = init;