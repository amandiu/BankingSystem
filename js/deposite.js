/*
Deposite field working start
--------------------------------------------------------
1. find to the deposite button and connect this with document.getElementById
2. connect to the diposite input field and get value from input field
3. get value and convart with parseFloat
4. find to the previous Deposite amount with document.getElementById
5. convart previous Deposite amount  with parseFloat
6.set previousDepositeValue + depositeFieldValue in previousDeposite with innerText
7. clear input field
Deposite field working end
--------------------------------------------------------

Balence field working start 
---------------------------------------------------------
1. find the previous Balence element with document.getElementById
2.get value from Balence element 
3. convert the value to a integer from string
4. set the total value totalBalence + depositeFieldValue with innerText

Balence field working end 
---------------------------------------------------------
*/


// step1-
document.getElementById("depositeBtn").addEventListener("click", function () {
    // step2-
    const depositeField = document.getElementById("depositeField");
    // step2-
    const depositeFieldString = depositeField.value;
    // step3-
    const depositeFieldValue = parseFloat(depositeFieldString)
    // step7-
    depositeField.value = '';
    
    if (isNaN(depositeFieldValue)) {
        alert("Please enter a number");
        return;
    }
    // step4-
    const previousDeposite = document.getElementById("previousDeposite");

    // step5-
    const previousDepositeString = previousDeposite.innerText;

    // step5-
    const previousDepositeValue = parseFloat(previousDepositeString)

    // step6-
    previousDeposite.innerText = (previousDepositeValue + depositeFieldValue)


    // Balence field working start 
    // ---------------------------------------------------------
    // Bstep1-
    const totalBalenceElement = document.getElementById("totalBalenceElement");
    // Bstep2-
    const totalBalenceString = totalBalenceElement.innerText;
    // Bstep3-
    const totalBalence = parseFloat(totalBalenceString);
    // Bstep4-
    totalBalenceElement.innerText = (totalBalence + depositeFieldValue)


});