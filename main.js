const students = [];
const houses = ["Ravenclaw", "Hufflepuff", "Gryffindor", "Slytherin"];

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
        domString +=    `<a class="btn btn-primary btn-lg" id="started-button" href="#" role="button">Let's Start Sorting!</a>`;
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
        domString +=    `<button type="submit" class="btn btn-primary" id="sort-button">Sort!</button>`;
        domString +=  `</form>`;

        printToDom("sort-form", domString);
        document.getElementById("sort-button").addEventListener("click", addStudent);
    };
 
const getHouse = () => {
   
   //The gitHouse function will contain an array with 4 houses called houses.

   let randomNumber = Math.floor(Math.random() * 4);
   // Math.floor((Math.random() * 10) + 1);

   let houseIndex = randomNumber;
    // -->then getHouse will generate a random number and store that number in a variable called houseIndex

   return houses[houseIndex];

   
    // getHouse will then return houses[houseIndex]

};

const addStudent = () => {
    // -->addStudent will take a name from the name input field and getHouse().
    // (So instead of name as the parameter, shouldn't it take "exampleInputName1"? because
    //that's the id for the name input field.)

    //Do something with name and house
    //newName = `${name} ${house}`;
   // return newName;
    let studentNameInput = document.getElementById("exampleInputName1").value;
    console.log(studentNameInput);

    let studentHouse = getHouse();
    console.log(studentHouse);
};



const buttonEvents = () => {
    document.getElementById("started-button").addEventListener("click", buildForm);
    
    //Make an event listener for the click on the sort student button.
    //The listener will call the addStudent function. 

};

const init = () => {
    
    tronBuilder();
    buttonEvents();
 
   
   

};

 init();