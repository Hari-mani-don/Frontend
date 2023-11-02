let button = document.getElementById('button');
button.addEventListener('click', jobSeeking);
let container = document.createElement('div');
container.id = 'result';

function jobSeeking(){
  let inputElements = document.getElementsByName("qualification");

  let education ='';
  let text ='';
  console.log(inputElements);
  
  for(let i = 0; i < inputElements.length; i++){
    let input = inputElements[i];
    switch(input.value){
      case 'Illiterate':
        education = 'Illiterate';
        break;
      case 'High Schools':
        education = 'High Schools';
        break;    
      case 'UG':
        education = 'UG';
        break;  
      case 'PG':
        education = 'PG';
        break;       
    }
    text += education + " ";
  }

  // Assuming you have an element with id 'resultContainer' where you want to append the container
  document.getElementById('resultContainer').appendChild(container);
  document.getElementById('result').innerHTML = text + "hari";
}
    