function converter(){
    let str = document.getElementById("textarea").value;
    let val =0;
    
    let wordCount=0;
    let word = 0;
    while(val < str.length){
        word++;
        let cha = str.charAt(val);
       if(str[val-1]==' ' && str[val]!=' '){
        wordCount++;
       }
        val++;
    }
    if(word > 0){
        wordCount++;
    }
    let result = document.getElementById("result");
    result.innerHTML = "Total words: "+wordCount; 
}