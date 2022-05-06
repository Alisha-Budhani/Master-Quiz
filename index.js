const correctAnswer = ["B","A","A","A"];

const Form = document.querySelector('.form');

const result = document.querySelector(".quiz-result");
console.log(Form);

Form.addEventListener( 'submit' , e => {
    e.preventDefault();

    let score = 0;
    const UserAnswer = [Form.Q1.value, Form.Q2.value, Form.Q3.value, Form.Q4.value];

    UserAnswer.forEach((answer , index) => {
        
        if(answer == correctAnswer[index]){
            score += 25;
        }
    });

    console.log(score);

    // result.querySelector('span').textContent = `${score}%`;
    // result.classList.remove('quiz-result');

    var output = 0;
    
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        result.classList.remove('quiz-result');

        if(output == score){
            clearInterval(timer);
        }else{
            output++
        }
    }, 10);

    
});