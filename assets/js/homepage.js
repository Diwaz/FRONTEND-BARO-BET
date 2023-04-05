const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelectorAll('.extraOdd');
const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
const OddsNumber = document.querySelector('.OddsNumber');
const emptyCart = document.querySelector('.emptyCart');
const selectOptions = document.querySelector('.selectOptions');
const col2 = document.querySelector('.column2');
const col3 = document.querySelector('.column3');
const cartWrapper = document.querySelector('.cartWrapper');
const cartBackdrop = document.querySelector('.cartBackdrop');













let soccerData = [

    {
        League: {
            leagueFlag: 'spain',
            leagueName: 'La Liga',
            leagueRank: 1,
            Game: [

                {
                    gameId: 55555,
                    home: 'FC Barcelona',
                    away: 'Real Madrid',
                    draw: 'draw',
                    time: '7:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team2',
                    bets: [1.55, 2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 6, 1],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                // {
                //     home: 'Valencia',
                //     away: 'Athletico Madrid',
                //     time: '6:00',
                //     date: '03/10',
                //     homeLogo: 'team2',
                //     awayLogo: 'team4',
                //     bets: [3.5, 3.2, 3.00],
                //     handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 4],
                //     extra: '+78'
                // },

            ],
        }
    },
    {
        League: {
            leagueFlag: 'UEFA',
            leagueName: 'UCL',
            leagueRank: 1,
            Game: [

                {
                    gameId: 11111,
                    home: 'Arsenal FC',
                    away: 'FC Bayern',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team3',
                    awayLogo: 'team1',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 1, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                {
                    gameId: 52134,
                    home: 'Manchester City',
                    away: 'Napoli',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team2',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 8, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },

            ],
        }
    },
    {
        League: {
            leagueFlag: 'italy',
            leagueName: 'Series A',

            leagueRank: 1,

            Game: [

                {
                    gameId: 23345,
                    home: 'AC Milan',
                    away: 'Inter Milan',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team4',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 2, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: 'Home Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },
                {
                    gameId: 12345,
                    home: 'Juventus',
                    away: 'AS Roma',
                    draw: 'draw',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total First',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },

                        {
                            title: ' Away Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over 3.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 4.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 5.5',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over 6.5',
                                    odds: 3.5
                                },
                            ]
                        },
                    ]
                },

            ],

        }
    },

];

let listCards = [];
let dataArray = [];

function initApp() {
    console.log(soccerData)
    soccerData.forEach((value, key) => {


        //For leagues
        let newDiv = document.createElement('div');
        newDiv.classList.add('leagueTable');
        newDiv.innerHTML = `
        <div class="leagueHeader bbcolor">
        <div class="leagueCol1">

            <img src="assets/images/${value.League.leagueFlag}.png" alt="" width="19" height="14" class="representLogo"> ${value.League.leagueName}</div>
        <div class="leagueCol2">
            <div class="betHeader">Home </div>
            <div class="betHeader">Draw</div>
            <div class="bHeader">Away</div>
        </div>
        <div class="leagueCol3">Handicap</div>
        <div class="leagueCol4">Over/Under</div>
    </div>
   `;

        //remove this comment debug mode
        leagueTable.appendChild(newDiv);

        let games = value.League.Game;
        console.log('games', games)
        games.forEach((val, indx) => {
            // For Games
            let gamesDiv = document.createElement('div');
            gamesDiv.classList.add('leagueFooter');
            gamesDiv.innerHTML = `
        <div class="gameCol1">

        <div class="teamRow1">
            <div class="nestedRow">03/11</div>
            <div class="nestedRow"> <img src="assets/images/${val.homeLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.home}</div>
        </div>
        <div class="teamRow1">
            <div class="nestedRow">6:00</div>
            <div class="nestedRow"> <img src="assets/images/${val.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.away}</div>
        </div>

    </div>
    <div class="gameCol2">
        <div class="betOdds" id="${indx}-${key}-1">${val.bets[0]} </div>
        <div class="betOdds" id="${indx}-${key}-2">${val.bets[1]}</div>
        <div class="betOdds" id="${indx}-${key}-3">${val.bets[2]}</div>
    </div>
    <div class="gameCol3">
        <div class="handiOdds"id="${indx}-${key}-1" >
            <div class="nestedOdds fontOrange">${val.handiBets[0]}</div>
            <div class="nestedOdds">${val.handiBets[1]}</div>
        </div>
        <div class="handiOdds" id="${indx}-${key}-2">
            <div class="nestedOdds fontOrange">${val.handiBets[2]}</div>
            <div class="nestedOdds">${val.handiBets[3]}</div>
        </div>


    </div>
    <div class="gameCol4">
        <div class="handiOdds" id="${indx}-${key}-3">
            <div class="nestedOdds fontRed" >${val.handiBets[4]}</div>
            <div class="nestedOdds">${val.handiBets[5]}</div>
        </div>
        <div class="handiOdds" id="${indx}-${key}-1">
            <div class="nestedOdds fontBlue" >${val.handiBets[6]}</div>
            <div class="nestedOdds">${val.handiBets[7]}</div>
        </div>
        <div class="extraOdd" id="${indx}-${key}">${val.extra}</div>
    </div>
    <div class="gameOdds"></div>
</div>
   `;
            //remove this comment debug mode
            leagueTable.appendChild(gamesDiv);
            let accorDiv = document.createElement('div')
            accorDiv.setAttribute('id', `${indx}${key}`)
            accorDiv.classList.add('accordionOdd');

            accorDiv.innerHTML = `
    <div class="extraOddsContainer${indx}${key}">
    </div>
                `
            leagueTable.appendChild(accorDiv);
            console.log('val', val.allBets)
            let allOdds = val.allBets;

            let reps = allOdds.length
            console.log('reps', reps)
            for (i = 0; i < reps; i++) {


                let allBetsDiv = document.createElement('div');
                allBetsDiv.classList.add('extraOddsBody');
                allBetsDiv.innerHTML = `
                    
                    <div class="oddsHeader fontBlue">${allOdds[i].title}</div>
                    <div class="oddsFooter">
                    </div>
                    `
                const extraOddsContainer = document.querySelector(`.extraOddsContainer${indx}${key}`);

                //remove this comment
                extraOddsContainer.appendChild(allBetsDiv)

                const totalOdds = allOdds[i].totalBlocks
                    // console.log('all odds here', totalOdds)
                    // console.log('here again')
                totalOdds.forEach((val, index) => {
                    let allBetsDiv = document.createElement('div');
                    allBetsDiv.classList.add('finalOddWrapper');
                    allBetsDiv.innerHTML = `
                        <div class="odds1" id="${indx}-${key}">${val.oddName}   <span class="highlightOdd">
                        ${val.odds}
                        </span>
                        </div>
                    `
                    const oddsFooter = document.querySelectorAll('.oddsFooter');
                    for (let i = 0; i < oddsFooter.length; i++) {

                        oddsFooter[i].appendChild(allBetsDiv)
                    }
                    //remove this comment

                })


            }


        })








    })

    // function selectOdds() {
    //     handiOdds.classList.toggle('betActive');
    // }
    // console.log(handiOdds)
    // handiOdds.addEventListener('click', selectOdds);
}
initApp();

function addToCard(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}

function reloadCard() {
    cartItemsWrapper.innerHTML = ''
    if (dataArray.length > 0) {
        emptyCart.style.display = 'none';
    } else {
        emptyCart.style.display = 'flex'
    }

    let totalOdds = 1;
    dataArray.forEach((value, key) => {
        totalOdds = totalOdds * parseFloat(value.odds);
        // count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('div');
            newDiv.classList.add('cartItem')
            newDiv.innerHTML = `
            <div class="line1">
        <div class="leftWrapper">

            <img src="assets/images/${value.leagueLogo}.png" alt="" width="14" height="14" class="representLogo">${value.leagueName}
        </div>

        <div class="exitLogo">
            <i class="bi bi-x-lg"></i>
        </div>
    </div>
    <div class="line2">
        <span class="fontBlue">

            ${value.matchTime} 
        </span> ${value.matchType}
    </div>
    <div class="line3">${value.fullGame}</div>
    <div class="line4 fontBlue">${value.teamName}
    <div class="oddsLine fontBlue">
    ${value.odds}
</div>
    </div>
                `;
            cartItemsWrapper.appendChild(newDiv);
        }
    })
    OddsNumber.innerText = totalOdds.toLocaleString();
    // quantity.innerText = count;
}




const loginBtn = document.querySelector('.loginBtn')
const sliderMenu = document.querySelector('.sliderMenu')
const sliderBackDrop = document.querySelector('.sliderMenuBackDrop')

loginBtn.addEventListener('click', function() {
    sliderMenu.classList.add('sliderMenuActive')
    sliderBackDrop.style.display = 'block'
})

sliderBackDrop.addEventListener('click', () => {
    sliderMenu.classList.remove('sliderMenuActive')
    sliderBackDrop.style.display = 'none'
})

cartWrapper.addEventListener('click', function() {
    cartBackdrop.style.display = 'flex'
    col3.style.display = 'flex'
    col3.style.zIndex = 3

})

cartBackdrop.addEventListener('click', function() {
    cartBackdrop.style.display = 'none'
    col3.style.display = ''
    col3.style.zIndex = 1
})




const accord = document.querySelectorAll('.accordionOdd')




// extraOdd.addEventListener('click', function() {
//     accord.classList.toggle('accordionActive')
// })


function setActiveButton(id) {
    // remove active class from all buttons

    let accord = document.getElementById(`${id}`);
    accord.classList.toggle('accordionActive')
        // const accordionOdd = document.querySelectorAll('.accordionOdd')
        // accordionOdd.forEach(btn => btn.classList.remove('accordionActive'));

    // // add active class to the clicked button
    // accordi.classList.add('accordionActive');
}

col2.addEventListener('click', (event) => {
    // Check if the clicked element is a button with the desired class
    if (event.target.classList.contains('odds1')) {
        // Handle the button click here
        console.log('Button clicked:', event.target);
        //
        // setActiveButton(event.target);
        event.target.classList.toggle('betActive');
        // Toggle the 'button-active' class on the clicked button element

        const gameIndex = event.target.id.split('-')[0]
        const leagueIndex = event.target.id.split('-')[1]
            // const oddIndex = event.target.id.split('-')[2]


        // const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
        const leagueName = soccerData[leagueIndex].League.leagueName;
        const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
        const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
        const matchType = '1x2';
        const matchTime = 'Live';
        const rawContent = event.target.textContent.split(' ')
        const cleanedArr = rawContent.filter(str => str.trim() !== '');
        const selectedOdd = parseFloat(cleanedArr.pop());
        const teamName = cleanedArr.join(' ');
        //  selectedOdd = 0;
        //  teamName = '';
        // if (event.target.classList.contains('dice')) {
        //     teamName = event.target.id.split('-')[1]
        //     const rawContent = event.target.textContent.split(' ')
        //     const cleanedArr = rawContent.filter(str => str.trim() !== '');
        //     selectedOdd = parseFloat(cleanedArr.pop());

        // } else {
        //     const rawContent = event.target.textContent.split(' ')
        //     const cleanedArr = rawContent.filter(str => str.trim() !== '');
        //     selectedOdd = parseFloat(cleanedArr.pop());
        //     teamName = cleanedArr.join(' ');
        // }









        const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + selectedOdd + matchTime + matchType + teamName;



        let newObject = {
            id: id, // generate unique id 
            leagueLogo: leagueLogo,
            leagueName: leagueName,
            odds: selectedOdd,
            teamName: teamName,
            fullGame: fullGame,
            matchType: matchType,
            matchTime: matchTime
        };
        if (dataArray.some(obj => obj.id === id)) {
            dataArray = dataArray.filter(obj => obj.id !== id);
        } else {
            dataArray.push(newObject);
        }
        reloadCard();


        reloadCard();


    }
});


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.handiOdds');
    const betOdds = document.querySelectorAll('.betOdds');
    const extraOdd = document.querySelectorAll('.extraOdd');
    const leagueCol2 = document.querySelectorAll('.leagueCol2');
    const leagueCol3 = document.querySelectorAll('.leagueCol3');
    const leagueCol4 = document.querySelectorAll('.leagueCol4');

    const gameCol2 = document.querySelectorAll('.gameCol2');
    const gameCol3 = document.querySelectorAll('.gameCol3');
    const gameCol4 = document.querySelectorAll('.gameCol4');



    selectOptions.addEventListener('change', function() {

        if (selectOptions.value == 'winner') {

            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'none';
                leagueCol4[i].style.display = 'none';
                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'none';
                    gameCol4[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol2.length; i++) {
                leagueCol2[i].style.display = 'flex';

                for (let i = 0; i < gameCol2.length; i++) {

                    gameCol2[i].style.display = 'flex';

                }
            }
        }
        if (selectOptions.value == 'handicap') {

            for (let i = 0; i < leagueCol2.length; i++) {
                leagueCol2[i].style.display = 'none';
                leagueCol4[i].style.display = 'none';
                for (let i = 0; i < gameCol2.length; i++) {

                    gameCol2[i].style.display = 'none';
                    gameCol4[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'flex';

                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'flex';

                }
            }

        }
        if (selectOptions.value == 'overUnder') {

            for (let i = 0; i < leagueCol3.length; i++) {
                leagueCol3[i].style.display = 'none';
                leagueCol2[i].style.display = 'none';
                for (let i = 0; i < gameCol3.length; i++) {

                    gameCol3[i].style.display = 'none';
                    gameCol2[i].style.display = 'none';
                }
            }
            for (let i = 0; i < leagueCol4.length; i++) {
                leagueCol4[i].style.display = 'flex';

                for (let i = 0; i < gameCol4.length; i++) {

                    gameCol4[i].style.display = 'flex';

                }
            }
        }
        // else {
        //     // Show all the league columns
        //     for (let i = 0; i < leagueCol34.length; i++) {
        //         console.log('here')
        //         leagueCol34[i].style.display = '';
        //     }
        // }

        // switch (selectOptions.value) {
        //     case 'winner':
        //         leagueCol3.style.display = 'none';
        //         leagueCol4.style.display = 'none';
        //         gameCol3.style.display = 'none';
        //         gameCol4.style.display = 'none';
        //         break;
        //     case 'handicap':
        //         leagueCol2.style.display = 'none';
        //         leagueCol4.style.display = 'none';
        //         gameCol2.style.display = 'none';
        //         gameCol4.style.display = 'none';
        //         break;
        //     case 'overUnder':
        //         leagueCol2.style.display = 'none';
        //         leagueCol3.style.display = 'none';
        //         gameCol2.style.display = 'none';
        //         gameCol3.style.display = 'none';
        //         break;
        //     default:
        //         console.log('here')
        // }
    });


    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            event.currentTarget.classList.toggle('betActive');



        });
    });
    betOdds.forEach(function(betOdds) {
        betOdds.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            event.currentTarget.classList.toggle('betActive');
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const oddIndex = event.target.id.split('-')[2]


            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = '1x2';
            const matchTime = 'Prematch';
            const selectedOdd = betOdds.textContent

            const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + selectedOdd + matchTime + matchType;


            console.log(selectedOdd)
            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: teamName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            if (dataArray.some(obj => obj.id === id)) {
                dataArray = dataArray.filter(obj => obj.id !== id);
            } else {
                dataArray.push(newObject);
            }
            reloadCard();
            // push the new object into the array
            console.log(dataArray)

            // console.log('team', soccerData[leagueIndex].League.Game[gameIndex].team);



        });
    });
    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            extraOdd.classList.toggle('betActive')
            let id = event.target.id.split('-').join('')
            setActiveButton(id)



        });
    });

});




// triggerSidebar.addEventListener('click', moveElement);

// extraOdd.addEventListener('click', selectOdds);
// betOdds.addEventListener('click', selectOdds);