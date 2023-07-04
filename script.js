const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        let buttonText = e.target.innerText;
        console.log(buttonText)

        if(buttonText === 'C'){
            screen.value = '';
        }
        else if(buttonText === '%'){
            screen.value += buttonText;
        }
        else if(buttonText === 'X'){
            screen.value += '*';
        }
        else if(buttonText === '/'){
            screen.value += buttonText;
        }
        else if(buttonText === '-'){
            screen.value += buttonText;
        }
        else if(buttonText === '+'){
            screen.value += buttonText;
        }
        else if(buttonText === '**'){
            screen.value += buttonText;
        }
        else if(buttonText === '='){
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = "Invalid Operation"
            }
        }
        else{
            screen.value += buttonText;
        }
    })
}