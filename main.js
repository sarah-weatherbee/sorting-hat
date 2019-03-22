
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const domBuilder = () => {
    let domString = '';
        domString += `<div class="jumbotron">`;
        domString +=    `<h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>`;
        domString +=    `<p class="lead">Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>`;
        domString +=    `<hr class="my-4">`;
        domString +=    `<p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog.</p>`;
        domString +=    `<a class="btn btn-primary btn-lg" href="#" role="button">Let's Start Sorting!</a>`;
        domString += `</div>`;
   
    printToDom("sorting-hat", domString);
};

const init = () => {
    
    domBuilder();

};

 init();