
 function validate() {
     var scoreText = document.getElementById("text");
    var obj_quiz=document.getElementById('quiz');
            var score =0;
    var index= 0; 
    for (check of obj_quiz.children) { 
        var answerStatus =  document.getElementById(responses[index].numb+"Status");
        var answer =  document.getElementById(responses[index].numb); 
        var markedCheckbox = obj_quiz.children[index].querySelectorAll('input[type="checkbox"]:checked');
        var isCorrect=true;
        for (const checkedItem of markedCheckbox) {
            if (!responses[index].answers.includes(checkedItem.value)) {
                isCorrect=false;
                break;
            }
        }
        if(isCorrect && markedCheckbox.length==responses[index].answers.length)
        {
            answerStatus.textContent ="Bonne reponse !";
            answerStatus.style.display = "block"; 
            answerStatus.style.color = "green";
            answer.innerHTML=""
            score++;
        }
        else
        {
            answerStatus.textContent ="Mauvaise reponse !";
            answerStatus.style.display = "block";
            answerStatus.style.color = "red";
            var txt="";
            responses[index].answers.forEach(element => {
                txt +='<span style="color: red">'+ element + '</span> <br>'
            });
            answer.innerHTML=txt;
            answer.style.display = "block";
        }
        
         index++;
        
    } 
     scoreText.textContent ="votre score: "+score+"/"+responses.length;
     scoreText.style.display = "block";
    
  }