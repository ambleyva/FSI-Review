//get all animal sections
let animals = document.querySelectorAll(".animal")
console.log(animals)

//create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"

animals[0].append(dogVoteBtn)


//create cat vote button 
let catVoteBtn = document.createElement('button')
catVoteBtn.textContent = "Vote for Catto"

animals[1].append(catVoteBtn)

//create Fish vote button
let fishVoteBtn = document.createElement('button')
fishVoteBtn.textcontent = "Vote for Fish Gold"

animals[2].append(fishVoteBtn)


