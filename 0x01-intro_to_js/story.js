
const storyName = " The Journey of Choice"

let fname = prompt("Enter your name:");

let gender = prompt("Enter your gender:");

let age = parseInt(prompt("Enter your age:"));



let favouriteNovel = prompt("Enter title of your fovourite novel");

let bookChoice = prompt("Enter why you chose that book:");


let numberOfPages = prompt("Enter the number of pages:");

let nameOfAuthor = parseInt(prompt("Enter number of author:"));

let  isRecommended   = prompt("Was the book recommended to you? true of false:");

let readingDuration = prompt("Enter the number of days it took to read the novel:");

let numberOfCharacters = prompt("Enter numberr of characters in the story:");

function createStory () {
    
    let preamble = `My name is ${fname},  I am ${gender}, I am ${age} years old. The title of my story is ${storyName}.`;


    let story = `My name is ${fname}. I am ${gender}. I am ${age} years old. The title of favourite novel is ${favouriteBook}.

    My favorite novel is ${favouriteNovel}. I chose this book because ${bookChoice}. The book consists of ${numberOfPages}. 
    The book's author is ${nameOfAuthor}. It is ${isRecommended} that the book was recommended to me . 
    I read the book in ${readingDuration} days. The characters in the book are ${numberOfCharacters}`;




    let fullStory = preamble + story;
    let result = alert(fullStory);

    return result;


}
createStory();


