function gethistory(){
 return document.getElementById('history-value').innerText;           
}
function printhistory(num){
    document.getElementById('history-value').innerText-num;
}
function getoutput(){
    document.getElementById('output-value').innerText;
}
function printoutput(num){
    if(num==""){
        document.getElementById('output-value').innerText=num;
    }
else{
   document.getElementById('output-value').innerText=getformattednumber(num);
}
}
function getformattednumber(num){
    if(num=="-"){
        return "";
    }
    var n=number(num){
        varvalue = n.toLocalString("en");
        return value;
    }
    function reversenumberformatt(num){

    }
    var operator=document.getElementsByClassName('operator')
    for(var i=0,<operator.length;i++){
        operator[i].addEventListener('click' function){
            if(this.id=="clear"){
                printhistory("");
                printoutput("");
            }
            if(this.id==("backspace"))
                var output=reversenumberformatt(getoutput()).tostring();
             if(output){  //if output has a value
                     output= output.substr(0,output.length-1);
                     printoutput(output)
            }
        }

        else{
            var output= getoutput();
            var history= gethistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                  history= history.substr(0,history.length-1); 
                }
            }
            if(output!="" || history!=""){
                output= output==""?output:reversenumberformatt(output);
                history=history+output;
                if(this.id=="="){
                    var result= eval(history);
                    printhistory(result);
                    printhistory("");
                }
                else{
                  history= history+this.id;
                  printhistory(history);
                  printoutput("");       
                }
            }
        }    
    }

   var number= document.getElementsByClassName("number");
   for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
       var output=reversenumberformatt(getoutput());
       if(output!=NaN){ //if output is a number
                        output=output+this.id;
                        printoutput(output)
       }
    });
  }