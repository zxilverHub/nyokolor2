const colors = document.querySelectorAll('.colors div'),
    round = document.querySelector('.round'),
    reset = document.querySelector('.reset');


let clickCount = 0,
    currentRound = 0;

const colorStat = [
    {
        id: 'yellow',
        count: 0
    },

    {
        id: 'white',
        count: 0
    },

    {
        id: 'pink',
        count: 0
    },

    {
        id: 'blue',
        count: 0
    },

    {
        id: 'red',
        count: 0
    },

    {
        id: 'green',
        count: 0
    }
]

function updateStat() {
    for(let i=0; i<colors.length; i++) {
        colors[i].innerHTML = 
        `
        <div class="label">${colorStat[i].id.toLocaleUpperCase()}</div>
        <div class="count">${colorStat[i].count}</div>
        `
    }

    round.innerHTML = `Round: ${currentRound}`
}

colors.forEach(c => {
    c.addEventListener('click', (e)=> {
        clickCount++;

        if(clickCount>=3) {
            currentRound++;
            clickCount = 0;
        }

        colorStat.forEach(s => {
            if(s.id == e.target.id) {
                if(s.count>=7 || isNaN(s.count)) {
                    s.count = 'GO'
                }
                else
                    s.count += 1;
            }
        })

        updateStat()

    })
})

reset.addEventListener('click', ()=> {
    colorStat.map(cs => cs.count = 0)
    clickCount = 0;
    currentRound = 0;
    updateStat()

})

updateStat()


let n = 5, ns = [n], m = 500, s = 5;

while(n*2<m) {
    let tempn = 0;
    ns.forEach(s => tempn+=s)
    n=tempn;
    ns.push(n*2<m? n : m-n)
}

console.log(ns.join(' '))

const moneyHolder = document.querySelector('.money'),
    betStartHolder = document.querySelector('.bet-start'),
    currentBetHolder = document.querySelector('.current-bet'),
    playRoundHolder = document.querySelector('.play-round'),
    winBtn1 = document.querySelector('#win1'),
    winBtn2 = document.querySelector('#win2'),
    nextBtn = document.querySelector('#next')


let index = 0, currentBet = 5, money = 500-currentBet, playRound = 1, lose = 0;

function undateBets() {
    moneyHolder.innerHTML = `Money: ${money}`
    betStartHolder.innerHTML = `Bet-start: 5`
    currentBetHolder.innerHTML = `Current bet: ${currentBet}`
    playRoundHolder.innerHTML = `Round: ${playRound}`
}

undateBets()


nextBtn.addEventListener('click', ()=> {
    index++;
    currentBet = ns[index];
    money -= currentBet;
    lose+=currentBet;
    playRound++;
    undateBets()
})

winBtn1.addEventListener('click', ()=> {
    money += (currentBet*2) - 5;
    lose-=(currentBet*2);
    playRound=1;
    index = 0;
    currentBet = ns[index];


    undateBets()
})

winBtn2.addEventListener('click', ()=> {
    money += (currentBet*3);
    lose-=(currentBet*3);
    money-=5
    playRound=1;
    index = 0;
    currentBet = ns[index];

    undateBets()
})