const pinGenerator = document.getElementById("pin-generator-button");
pinGenerator.addEventListener('click', function () {
    const pinGeneratedNumber = document.getElementById('pin-generated-number');
    const randomNumber = randomNumberGenerator();
    pinGeneratedNumber.value = randomNumber;

})

// function definition
function randomNumberGenerator() {
    const randomNumber = (Math.random() * 10000 + "").split(".")[0];
    if (randomNumber.length == 4) {
        return randomNumber;
    }
    else {
        return randomNumberGenerator();
    }

}

//  button handler
const screen = document.getElementById("screen-value");
const buttons = document.querySelectorAll(".button");
let screenValue = "";
for (var i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    button.addEventListener('click', function () {
        const buttonNumber = button.innerHTML;
        if (buttonNumber == "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else {
            screenValue += buttonNumber;
            if (buttonNumber == "-") {
                screenValue = screenValue.substr(0, screenValue.length - 2)
                screen.value = screenValue;
            }
            else {
                screen.value = screenValue;
            }
        }
    })
}

const submitButton = document.getElementById("submit-button");

    
    submitButton.addEventListener('click', function () {
        const pinNumber = document.getElementById('pin-generated-number').value;
        // console.log(pinNumber);
        const screenNumber = document.getElementById("screen-value").value;
        // console.log(screenNumber);
        const matchedId = document.getElementById("matched");
        const notMatchedId = document.getElementById("not-matched");
        if (pinNumber == screenNumber) {
            matched.style.display = 'block';
            notMatchedId.style.display = 'none';
            document.getElementById('try-text').style.display = 'none';
            
        }
        else {
            document.getElementById('try-text').style.display = 'block';
            const notMatchedId = document.getElementById("not-matched");
            notMatchedId.style.display = 'block';
            matched.style.display = 'none';
            buttonClick()
        }
        // const tryIdText = document.getElementById("try-text");
        // tryIdText.innerHTML = i + " try left";
        // console.log(i)

    })
    
    function buttonClick() {
        const decrementValue = document.getElementById("decrement");
        const decrementNumber = parseInt(decrementValue.innerHTML);
        const decrementCount = decrementNumber - 1;
        if(decrementCount > 0){
            decrementValue.innerHTML = decrementCount;
        }
        else{
            decrementValue.innerHTML = ":( Better luck next time, No"
        }

    }

