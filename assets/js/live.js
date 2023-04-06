const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelector('.extraOdd');
const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
const OddsNumber = document.querySelector('.OddsNumber');
const emptyCart = document.querySelector('.emptyCart');
const selectOptions = document.querySelector('.selectOptions');
const col4 = document.querySelector('.column4');
const ExtraOddsWrapper = document.querySelector('.ExtraOddsWrapper');
const noticeCancelBtn = document.querySelector('.noticeCancel');
const backDrop = document.querySelector('.my-backdrop');
const noticeBody = document.querySelector('.noticeBody');
const cartWrapper = document.querySelector('.cartWrapper');
const cartBackdrop = document.querySelector('.cartBackdrop');
const col3 = document.querySelector('.column3');
const gamesContainer = document.querySelector('.gamesContainer')

















let miniGameData = [

    {
        gameName: 'Pin ball',
        gameImg: 'game1',
        Types: [

            {
                formatName: 'Pinball 8 level',
                allBets: [{
                        title: 'Total First',

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
                formatName: 'Pinball 8 level',
                allBets: [{
                        title: 'Total First',

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
    },
    {
        gameName: '8 ball',
        gameImg: 'game2',
        Types: [

            {
                formatName: '8 pool losers out',
                allBets: [{
                        title: 'Total First',

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
                formatName: ' 8 pool winners out',
                allBets: [{
                        title: 'Total First',

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
    },

]
let messageData = [{
        msgType: 'notification',
        title: 'Bank check Type Information',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',
        color: 'Red'
    },
    {
        msgType: 'notification',
        title: 'Bet Fraud',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',

        date: '2023-03-26 22:40:44',
        status: 'Unread',
        color: 'Red'
    },
    {
        msgType: 'notification',
        title: 'Barcelona wins another classico',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',

        date: '2023-03-26 22:40:44',
        status: 'Read',
        color: 'Blue'
    },
    {
        msgType: 'notification',
        title: 'Hello there!',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',

        date: '2023-03-26 22:40:44',
        status: 'Unread',
        color: 'Red'
    },
]

let soccerData = [

    {
        League: {
            leagueFlag: 'spain',
            leagueName: 'La Liga',
            Sports: 'Soccer',
            leagueRank: 1,
            Game: [

                {
                    gameId: 55555,
                    home: 'FC Barcelona',
                    away: 'Real Madrid',
                    draw: 'draw',
                    homeGoal: 2,
                    awayGoal: 2,
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
                    gameId: 122222,
                    home: 'Valencia',
                    away: 'Ath. Madrid',
                    draw: 'draw',
                    homeGoal: 2,
                    awayGoal: 2,
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team2',
                    awayLogo: 'team4',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 4],
                    extra: '+78',
                    allBets: [{
                            title: 'Away Wins',
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
                            title: 'Handi Capped',
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
                            title: ' Nice goals',
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

                            ]
                        },
                    ]
                },

            ],
        }
    },
    {
        League: {
            leagueFlag: 'UEFA',
            leagueName: 'UCL',
            leagueRank: 1,
            Sports: 'Soccer',
            Game: [

                {
                    gameId: 11111,
                    home: 'Arsenal FC',
                    away: 'FC Bayern',
                    draw: 'draw',
                    homeGoal: 0,
                    awayGoal: 1,
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team3',
                    awayLogo: 'team1',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 1, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total',
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
                    home: 'Man. City',
                    away: 'Napoli',
                    draw: 'draw',
                    homeGoal: 1,
                    awayGoal: 7,
                    time: '6:00',
                    date: '03/10',
                    homeLogo: 'team2',
                    awayLogo: 'team3',
                    bets: [3.5, 3.2, 3.00],
                    handiBets: [-1.5, 2, 10, 1, 5, 1, 8, 7],
                    extra: '+78',
                    allBets: [{
                            title: 'Total',
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
                            title: 'not Total',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: 'Over here',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over there',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over and out',
                                    odds: 3.5
                                },
                                {
                                    oddName: ' its Over ',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over there',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over and out',
                                    odds: 3.5
                                },
                                {
                                    oddName: ' its Over ',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over there',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'Over and out',
                                    odds: 3.5
                                },
                                {
                                    oddName: ' its Over ',
                                    odds: 3.5
                                },
                            ]

                        },
                        {
                            title: 'Totally',
                            odd1Name: 'over 3.5',
                            odd2Name: 'under 3.5',
                            odd1: 2.0,
                            odd2: 1.65,
                            totalBlocks: [{
                                    oddName: ' here',
                                    odds: 3.5
                                },
                                {
                                    oddName: 'there',
                                    odds: 3.5
                                },
                                // {
                                //     oddName: 'out',
                                //     odds: 3.5
                                // },
                                // {
                                //     oddName: ' Over ',
                                //     odds: 3.5
                                // },
                            ]

                        },

                        // {
                        //     title: 'Home Total',
                        //     odd1Name: 'over 3.5',
                        //     odd2Name: 'under 3.5',
                        //     odd1: 2.0,
                        //     odd2: 1.65,
                        // },
                        // {
                        //     title: 'Home Total',
                        //     odd1Name: 'over 3.5',
                        //     odd2Name: 'under 3.5',
                        //     odd1: 2.0,
                        //     odd2: 1.65,
                        // },
                        // {
                        //     title: 'Home Total',
                        //     odd1Name: 'over 3.5',
                        //     odd2Name: 'under 3.5',
                        //     odd1: 2.0,
                        //     odd2: 1.65,
                        // },
                        // {
                        //     title: ' Away Total',
                        //     odd1Name: 'over 3.5',
                        //     odd2Name: 'under 3.5',
                        //     odd1: 2.0,
                        //     odd2: 1.65,
                        //     odd3: 2.4,
                        //     odd4: 2.6,
                        //     ood3Name: 'new Odd',
                        //     odd4Name: 'next Odd',
                        //     odd1Display: 'flex',
                        //     odd1Display: 'flex',
                        //     odd1Display: 'none',
                        //     odd1Display: 'none',
                        // },
                    ]
                },


            ],
        }
    },
    // {
    //     League: {
    //         leagueFlag: 'italy',
    //         leagueName: 'Series A',

    //         leagueRank: 1,

    //         Game: [

    //             {
    //                 gameId: 23345,
    //                 home: 'AC Milan',
    //                 away: 'Inter Milan',
    //                 draw: 'draw',
    //                 time: '6:00',
    //                 date: '03/10',
    //                 homeLogo: 'team1',
    //                 awayLogo: 'team4',
    //                 bets: [3.5, 3.2, 3.00],
    //                 handiBets: [-1.5, 2, 10, 1, 5, 1, 2, 7],
    //                 extra: '+78'
    //             },
    //             {
    //                 gameId: 12345,
    //                 home: 'Juventus',
    //                 away: 'AS Roma',
    //                 draw: 'draw',
    //                 time: '6:00',
    //                 date: '03/10',
    //                 homeLogo: 'team1',
    //                 awayLogo: 'team3',
    //                 bets: [3.5, 3.2, 3.00],
    //                 handiBets: [-1.5, 2, 10, 1, 5, 1, 4, 7],
    //                 extra: '+78'
    //             },

    //         ],

    //     }
    // },

];

let listCards = [];
let dataArray = [];
let selectedAmount = 0;


//renderSidebar is only to render the sidebar for the first time
//then if a user clicks another game then instead of appending on the parent it should replace the current component
//so replaceSidebar (another funtion) is used .
function renderSidebar(leagueIndx, gameIndx) {

    //get the index of the first game of the first League

    let gameObject = soccerData[leagueIndx].League.Game[gameIndx];
    let leagueObject = soccerData[leagueIndx].League
    let sport = soccerData[leagueIndx].League.Sports
    let allBets = soccerData[leagueIndx].League.Game[gameIndx].allBets;
    // console.log(gameObject)
    let detailDiv = document.createElement('div');
    detailDiv.classList.add('ExtraOddsWrapper');
    detailDiv.innerHTML = `
    <div class="ExtrasHeader">
    <div class="upperHeader">
        <div class="sports">
            <div class="sportLogo"><img src="assets/SVGs/8.svg" alt="" width="30" height="16"></div>${sport}</div>
        <div class="league"><img src="assets/images/${leagueObject.leagueFlag}.png" alt="" width="19" height="14" class="representLogo">${leagueObject.leagueName}</div>
    </div>
    <div class="LowerHeader">
        <div class="time"><i class="bi bi-stopwatch "></i>03/24</div>
        <div class="fullGame">
            <div class="team1">

                <img src="assets/images/${gameObject.homeLogo}.png" alt="" width="14" height="14" class="representLogo">${gameObject.home}
            </div>
            vs
            <div class="team2">

                <img src="assets/images/${gameObject.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${gameObject.away}
            </div>

        </div>
    </div>
</div>
<div class="gamePlaceHolder"></div>
</div>
<div class="extraOddsContainer"></div>
    `

    // sidebar.replaceChild(detailDiv, detailDiv);
    //remove this comment
    col4.appendChild(detailDiv);

    let reps = allBets.length

    for (i = 0; i < reps; i++) {


        let allBetsDiv = document.createElement('div');
        allBetsDiv.classList.add('extraOddsBody');
        allBetsDiv.innerHTML = `
            
            <div class="oddsHeader fontBlue">${allBets[i].title}</div>
            <div class="oddsFooter">
               
    
    
            </div>
        
       
            `
        const extraOddsContainer = document.querySelector('.extraOddsContainer');

        //remove this comment
        extraOddsContainer.appendChild(allBetsDiv)

        const totalOdds = allBets[i].totalBlocks
            // console.log('all odds here', totalOdds)
            // console.log('here again')
        totalOdds.forEach((val, indx) => {
            let allBetsDiv = document.createElement('div');
            allBetsDiv.classList.add('finalOddWrapper');
            allBetsDiv.innerHTML = `
            <div class="odds1" id="${leagueIndx}-${gameIndx}">${val.oddName}   <span class="highlightOdd">
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





}

function replaceSidebar(leagueIndx, gameIndx) {
    let gameObject = soccerData[leagueIndx].League.Game[gameIndx];
    let leagueObject = soccerData[leagueIndx].League
    let allBets = soccerData[leagueIndx].League.Game[gameIndx].allBets;


    let oldComponent = document.querySelector('.ExtraOddsWrapper')
    let newComponent = document.createElement('div');
    newComponent.classList.add('ExtraOddsWrapper');
    newComponent.innerHTML = `
    <div class="ExtrasHeader">
    <div class="upperHeader">
        <div class="sports">
            <div class="sportLogo"><img src="assets/SVGs/8.svg" alt="" width="30" height="16"></div>Soccer</div>
        <div class="league"><img src="assets/images/${leagueObject.leagueFlag}.png" alt="" width="19" height="14" class="representLogo">${leagueObject.leagueName}</div>
    </div>
    <div class="LowerHeader">
        <div class="time"><i class="bi bi-stopwatch "></i>03/24</div>
        <div class="fullGame">
            <div class="team1">

                <img src="assets/images/${gameObject.homeLogo}.png" alt="" width="14" height="14" class="representLogo">${gameObject.home}
            </div>
            vs
            <div class="team2">

                <img src="assets/images/${gameObject.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${gameObject.away}
            </div>

        </div>
    </div>
</div>
<div class="gamePlaceHolder">

</div>
<div class="extraOddsContainer"></div>
    `
    col4.replaceChild(newComponent, oldComponent)

    let reps = allBets.length


    for (i = 0; i < reps; i++) {


        let allBetsDiv = document.createElement('div');
        allBetsDiv.classList.add('extraOddsBody');
        allBetsDiv.innerHTML = `
            
            <div class="oddsHeader fontBlue">${allBets[i].title}</div>
            <div class="oddsFooter">
               
    
    
            </div>
        
       
            `
        const extraOddsContainer = document.querySelector('.extraOddsContainer');

        //remove this comment
        extraOddsContainer.appendChild(allBetsDiv)

        const totalOdds = allBets[i].totalBlocks
            // console.log('all odds here', totalOdds)
            // console.log('here again')
        totalOdds.forEach((val, indx) => {
            let allBetsDiv = document.createElement('div');
            allBetsDiv.classList.add('finalOddWrapper');
            allBetsDiv.innerHTML = `



            <div class="odds1" id="${leagueIndx}-${gameIndx}">${val.oddName}   <span class="highlightOdd">
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


}

function initApp() {
    // console.log(soccerData)

    messageData.forEach((val, key) => {
        let newsDiv = document.createElement('div')
        newsDiv.classList.add('noticeItem')
        newsDiv.innerHTML = `
       
        <div class="upperItem" id="${key}">
            <div class="leftPart">
                <span class="fontSecondary">

                    [${val.msgType}] 
                </span> ${val.title}
            </div>

            <input type="checkbox" name="read" id="">
        </div>
        <div class="lowerItem fontSecondary">
            ${val.date}
            <div class="noticeStatus font${val.color}">
                ${val.status}
            </div>
        </div>
    
        `
            //remove this
        noticeBody.appendChild(newsDiv)
    })

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
        <div class="leagueCol3"> Handicap
        </div>
        <div class="leagueCol4">Over/Under
        </div>
    </div>
   `;

        leagueTable.appendChild(newDiv);

        let games = value.League.Game;
        //  console.log(games)
        games.forEach((val, indx) => {
            // For Games
            let gamesDiv = document.createElement('div');
            gamesDiv.classList.add('leagueFooter');
            gamesDiv.innerHTML = `
            <div class="gameCol1" id='${indx}-${key}'>

            <div class="teamRow1">
                <div class="nestedRow"> <img src="assets/images/${val.homeLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.home}</div>
                <div class="nestedRow fontBlue">${val.homeGoal}</div>
            </div>
            <div class="teamRow1">
                <div class="nestedRow"> <img src="assets/images/${val.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.away}</div>
                <div class="nestedRow fontBlue">${val.awayGoal}</div>
            </div>
            <div class="teamRow1">
                <div class="nestedRow specWidth"><i class="bi bi-stopwatch "></i> 1st half of <span class="fontBlue"> 37:31'</span></div>
                <div class="nestedRow fontBlue">+48</div>
            </div>
    
        </div>
        <div class="gameCol2">
            <div class="betOdds" id="${indx}-${key}-1-1-pp">
               
                ${val.bets[0]}
            </div>
            <div class="betOdds" id="${indx}-${key}-1-2-pp">
                
                ${val.bets[1]}</div>
            <div class="betOdds" id="${indx}-${key}-1-3-pp">
                
                ${val.bets[2]}</div>
        </div>
        <div class="gameCol3">
            <div class="handiOdds" id="${indx}-${key}-1-1-nn">
                <div class="nestedOdds fontOrange" id="${indx}-${key}-1-1-nn">${val.handiBets[0]}</div>
                <div class="nestedOdds" id="${indx}-${key}-1-1-nn">${val.handiBets[1]}</div>
            </div>
            <div class="handiOdds" id="${indx}-${key}-2-1"> 
                <div class="nestedOdds fontOrange" id="${indx}-${key}-2-1">${val.handiBets[2]}</div>
                <div class="nestedOdds" id="${indx}-${key}-2-1">${val.handiBets[3]}</div>
            </div>
    
    
        </div>
        <div class="gameCol4">
            <div class="ouOdds" id="${indx}-${key}-1-2">
                <div class="nestedOdds fontRed" id="${indx}-${key}-1-2">${val.handiBets[4]}</div>
                <div class="nestedOdds" id="${indx}-${key}-1-2">${val.handiBets[5]}</div>
            </div>
            <div class="ouOdds" id="${indx}-${key}-2-2">
                <div class="nestedOdds fontBlue" id="${indx}-${key}-2-2">${val.handiBets[6]}</div>
                <div class="nestedOdds" id="${indx}-${key}-2-2">${val.handiBets[7]}</div>
            </div>
    
        </div>
        <div class="gameOdds"></div>
   `;
            leagueTable.appendChild(gamesDiv);

            // let allBets = val.allBets;
            // console.log(allBets)

            // allBets.forEach((v, k) => {
            //     // For Games
            //     let allBetsDiv = document.createElement('div');
            //     allBetsDiv.classList.add('extraOddsBody');
            //     allBetsDiv.innerHTML = `
            //                 <div class="oddsHeader fontBlue">1x2</div>
            //                 <div class="oddsFooter">
            //                     <div class="odds1">FCB 1.90
            //                     </div>

            //                     <div class="odds1">RMA 4.10</div>
            //                 </div>`;

            //     ExtraOddsWrapper.appendChild(allBetsDiv);


            // })

        })


    })

    // function selectOdds() {
    //     handiOdds.classList.toggle('betActive');
    // }
    // console.log(handiOdds)
    // handiOdds.addEventListener('click', selectOdds);
}
initApp();
renderSidebar(0, 0);

// function addToCard(key) {
//     if (listCards[key] == null) {
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }

function reloadCard() {
    cartItemsWrapper.innerHTML = ''
    const cartNumber = document.querySelector('.cartNumber')
    let totalPayout = document.querySelector('.OddsNumberAmnt')
    let totalPrice = selectedAmount;


    cartNumber.innerHTML = dataArray.length
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

        <div class="exitLogo" id="${key}">
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
    totalPayout.innerHTML = selectedAmount * totalOdds
        // quantity.innerText = count;
}




// function moveElement() {
//     sidebar.style.left = '0';
//     console.log('clicked')
//         //  backdrop.style.display = 'block'

// }
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

noticeCancelBtn.addEventListener('click', function() {
    backDrop.style.display = 'none'

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

function setActiveOdd(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')
    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}

function setActiveOdd2(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')

    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}

function setActiveOdd3(button) {
    // remove active class from all buttons
    const buttons = document.querySelectorAll('.betOdds')
    const buttons2 = document.querySelectorAll('.handiOdds')
    const buttons3 = document.querySelectorAll('.ouOdds')
    buttons.forEach(btn => btn.classList.remove('betActive'));
    buttons2.forEach(btn => btn.classList.remove('betActive'));
    buttons3.forEach(btn => btn.classList.remove('betActive'));

    // add active class to the clicked button
    button.classList.add('betActive');
}
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.handiOdds');
    const ouButtons = document.querySelectorAll('.ouOdds');
    const betOdds = document.querySelectorAll('.betOdds');
    const extraOdd = document.querySelectorAll('.extraOdd');
    const leagueCol2 = document.querySelectorAll('.leagueCol2');
    const leagueCol3 = document.querySelectorAll('.leagueCol3');
    const leagueCol4 = document.querySelectorAll('.leagueCol4');

    const gameCol2 = document.querySelectorAll('.gameCol2');
    const gameCol3 = document.querySelectorAll('.gameCol3');
    const gameCol4 = document.querySelectorAll('.gameCol4');
    const selectGame = document.querySelectorAll('.gameCol1');
    const extraOddBtn = document.querySelectorAll('.odds1');
    const col4 = document.querySelector('.column4');
    const slipBody = document.querySelector('.slipBody')
    const noticeDownHeader = document.querySelector('.noticeDownHeader');
    const backBtn = document.querySelector('.msgBack');
    const upperItem = document.querySelectorAll('.upperItem');
    const noticeItem = document.querySelectorAll('.noticeItem');
    const singleGame = document.querySelectorAll('.singleGame');
    const empty = document.querySelector('.emptyAll');
    const selectAmount = document.querySelectorAll('.amount1');
    const maxAmnt = document.querySelector('.maxAmnt');
    const resetAmnt = document.querySelector('.resetAmnt');


    maxAmnt.addEventListener('click', () => {
        selectedAmount = 100
        reloadCard();
    })
    resetAmnt.addEventListener('click', () => {
        selectedAmount = 0
        reloadCard();
    })
    selectAmount.forEach((amount) => {
        amount.addEventListener('click', (event) => {
            // Remove the commas from the string using the replace method
            const numStr = event.target.textContent.replace(/,/g, '');

            // Convert the string into an integer using the parseInt method
            const num = parseInt(numStr);
            selectedAmount = num
            console.log(selectedAmount)
            reloadCard();
        })
    })

    empty.addEventListener('click', () => {
        console.log('here')
        dataArray.splice(0, dataArray.length)
        reloadCard();
    })

    slipBody.addEventListener('click', (event) => {

        if (event.target.parentNode.matches('.exitLogo')) {
            let id = event.target.parentNode.id;
            console.log('from here', id)
            dataArray.splice(id, 1)
            reloadCard();
        } else {
            console.log('sad', event.target)
        }
    })





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

    });

    selectGame.forEach(function(selectGame) {
        selectGame.addEventListener('click', function(event) {

            const gameIndex = event.target.parentNode.id.split('-')[0]
            const leagueIndex = event.target.parentNode.id.split('-')[1]
                //  console.log(gameIndex, leagueIndex)
            replaceSidebar(leagueIndex, gameIndex);

        })
    })
    console.log(upperItem)
        // noticeItem.forEach(function(e) {
        //     e.addEventListener('click', function(event) {
        //         console.log(e.childNodes[1].id)
        //         let renderComp = false
        //         if(!renderComp){
        //             //render

    //             renderComp = true
    //         }

    //     })
    // })
    upperItem.forEach(function(upperItem) {
        upperItem.addEventListener('click', function(event) {


            const msgIndex = event.target.id;
            console.log(msgIndex)
            for (let i = 0; i < noticeItem.length; i++) {
                noticeItem[i].style.display = 'none'
            }
            noticeDownHeader.style.display = 'none'



            const msgContent = messageData[msgIndex].message;
            const msgType = messageData[msgIndex].msgType;
            const msgTitle = messageData[msgIndex].title;
            const msgDate = messageData[msgIndex].date;
            messageData[msgIndex].status = 'Read'
            messageData[msgIndex].color = 'Blue'

            console.log(messageData[msgIndex])

            let newDiv = document.createElement('div')
            newDiv.classList.add('msgBody')
            newDiv.innerHTML = `
            <div class="msgHeader bbcolor">
            <div class="up">[${msgType}] ${msgTitle}</div>
            <div class="down fontSecondary">
                ${msgDate}
            </div>
        </div>
        <div class="msgContent btcolor">
           ${msgContent}
        </div>
    
            `
                //remove this comment
            noticeBody.appendChild(newDiv)


        })
    })
    singleGame.forEach(function(game) {
        game.addEventListener('click', function(event) {



            const gameIndex = event.target.id;
            console.log(miniGameData[gameIndex].Types)
                // for (let i = 0; i < noticeItem.length; i++) {
                //     noticeItem[i].style.display = 'none'
                // }
                // noticeDownHeader.style.display = 'none'



            //     const msgContent = messageData[msgIndex].message;
            //     const msgType = messageData[msgIndex].msgType;
            //     const msgTitle = messageData[msgIndex].title;
            //     const msgDate = messageData[msgIndex].date;
            //     messageData[msgIndex].status = 'Read'
            //     messageData[msgIndex].color = 'Blue'

            //     console.log(messageData[msgIndex])

            //     let newDiv = document.createElement('div')
            //     newDiv.classList.add('msgBody')
            //     newDiv.innerHTML = `
            //     <div class="msgHeader bbcolor">
            //     <div class="up">[${msgType}] ${msgTitle}</div>
            //     <div class="down fontSecondary">
            //         ${msgDate}
            //     </div>
            // </div>
            // <div class="msgContent btcolor">
            //    ${msgContent}
            // </div>

            //     `

            //     noticeBody.appendChild(newDiv)


        })
    })



    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            setActiveOdd2(event.target)
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const oddIndex = event.target.id.split('-')[2]
            console.log('odd Inddd', oddIndex)
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = 'Handicap';
            const matchTime = 'Live';
            const rawContent = event.target.textContent.split(' ')
            const cleanedArr = rawContent.filter(str => str.trim() !== '');
            const selectedOdd = parseFloat(cleanedArr.pop());
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[3]
            const teamOdd = cleanedArr.join(' ');
            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 2 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const finalName = `${teamName}  (${teamOdd})`
            const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + matchTime;
            console.log(id)

            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                sameOdd: sameOdd,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: finalName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            if (dataArray.some(obj => obj.id === id)) {
                dataArray = dataArray.filter(obj => obj.id !== id);
                console.log('didididi  ')
                dataArray.push(newObject)
            } else {
                dataArray.push(newObject);
            }

            // if (dataArray.some(obj => obj.sameOdd === sameOdd)) {
            //     dataArray = dataArray.filter(obj => obj.sameOdd !== sameOdd)
            // }
            reloadCard();




        });
    });
    ouButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element
            setActiveOdd3(event.target)
            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const oddIndex = event.target.id.split('-')[2]
            console.log('odd Inddd', oddIndex)
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = 'Over/Under';
            const matchTime = 'Live';
            const rawContent = event.target.textContent.split(' ')
            const cleanedArr = rawContent.filter(str => str.trim() !== '');
            const selectedOdd = parseFloat(cleanedArr.pop());
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[3]
            const teamOdd = cleanedArr.join(' ');
            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 2 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const finalName = `${teamName}  (${teamOdd})`
            const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + matchTime;
            console.log(id)

            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                sameOdd: sameOdd,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: finalName,
                fullGame: fullGame,
                matchType: matchType,
                matchTime: matchTime
            };
            if (dataArray.some(obj => obj.id === id)) {
                dataArray = dataArray.filter(obj => obj.id !== id);
                console.log('didididi  ')
                dataArray.push(newObject)
            } else {
                dataArray.push(newObject);
            }

            // if (dataArray.some(obj => obj.sameOdd === sameOdd)) {
            //     dataArray = dataArray.filter(obj => obj.sameOdd !== sameOdd)
            // }
            reloadCard();




        });
    });
    betOdds.forEach(function(betOdds) {
        betOdds.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element

            const gameIndex = event.target.id.split('-')[0]
            const leagueIndex = event.target.id.split('-')[1]
            const sameOdd = gameIndex + leagueIndex + event.target.id.split('-')[2]
            const oddIndex = event.target.id.split('-')[3]
            const uniqueIndex = event.target.id.split('-')[4]



            const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = soccerData[leagueIndex].League.leagueName;
            const leagueLogo = soccerData[leagueIndex].League.leagueFlag;
            const fullGame = soccerData[leagueIndex].League.Game[gameIndex].home + ' vs ' + soccerData[leagueIndex].League.Game[gameIndex].away;
            const matchType = '1x2';
            const matchTime = 'Live';
            const selectedOdd = betOdds.textContent

            const id = soccerData[leagueIndex].League.Game[gameIndex].gameId + matchTime;


            console.log(selectedOdd)
            let newObject = {
                id: id, // generate unique id 
                sameOdd: sameOdd,
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

                dataArray.push(newObject)
            } else {
                dataArray.push(newObject);
            }
            reloadCard();
            // push the new object into the array



            // console.log('team', soccerData[leagueIndex].League.Game[gameIndex].team);



        });
    });

    col4.addEventListener('click', (event) => {
        // Check if the clicked element is a button with the desired class
        if (event.target.classList.contains('odds1')) {
            // Handle the button click here
            console.log('Button clicked:', event.target);
            // event.target.classList.toggle('betActive');
            // Toggle the 'button-active' class on the clicked button element
            event.target.classList.toggle('betActive');
            const gameIndex = event.target.id.split('-')[1]
            const leagueIndex = event.target.id.split('-')[0]
            const oddIndex = event.target.id.split('-')[2]


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
            // push the new object into the array
            console.log(dataArray)

            // console.log('team', soccerData[leagueIndex].League.Game[gameIndex].team);

        }
    });

    // extraOddBtn.forEach(function(betOdds) {
    //     betOdds.addEventListener('click', function(event) {



    //     });
    // });
    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element





        });
    });

});




// triggerSidebar.addEventListener('click', moveElement);

// extraOdd.addEventListener('click', selectOdds);
// betOdds.addEventListener('click', selectOdds);