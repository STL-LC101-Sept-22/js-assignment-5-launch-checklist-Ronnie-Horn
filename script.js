// Write your JavaScript code here!

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch() 
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet from the list of planets and add that information to your destination.
       let selectedPlanet = pickPlanet(listedPlanets)
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
   if(selectedPlanet.name === "Tatooine"){
    alert("Watch out for Jabba the Hutt and his gang!!!")
   }
    })

        let list = document.getElementById("faultyItems");
        list.style.visibility = "hidden";
        let form = document.querySelector("form");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            let pilotInput = document.querySelector("input[name=pilotName]");
            let pilot = pilotInput.value;
     
            let copilotInput = document.querySelector("input[name=copilotName]");
            let copilot = copilotInput.value;
     
            let fuelInput = document.querySelector("input[name=fuelLevel]");
            let fuelLevel = fuelInput.value;
     
            let cargoInput = document.querySelector("input[name=cargoMass]");
            let cargoLevel = cargoInput.value;
            // Make sure to call your formSubmission() function at the appropriate time in your script.js file!
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        });    
    
   
});



// Functions available in scriptHelper.js are:
// function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) 
// function validateInput(testInput)
// function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) 
// async function myFetch()
// function pickPlanet(planets)

// Requirements
// Create a Launch Checklist Form for astronauts to fill out in preparation for launch. The form should do the following:

// Use preventDefault() to prevent a request from being sent out and the page reloading.
// Validate the user-submitted data to ensure the following:
// The user entered something for every field.
// The user entered text for names and numbers for fuel and cargo levels.
// With validation, update a list of what is currently ready or not ready for the shuttle launch.
// Indicate what is good or bad about the shuttle and whether it is ready for launch by using the DOM to update the CSS.
// Fetch some planetary JSON to update the mission destination with vital facts and figures about where the shuttle is headed.