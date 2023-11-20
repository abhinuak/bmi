function calclick(){
    var height = document.getElementById("heightt").value 
    var weight = document.getElementById("weightt").value 

    if(heightt.value=="" || weightt.value=="" || age.value=="" ){
        alert("Fill in the Blanks")

    }
    else{
        var bmi = (weight/((height/100)*(height/100))).toFixed(2);
        document.getElementById('result').innerHTML = `Your BMI is : ${bmi}`;

        var status;
        if(bmi<18.5){
            status = `Under Weight`;
        }
        else if( (bmi>=18.5) && (bmi<24.9) ){
            status ="Normal Weight";
        }
        else{
            status = ` Over Weight`;
        }
    
        document.getElementById("statusresult").innerHTML = `You are `+ status
    }
    // else{

    //     document.getElementById('result').innerHTML ='Warning : Enter all Fields';
    // }

  
}