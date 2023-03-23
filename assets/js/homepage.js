const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelector('.extraOdd');








let soccerData = [

    {
        League: {
            leagueFlag: 'spain',
            leagueName: 'La Liga',
            leagueRank: 1,
            Game: [

                {
                    home: 'FC Barcelona',
                    away: 'Real Madrid',
                    time: '7:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team2',
                    bets: [1.55, 2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 6, 1],
                    extra: '+78'
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
                    home: 'Arsenal FC',
                    away: 'FC Bayern',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team3',
                    awayLogo: 'team1',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 1, 7],
                    extra: '+78'
                },
                {
                    home: 'Manchester City',
                    away: 'Napoli',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team2',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 8, 7],
                    extra: '+78'
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
                    home: 'AC Milan',
                    away: 'Inter Milan',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team4',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 2, 7],
                    extra: '+78'
                },
                {
                    home: 'Juventus',
                    away: 'AS Roma',
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team1',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 7],
                    extra: '+78'
                },

            ],

        }
    },

];

let listCards = [];

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

        leagueTable.appendChild(newDiv);

        let games = value.League.Game;
        console.log(games)
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
        <div class="betOdds" id="betOdds-${indx}-0">${val.bets[0]} </div>
        <div class="betOdds" id="betOdds-${indx}-0">${val.bets[1]}</div>
        <div class="betOdds" id="betOdds-${indx}-0">${val.bets[2]}</div>
    </div>
    <div class="gameCol3">
        <div class="handiOdds">
            <div class="nestedOdds fontOrange">${val.handiBets[0]}</div>
            <div class="nestedOdds">${val.handiBets[1]}</div>
        </div>
        <div class="handiOdds">
            <div class="nestedOdds fontOrange">${val.handiBets[2]}</div>
            <div class="nestedOdds">${val.handiBets[3]}</div>
        </div>


    </div>
    <div class="gameCol4">
        <div class="handiOdds">
            <div class="nestedOdds fontRed">${val.handiBets[4]}</div>
            <div class="nestedOdds">${val.handiBets[5]}</div>
        </div>
        <div class="handiOdds">
            <div class="nestedOdds fontBlue">${val.handiBets[6]}</div>
            <div class="nestedOdds">${val.handiBets[7]}</div>
        </div>
        <div class="extraOdd">${val.extra}</div>
    </div>
    <div class="gameOdds"></div>
</div>
   `;
            leagueTable.appendChild(gamesDiv);
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
    // listCard.innerHTML = '';

    let totalOdds = 0;
    listCards.forEach((value, key) => {
        totalOdds = totalOdds + value.price;
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}




// function moveElement() {
//     sidebar.style.left = '0';
//     console.log('clicked')
//         //  backdrop.style.display = 'block'

// }
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.handiOdds');
    const betOdds = document.querySelectorAll('.betOdds');
    const extraOdd = document.querySelectorAll('.extraOdd');

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
        });
    });
    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            event.currentTarget.classList.toggle('betActive');
        });
    });

});



// triggerSidebar.addEventListener('click', moveElement);

// extraOdd.addEventListener('click', selectOdds);
// betOdds.addEventListener('click', selectOdds);