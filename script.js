let images = ['dice-one-solid.svg',
    'dice-two-solid.svg',
    'dice-three-solid.svg',
    'dice-four-solid.svg',
    'dice-five-solid.svg',
    'dice-six-solid.svg'
]

let dice = document.querySelectorAll('img')

function roll() {
    dice.forEach(function (die){
        die.classList.add('roll')
    })
    setTimeout(function(){
        dice.forEach(function(){
            die.classList.remove('roll')
        })
        let dieValue = Math.floor(Math.random() * 6)
        document.querySelector('#die').setAttribute('src', images[dieValue])
        document.querySelector('#number').innerHTML = 'Your roll is : ' + (dieValue +1)
        console.log(dieValue);
        
    },1000)
}
roll()