/* Assigning the style */

//The whole body background
document.body.style.display = 'flex'
document.body.style.flexDirection = 'column'
document.body.style.alignItems = 'center'
document.body.style.justifyContent = 'center' 
document.body.style.margin = '100px'
document.body.style.padding = '40px'
document.body.style.background = 'linear-gradient(to bottom, #424558, #262834)'

//only the calculator as a whole
let main = document.querySelector('main')
main.style.width = '300px'
main.style.height = '490px'
main.style.textAlign = 'center'
main.style.borderRadius = '20px'
main.style.backgroundColor = 'grey';
main.style.backdropFilter = 'blur(10px)';
main.style.border = '15px solid grey';
main.style.boxShadow = '0 8px 32px #80000000';

//The Input
let input = document.querySelector('input')
input.style.height = '110px'
input.style.width = '290px'
input.style.borderRadius = '30px'
input.style.backgroundColor = '#262834'
// input.style.alignItems = 'center'
input.style.textAlign = 'right'
input.style.fontSize = '30px'
input.style.fontWeight = '500'
// input.style.letterSpacing = '1px'
input.style.color = '#fff'
input.style.border = 'none'

//The keypad
let keypad = document.getElementById('keypad')
keypad.style.marginTop = '10px'
keypad.style.display = 'grid'
keypad.style.gridTemplateColumns = 'repeat(4,1fr)'
keypad.style.gridAutoRows = 'minmax(70px, auto)'
keypad.style.backgroundColor = 'grey'

//The buttons
let buttons = document.getElementsByTagName('button')
for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i]
    button.style.margin = '5px'
    button.style.padding = '10px'
    button.style.border = 'none'
    button.style.borderRadius = '15px'
    button.style.backgroundColor = '#262834'
    button.style.color = '#fff'
    button.style.fontWeight = 'bold'
    button.style.fontSize = 'larger'
    button.style.cursor = 'pointer'

    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#3b3f48'
    })

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#262834'
    })
}


