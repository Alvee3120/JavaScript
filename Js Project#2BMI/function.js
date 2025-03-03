const form = document.querySelector('form');
const heightError = document.querySelector('#heightError');
const weightError = document.querySelector('#weightError');
const result = document.querySelector('#result');

form.addEventListener('submit', (e)=>{

e.preventDefault();

    const height = (document.querySelector('#height').value) ;
    const weight =(document.querySelector('#weight').value) ;


    if(height === '' || height <= 0 || isNaN(height) ||weight === '' || weight <= 0 || isNaN(weight)){

    
    if (height === '' || height <= 0 || isNaN(height) ){

        heightError.innerHTML = 'Please give a valid height'
    }
    if (weight === '' || weight <= 0 || isNaN(weight) ){

        weightError.innerHTML = 'Please give a valid weight'
    }
}

else {


    const heightInInt = parseInt(height)
    const weightInInt = parseInt(weight)

    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `Your BMI is : ${bmi} \n`

if (bmi <18.6){

    result.textContent += '\nYou are in under weight'
}
else if (bmi >=18.6 && bmi <=24.9)
{
 result.textContent += '\n You are in Normal range'

}
else if (bmi >24.9 )
{
 result.textContent += '\nYou are in over Weight'

}


    
}
    
})