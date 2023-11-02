let button = document.querySelector('button');
button.addEventListener('click', display);

function display(){
     let input = document.getElementById("input");
     let city =  input.options[input.selectedIndex].value;
     let population = 0, literacyRate =0, language='';
     switch(city){
        case "Bengalure":
            population = 4646732;
            literacyRate = 90.20;
            language ='kannada';
            break;
        case "Chennai":
            population = 8443675;
            literacyRate = 88.71;
            language ='Tamil';
            break;
        case "Thirichi":
            population = 4646732;
            literacyRate = 90.20;
            language ='Tamil';  
            break;
        case "Thirichi":
            population = 12442374;
            literacyRate = 89.73;
            language ='Marathi';
            break;
        case "Thirichi":
            population = 12442374;
            literacyRate = 89.73;
            language ='Thiruvannamalai';  
            break;      
     }
     let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}.`;
     console.log(text);
     let resultdiv = document.createElement('div');
     resultdiv.id = 'result';
     document.getElementById('container').appendChild(resultdiv);
     document.getElementById('result').innerHTML = text;
}