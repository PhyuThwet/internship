const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const heightErr = document.getElementById('height-error');
const weightErr = document.getElementById('weight-error');
const bmivalue = document.getElementById('bmivalue');
const bmicategory = document.getElementById('bmicategory');
const calbtn = document.getElementById('calbtn');

function calculateBMI() {
    const heightStr = heightInput.value;
    const weightStr = weightInput.value;

    let isvalid = true;

    heightErr.textContent = '';
    weightErr.textContent = '';

    if (!heightStr) {
        heightErr.textContent = 'Please Enter Your Height';
        isvalid = false;
    } else if (parseFloat(heightStr) <= 0) {
        heightErr.textContent = 'Please Enter a positive value';
        isvalid = false;
    }
    if (!weightStr) {
        weightErr.textContent = 'Please Enter Your Weight';
        isvalid = false;
    } else if (parseFloat(weightStr) <= 0) {
        weightErr.textContent = 'Please Enter a positive value';
        isvalid = false;
    }

    if (!isvalid) {
        bmivalue.textContent = '';
        bmicategory.textContent = '';
        bmicategory.className = 'bmi-category';
        return;
    }

    const height = parseFloat(heightStr) / 100;
    const weight = parseFloat(weightStr);
    const bmi = weight / (height * height);

    bmivalue.textContent = bmi.toFixed(1); 

    let categoryText = '';

    if (bmi < 18.5) {
        categoryText = 'under weight';
    } else if (bmi < 25) {
        categoryText = 'normal';
    } else if (bmi < 30) {
        categoryText = 'over weight ';
    
    } else {
        categoryText = ' over over weight ';
        
    }

    bmicategory.textContent = categoryText;
    
}

calbtn.addEventListener('click', calculateBMI);