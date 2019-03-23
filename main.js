
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



const tronBuilder = () => {
    let domString = '';
        domString += `<div class="jumbotron">`;
        domString +=    `<h1 class="display-4">Welcome to Hoggy Hoggy Warts!</h1>`;
        domString +=    `<p class="lead">Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>`;
        domString +=    `<hr class="my-4">`;
        domString +=    `<p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog.</p>`;
        domString +=    `<a class="btn btn-primary btn-lg" id="sort-button" href="#" role="button">Let's Start Sorting!</a>`;
        domString += `</div>`;

        printToDom("jumbotron", domString);
    };

const buildForm = () => {
    let domString = '';
        domString += `<form>`;
        domString +=    `<div class="form-group">`;
        domString +=        `<h3>Enter first year's name</h3>`;
        domString +=        `<label for="exampleInputName1">Student</label>`;
        domString +=        `<input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Neville Longbottom">`;
        domString +=    `</div>`;
        domString +=    `<button type="submit" class="btn btn-primary">Sort!</button>`;
        domString +=  `</form>`;

        printToDom("sort-form", domString);
    };
 

const buttonEvents = () => {
    document.getElementById("sort-button").addEventListener("click", buildForm);

};

const init = () => {
    
    tronBuilder();
    buttonEvents();
   

};

 init();