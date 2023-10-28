import {getFormData} from './form';
const submit = document.getElementById('input');
submit?.addEventListener('submit', function(e:SubmitEvent){
    e.preventDefault();
    debugger;
    console.log(getFormData); 
})


console.log("Hello Js");


