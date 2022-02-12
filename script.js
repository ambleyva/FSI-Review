//get all animal sections
let animals = document.querySelectorAll(".animal")
console.log(animals)

//create dog vote button
let dogVoteBtn = document.createElement("button")
dogVoteBtn.textContent = "Vote for Doggo"

animals[0].append(dogVoteBtn)

//isolate the vote count for the dog in the voting table
let dogVotesCell = document.querySelector("#doggo-votes");

//Now, we're adding this event listener
dogVoteBtn.addEventListener('click', function(e) {
    let dogVotesCount = parseInt(dogVotesCell.textContent);
    dogVotesCount = dogVotesCount + 1;
    dogVotesCell.textContent = dogVotesCount;
});

//create cat vote button 
let catVoteBtn = document.createElement('button')
catVoteBtn.textContent = "Vote for Catto"

animals[1].append(catVoteBtn)

//isolate the vote count got the cat in the voting table
let catVotesCell = document.querySelector('#catto-votes');

//Now, we're adding this event listner
catVoteBtn.addEventListener('click', function(e) {
    let catVotesCount = parseInt(catVotesCell.textContent);
    catVotesCount = catVotesCount + 1;
    catVotesCell.textContent = catVotesCount;
});

//create fish vote button 
let fishVoteBtn = document.createElement('button')
fishVoteBtn.textContent = "Vote for Fish Gold"

animals[2].append(fishVoteBtn)

//isolate the vote count got the cat in the voting table
let fishVotesCell = document.querySelector('#fish Gold-votes');

//Now, we're adding an event listener 
fishVoteBtn.addEventListener('click', function(e) {
    let fishVotesCount = parseInt(fishVotesCell.textContent);
    fishVotesCount = fishVotesCount + 1;
    fishVotesCell.textContent = fishVotesCount;
});
