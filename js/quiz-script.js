
 function validate() {
     var scoreText = document.getElementById("text");
    var obj_quiz=document.getElementById('quiz');
            var score =0;
    var index= 0; 
    //obj_quiz.children contient tous les article du quiz
    //parcourir tous les articles= 
    for (check of obj_quiz.children) { 
        //answerStatus contient element ayant l'id exemple "res1Status" pour ajoute reponse correcte ou pas 
         var answerStatus =  document.getElementById(responses[index].numb+"Status");
         
         //answer contient element ayant l'id exemple "res1" pour ajouter les bonnes reponses
        
        var answer =  document.getElementById(responses[index].numb); 

        //retourne les checkbox chécké par l'utilisateur
        var markedCheckbox = obj_quiz.children[index].querySelectorAll('input[type="checkbox"]:checked');
        
        //traitement pour vérifier si tous les checkbox chécké sont vrai ou non 
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
            for (reponse of responses[index].answers) {
                txt+='<span style="color: red">'+ reponse + '</span> <br>';
            }
           
            answer.innerHTML=txt;
            answer.style.display = "block";
        }
        
         index++;
        
    } 
    //retourne la valeur afficher pour le score
     scoreText.textContent ="votre score: "+score+"/"+responses.length;
     scoreText.style.display = "block";
    
  }