
/* Modified from SitePoint.com walkthrough */
(function(){

    /* Function unaltered - pushes quiz questions and answers to slides with radio buttons */
function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            
            for(letter in currentQuestion.answers) {
                answers.push(
                   `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

/* Personally created variable iterations, switch cases, slide alterations, and array calls */
function showResults() {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    
    let bourbonw = 0;
    let japanesew = 0;
    let canadianw = 0;
    let ryew = 0;
    let irishw = 0;
    let scotchw = 0;

    

    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            console.log(userAnswer);

            switch (userAnswer){
                case 'a':
                    bourbonw++
                    break;
                case 'b':
                    japanesew++
                    break;
                case 'c':
                    canadianw++
                    break;
                case 'd':
                    ryew++
                    break;
                case 'e':
                    irishw++
                    break;
                case 'f':
                    scotchw++
                    break;
            }
    });
    let final = {"Bourbon": bourbonw, "Japanese": japanesew, "Canadian": canadianw, "Rye": ryew, "Irish": irishw, "Scotch":scotchw};
    console.log(final);
    slides[currentSlide].classList.remove("active-slide");

    quizContainer.innerHTML = 
        "Check out these quiz results! Take a look at the Home Page to explore." + "<br />" + "<br />" +
        "Bourbon and Tennessee Whiskey: " + final["Bourbon"] + "<br />" + 
        "Japanese Whisky: " + final["Japanese"] + "<br />" + 
        "Canadian Whisky: " + final["Canadian"] + "<br />" + 
        "Rye Whiskey: " + final["Rye"] + "<br />" + 
        "Irish Whiskey: " + final["Irish"] + "<br />" + 
        "Scotch Whisky: " + final["Scotch"]; + "<br />";
}

/* Button Appearance Behavior */
function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    if(currentSlide === 0){
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = 'inline-block';
    }
    
    if (currentSlide === slides.length-1){
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else{
        nextButton.style.display = "inline-block"
        submitButton.style.display = "none";
    }

}

function showNextSlide(){
    showSlide(currentSlide + 1);
}

function showPreviousSlide(){
    showSlide(currentSlide - 1);
}

/* Variables */
const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

/* Quiz Questions and Answers */
const myQuestions = [
    
    {
        question: "Choose an appetizer.",
        answers: {
            a: "Barbecue Slider"/* Bourbon or Tennessee Whiskey*/,
            b: "Honey Prosciutto Crostini"/* Japanese Whisky */,
            c: "Toasted Almonds"/* Canadian Whisky */,
            d: "Zucchini Bites with Goat Cheese and Mint"/* Rye */,
            e: "Crab Cakes"/* Irish Whiskey */,
            f: "Oysters"/* Scotch */
        },

    },

    {
        question: "Choose a main course.",
        answers: {
            a: "Maple-Glazed Salmon"/* Bourbon or Tennessee Whiskey*/,
            b: "Curry"/* Japanese Whisky */,
            c: "Venison Steak"/* Canadian Whisky */,
            d: "Roasted Chicken Thighs"/* Rye */,
            e: "Smoked Salmon"/* Irish Whiskey */,
            f: "Pot Roast"/* Scotch */
        },
    },

    {
        question: "Choose a dessert.",
        answers: {
            a: "Pecan Clusters"/* Bourbon or Tennessee Whiskey*/,
            b: "Crème Brûlée"/* Japanese Whisky */,
            c: "Apple Pie"/* Canadian Whisky */,
            d: "Pumpkin Pie"/* Rye */,
            e: "Rosemary Lavender Cake"/* Irish Whiskey */,
            f: "Chocolate Brownie"/* Scotch */
        },
    },

    {
        question: "Choose a beverage.",
        answers: {
            a: "Wine"/* Bourbon or Tennessee Whiskey*/,
            b: "Penicillin Cocktail"/* Japanese Whisky */,
            c: "Lager"/* Canadian Whisky */,
            d: "Mojito"/* Rye */,
            e: "Gin and Tonic"/* Irish Whiskey */,
            f: "Smoked Old Fashioned"/* Scotch */
        },
    },

    {
        question: "Choose a fruit.",
        answers: {
            a: "Orange"/* Bourbon or Tennessee Whiskey*/,
            b: "Raisin"/* Japanese Whisky */,
            c: "Red Apple"/* Canadian Whisky */,
            d: "Lemon"/* Rye */,
            e: "Green Apple"/* Irish Whiskey */,
            f: "Dried Apricot"/* Scotch */
        },
    },

        {
        question: "Choose a bread.",
        answers: {
            a: "Cornbread"/* Bourbon or Tennessee Whiskey*/,
            b: "Sourdough"/* Japanese Whisky */,
            c: "Buttermilk Biscuits"/* Canadian Whisky */,
            d: "Pumpernickel"/* Rye */,
            e: "Soda Bread"/* Irish Whiskey */,
            f: "Italian"/* Scotch */
            },
        },

    {
            question: "Choose a cheese.",
            answers: {
                a: "Blue Cheese"/* Bourbon or Tennessee Whiskey*/,
                b: "Camembert"/* Japanese Whisky */,
                c: "Aged Gouda"/* Canadian Whisky */,
                d: "Sharp Cheddar"/* Rye */,
                e: "Brie"/* Irish Whiskey */,
                f: "Roquefort"/* Scotch */
            },
    }
];

/* Starts Quiz */
buildQuiz();

/* Pagination */
const previousButton=document.getElementById("previous");
const nextButton=document.getElementById("next");
const slides=document.querySelectorAll(".slide");
let currentSlide=0;
showSlide(currentSlide);

/* Event Listeners */
submitButton.addEventListener("click", showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
})();
