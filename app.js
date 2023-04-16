let uppercaseToggle = document.querySelector("#myToggle")
let lowercaseToggle = document.querySelector("#myToggle2")
let numbersToggle = document.querySelector("#myToggle3")
let symbolsToggle = document.querySelector("#myToggle4")
let generateButton = document.querySelector('.btn-generate')
let passwordLengthInput = document.querySelector('.input-number')
let result = document.querySelector('.generated-password')

let arrayUppercases = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let arrayLowercases = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let arrayNumbers = ['1','2','3','4','5','6','7','8','9','0']
let arraySymbols = ['!','@','#','$','%','^','&','*','(',')',]

let uppercaseToggleState = false
let lowercaseToggleState = false
let numbersToggleState = false
let symbolsToggleState = false

let allArays = []

function mainFunction()
{
    let randomPosition
    let randomArray
    let generatedPassword
    let arrayNewPassword = ['']
    

    if(uppercaseToggleState === true) allArays.push(arrayUppercases)
    if(lowercaseToggleState === true) allArays.push(arrayLowercases)
    if(numbersToggleState === true) allArays.push(arrayNumbers)
    if(symbolsToggleState === true) allArays.push(arraySymbols)


    let uniqueArray = [...new Set(allArays)]
    
    if(uppercaseToggleState === false && uniqueArray.includes(arrayUppercases))
    {
        let indexUpper= uniqueArray.indexOf(arrayUppercases)
        uniqueArray.splice(indexUpper,1)
    }

    if(lowercaseToggleState === false && uniqueArray.includes(arrayLowercases))
    {
        let indexLower= uniqueArray.indexOf(arrayLowercases)
        uniqueArray.splice(indexLower,1)
    }
    
    if(numbersToggleState === false && uniqueArray.includes(arrayNumbers))
    {
        let indexNumber= uniqueArray.indexOf(arrayNumbers)
        uniqueArray.splice(indexNumber,1)
    }

    if(symbolsToggleState === false && uniqueArray.includes(arraySymbols))
    {
        let indexSymbol= uniqueArray.indexOf(arraySymbols)
        uniqueArray.splice(indexSymbol,1)
    }

    for(let i = 0;i<passwordLengthInput.value;i++)
    {
        randomArray = Math.floor(Math.random(uniqueArray)*uniqueArray.length)
        for(let y = 0; y<uniqueArray[randomArray].length; y++)
        {   
            randomPosition = Math.floor(Math.random(uniqueArray[randomArray])*uniqueArray[randomArray].length)
        }
        generatedPassword = uniqueArray[randomArray][randomPosition]
        arrayNewPassword.push(generatedPassword)
    }
    result.innerHTML = arrayNewPassword.join("")
}

generateButton.addEventListener("click",()=>
{
    mainFunction()  
})

uppercaseToggle.addEventListener("click",()=>
{
    uppercaseToggleState = uppercaseToggle.checked
})

lowercaseToggle.addEventListener("click",()=>
{
    lowercaseToggleState = lowercaseToggle.checked
})

numbersToggle.addEventListener("click",()=>
{
    numbersToggleState = numbersToggle.checked
})

symbolsToggle.addEventListener("click",()=>
{
    symbolsToggleState = symbolsToggle.checked
})
