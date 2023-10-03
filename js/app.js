const questions = [
    {
      'ques': "Who is Equbal Fahmi?",
      'a': "Web Developer",
      'b': "Software Developer",
      'c': "Cyber Security Engineer",
      'd': "All of these",
      'correct': 'd',
    },
    {
      'ques': "What is the capital of France?",
      'a': "Berlin",
      'b': "London",
      'c': "Madrid",
      'd': "Paris",
      'correct': 'd',
    },
    {
      'ques': "Which planet is known as the Red Planet?",
      'a': "Venus",
      'b': "Mars",
      'c': "Jupiter",
      'd': "Saturn",
      'correct': 'b',
    },
  ];
  
  let index = 0;
  let total = questions.length;
  let right = 0, wrong = 0;
  const quesBox = document.getElementById("quesBox");
  const optionInputs = document.querySelectorAll('.options');
  const submitButton = document.querySelector('.btn');
  const loadQues = () => {
      if (index == total) {
          return endQuiz();
      }
      reset();
      const data = questions[index];
      quesBox.innerText = `${index + 1}) ${data.ques}`;
      optionInputs[0].nextElementSibling.innerText = data.a;
      optionInputs[1].nextElementSibling.innerText = data.b;
      optionInputs[2].nextElementSibling.innerText = data.c;
      optionInputs[3].nextElementSibling.innerText = data.d;
  };
  
  const submitQuiz = () => {
      const data = questions[index];
      const ans = getAnswer();
      if (ans === data.correct) {
          right++;
      } else {
          wrong++;
      }
      index++;
      loadQues();
      return;
  };
  
  const getAnswer = () => {
      let ans;
      optionInputs.forEach(
          (input) => {
              if (input.checked) {
                  ans = input.value;
              }
          }
      );
      return ans;
  };
  
  const reset = () => {
      optionInputs.forEach(
          (input) => {
              input.checked = false;
          }
      );
  };
  
  const endQuiz = () => {
      document.getElementById("box").innerHTML = `
      <div style="text-align:center">
          <h3>Thank you for playing the quiz </h3>
          <h2>${right}/${total} are correct</h2>
      </div>`;
  };
  
  submitButton.addEventListener('click', submitQuiz);
  loadQues();
  