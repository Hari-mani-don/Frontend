// let arr = [2,3,4,5];
// console.log(arr);
// let arr = [2,3,4,5,[2,3,5,6]];
// console.log(arr);

//objects

// let user = {
//     name:'hari',
//     age : 20,
//     heigt:2.5,
//     phone_number :9361931850,
    
//     //methods
//     attitude(){
//         console.log(user.name);
//     },

//     self: function(){
//          let a = this.age + this.name;
//          console.log(a);
//     },
//     array : [2,3,4,5],
// }
// user.attitude();
// user.self();
// console.log(user.array);
// console.log(user.array[0])
// user.hari = 20;
// console.log(user);
//     console.log(user.hari);
//     console.log(user.age =45);

//loops of array

// let array = [2,3,4,5];
// for(let arr of array){
//     console.log(arr);
// }

//objects in loop
// let items = {
//     name: 'mango',
//     color:'red',
//     quantity:2

// }
// for(let item in items){
//     console.log(items[item]);
// }


//practice website edabit


//program



function getRandomColor() {
  
    return array[rand];
}

let button = document.getElementById('button');
button.addEventListener('click', backroud);
let hex = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
 document.getElementsByTagName("body");
 document.getElementById("container");
   
let array =[];
function RandomColor(){
    let i =0;
    let color = '#';
    let color1 = '#';
      while(i < 6){
        let rand = Math.floor(Math.random() * 16);
        color += hex[rand];
        i++;
      }
      i =0;
      while(i < 6){
        let rand = Math.floor(Math.random() * 16);
        color1 += hex[rand];
        i++;
      }
      document.body.style.backgroundColor = color;
      container.style.backgroundColor = color1;

}

function backroud(){
     RandomColor();
}
