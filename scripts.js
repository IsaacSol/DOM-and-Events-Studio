// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function(){
    //Code goes here

    //Part of Step 5
    const upButton = document.getElementById("Up");
    const downButton = document.getElementById("Down");
    const rightButton = document.getElementById("Right");
    const leftButton = document.getElementById("Left");
    const rocket = document.getElementById("rocket");
    rocket.style.left = "0px";
    let yPos = 0;
    let xPos = 0;

    const takeoffButton = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    
    //Step 2
    takeoffButton.addEventListener("click", function(){
        let isReady = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(isReady){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            yPos = 10;
            spaceShuttleHeight.innerHTML = 10000;
            rocket.style.bottom = `${yPos}px`;
        }

    });

    //step 3
    const landButton = document.getElementById("landing")
    landButton.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed";
        shuttleBackground.style.backgroundColor = "green";
        yPos = 0;
        xPos = 0;
        spaceShuttleHeight.innerHTML = 0;
        rocket.style.bottom = `${yPos}px`;
        rocket.style.left = `0px`;
    })

    //step 4 
    const missionAbortButton = document.getElementById("missionAbort")
    missionAbortButton.addEventListener("click", function(){
       let shouldAbort = window.confirm("Confirm that you want to abort the mission."); 
       if (shouldAbort) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            yPos = 0;
            xPos = 0;
            spaceShuttleHeight.innerHTML = 0;
            rocket.style.bottom = `${yPos}px`;
            rocket.style.left = `0px`;
       }
    });

    //step 5
    upButton.addEventListener("click", function(){
        if (yPos < shuttleBackground.clientHeight - 60) {
            yPos += 10;
            spaceShuttleHeight.innerHTML = yPos * 1000;
            rocket.style.bottom = `${yPos}px`;
        }
    });
    downButton.addEventListener("click", function(){
        if (yPos > 0) {
            yPos += -10;
            spaceShuttleHeight.innerHTML = yPos * 1000;
            rocket.style.bottom = `${yPos}px`;
        }
    });
    rightButton.addEventListener("click", function(){
        if (xPos >= -10) {
            xPos += -10;
            rocket.style.left = `${xPos}px`;
            console.log(rocket.style.left);
        }
    });
    leftButton.addEventListener("click", function(){
        console.log(shuttleBackground.clientWidth)
        if (xPos < shuttleBackground.clientWidth - 55) {
            xPos += 10;
            rocket.style.left = `${xPos}px`;
        }
        if (xPos > shuttleBackground.clientWidth - 55) {
            xPos = shuttleBackground.clientWidth - 55;
            rocket.style.left = `${xPos}px`;
        }
        
    });



    document.addEventListener('keyup', event => {
        if (event.code === 'Up') {
            
          console.log('Up pressed')
        }
    })
});