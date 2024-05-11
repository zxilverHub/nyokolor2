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