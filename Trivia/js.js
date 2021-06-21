

//containers

let formContainer = document.getElementById("form-container");
let contentContainer = document.getElementById("content-container");
let questionContent = document.getElementById("questionsContent");


// formularios

let formQuestions = document.getElementById("trivia");
let answers = document.getElementsByClassName("btns-answers");

//VARIABLES JS CONTROLADORES

let score = 0;


let questions;
let correct_index_answer;
let qIndex = 0;

// VARIABLES API

let amount = document.getElementById("amount");
let category = document.getElementById("category");
let difficulty = document.getElementById("difficulty");
let type = document.getElementById("type");

//FUNCIONES

const getQuestions = e => {
    e.preventDefault();
    const url = `https://opentdb.com/api.php?amount=${amount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${type.value}`;
    fetch(url)
      .then(response => {
        return response.json();
      })
      .then(data => {
        questions = data.results;
        nextQuestions();
      })
      .catch(error => {
        console.log(error);
      });
  };

const nextQuestions = () => {
    if (qIndex == amount.value) {
      showFinalResults();
      return;
    }
  
    if (questions.length > 0) {
      formContainer.style.display = "none";
      contentContainer.style.display = "block";
      let currentQuestion = questions[qIndex];
      document.getElementById("questionName").innerText =
      currentQuestion.question;
  
      if (currentQuestion.incorrect_answers.length == 1) {
        document.getElementById(1).innerHTML = "True";
        document.getElementById(2).innerHTML = "False";
        document.getElementById(3).style.display = "none";
        document.getElementById(4).style.display = "none";
        if (currentQuestion.correct_answer === "True"){ correct_index_answer = 1;}
        else {correct_index_answer = 2;}
      } else {
        document.getElementById(3).style.display = "inline";
        document.getElementById(4).style.display = "inline";
     

        correct_index_answer = Math.floor(Math.random() * 4) + 1;
        document.getElementById(correct_index_answer).innerHTML = currentQuestion.correct_answer;

        let j = 0;
        for (let i = 1; i <= 4; i++) {
          if (i == correct_index_answer) continue;
          document.getElementById(i).innerHTML =
            currentQuestion.incorrect_answers[j];
          j++;
        }
      }
      
    }
  
    document.getElementById("question_index").innerHTML = qIndex + 1;
    document.getElementById("num_questions").innerHTML = amount.value;
    // console.log("la respuesta correcta es " + correct_index_answer);
  };
  
const selectAnswer = (id) =>{
    if (id == correct_index_answer) {
        score += 1;
        qIndex++;
    }else{
        score += 0;
        qIndex++;
    }
    nextQuestions();
}



 //FOR QUE RECORRA TODOS LOS BOTONES
for (let i = 0; i < answers.length; i++) {
    const element = answers[i];
    element.addEventListener("click", () => selectAnswer(element.id))
}




  const showFinalResults = () => {

    if(score<amount.value/2){
        questionContent.innerHTML = "";

        let encabezado = document.createElement("div");
        encabezado.innerHTML = `<h2><span class="trivia-game-span"> Lo siento pero estás tonto <br>Puntuación: ${score}</span></h2>`
        questionContent.appendChild(encabezado);
    
        let enlace = document.createElement("a");
        enlace.setAttribute("href","index.html");
        questionContent.appendChild(enlace);
    
        let buttonVolver = document.createElement("button");
        buttonVolver.setAttribute("class", "btns btns-answers btns-back");
        buttonVolver.innerText = "Volver a intentar";
        enlace.appendChild(buttonVolver);
    }else if(score>amount.value/2 && score<amount.value){

        questionContent.innerHTML = "";

        let encabezado = document.createElement("div");
        encabezado.innerHTML = `<h2><span class="trivia-game-span"> Casi casi pero sigues tonto <br>Puntuación: ${score}</span></h2>`
        questionContent.appendChild(encabezado);
    
        let enlace = document.createElement("a");
        enlace.setAttribute("href","index.html");
        questionContent.appendChild(enlace);
    
        let buttonVolver = document.createElement("button");
        buttonVolver.setAttribute("class", "btns btns-answers btns-back");
        buttonVolver.innerText = "Volver a intentar";
        enlace.appendChild(buttonVolver);
    }else{
    questionContent.innerHTML = "";
    let encabezado = document.createElement("div");
    encabezado.innerHTML = `<h2><span class="trivia-game-span"> Puntuación perfecta: ${score}</span></h2>`
    questionContent.appendChild(encabezado);

    let enlace = document.createElement("a");
    enlace.setAttribute("href","index.html");
    questionContent.appendChild(enlace);

    let buttonVolver = document.createElement("button");
    buttonVolver.setAttribute("class", "btns btns-answers btns-back");
    buttonVolver.innerText = "Volver a intentar";
    enlace.appendChild(buttonVolver);
    }
  };


// EVENTOS


formQuestions.addEventListener("submit", getQuestions);


