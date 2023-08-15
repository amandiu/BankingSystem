
/*
1. find the Withdrow button with document.getElementById and add click event listeners
2. find the withdrow inputfield with document.getElementById
3. get the value from withDrow Input field
4. convert the value to a integer from string
5. find the withdrow Element with document.getElementById 
6.get the value from withDrow Element with  innerText
7. convert the value to a integer from string
8. set the value to withDrowInputvalue + withDrowElementValue in withdrowElement with innerText
9. clear the value from the inputfield

Balance part is working start
----------------------------------------------------------------
1. find the balance element with document.getElementById
2. get the value from Balance Element with innerText
3. convert the value to a integer from string
4. set the value in Balance Element with innerText
*/



// step-1
document.getElementById("withDrowButton").addEventListener("click", function () {
    // step-2
    const withdrowinputfield = document.getElementById("withDrowInput");
    // step-3
    const withDrowInputString = withdrowinputfield.value;
    // step-4
    const withDrowInputvalue = parseFloat(withDrowInputString);
    // step-9
    withdrowinputfield.value = "";

    if (isNaN(withDrowInputvalue)) {
        alert("Please enter a number");
        return;
    }
    // step-5
    const withdrowElement = document.getElementById("withdrowElement");
    //  step-6
    const withDrowElementString = withdrowElement.innerText;
    // step-7
    const withDrowElementValue = parseFloat(withDrowElementString);

    // bStep-1
    const balanceElement = document.getElementById("totalBalenceElement");
    // bStep-2
    const balanceElementStrinng = balanceElement.innerText;

    // bStep-3
    const balanceElementValue = parseFloat(balanceElementStrinng);
    if (withDrowInputvalue > balanceElementValue) {
        alert("Balence is less then withdrow amount")
        return;
    }
    // step-8
    withdrowElement.innerText = (withDrowInputvalue + withDrowElementValue)



    // bStep-4
    balanceElement.innerText = (balanceElementValue - withDrowInputvalue)

})