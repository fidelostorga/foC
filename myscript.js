
function calculateBmi() {
var weight = document.bmiForm.weight.value
var height = document.bmiForm.height.value
if(weight > 0 && height > 0){	
var finalBmi = (703 * weight)/(height * height)
document.bmiForm.bmi.value = finalBmi
if(finalBmi < 18.5){
document.bmiForm.meaning.value = "you need to eat more."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.bmiForm.meaning.value = "keep up the good work you are healthy."
}
if(finalBmi > 25){
document.bmiForm.meaning.value = "please start exercising."
}
}
else{
alert("wrong info was inserted")
}
}
