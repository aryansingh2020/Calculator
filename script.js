const calculator=document.getElementById("calculator")
const textField=document.getElementById("text-field")
let currentInp=""
const buttons = document.querySelectorAll(".btn");
const btnDot=document.getElementById("btn-dot")
const btnEqual=document.getElementById("btn-equal")
const btnOnOff=document.getElementById("btn-onoff")

let theme=true
btnDot.addEventListener("click",()=>{
    currentInp=currentInp+"."
    textField=currentInp
})

btnOnOff.addEventListener("click",()=>{
    if(btnOnOff.textContent==="OFF")
    {
        btnOnOff.style.backgroundColor="rgb(64, 188, 6)";
        btnOnOff.style.borderColor="rgb(64, 188, 6)";
        btnOnOff.textContent="ON";
        textField.style.backgroundColor="rgb(37, 98, 9)";
        textField.disabled=true;
        clearData()
        
    }
    else if(btnOnOff.textContent==="ON"){
        btnOnOff.style.backgroundColor="rgb(211, 29, 9)";
        btnOnOff.style.borderColor="rgb(211, 29, 9)";
        btnOnOff.textContent="OFF";
        textField.style.backgroundColor="rgb(47, 244, 47)";
        textField.disabled=false;
    }
})
buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        const buttonText=button.textContent
        if(textField.disabled===true)
        {
            textField.value=""
        }
        else if(buttonText==='C')
        {
            clearData();
            //&#8730
        }
        else if(buttonText==='<')
        {
            removeLastElement();
        }
        else if(buttonText==='^')
        {
            currentInp=currentInp+'**';
            textField.value=currentInp;
        
        }
        else if(buttonText==="click"){
            if(theme===true)
            {
                calculator.style.backgroundColor="black"
                theme=false
            }
            else{
                calculator.style.backgroundColor="rgb(157, 151, 151)"
                theme=true
            }
        }
        else {
            currentInp=currentInp+button.textContent;
            textField.value=currentInp;
        }
    })
});
btnEqual.addEventListener("click",()=>{
    if(textField.disabled===false)
    {
        calculateResult();
    }
});
const calculateResult=()=> {
    try {
        
        const result = eval(currentInp);
        textField.value = result;
        // Update the current input with the result
        currentInp = result.toString(); 
    } catch (error) {
        textField.value = 'Error!';
    }
}
const clearData=()=>
{
    currentInp=""
    textField.value=""
};
const removeLastElement=()=>
{
    currentInp=currentInp.slice(0,-1)
    textField.value=currentInp
};
