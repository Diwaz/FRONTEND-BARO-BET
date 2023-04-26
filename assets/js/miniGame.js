const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelector('.extraOdd');


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
const slideDeposite = document.querySelector('.slideDeposite')
const loginBtn = document.querySelector('.loginBtn')
const sliderMenu = document.querySelector('.sliderMenu')
const sliderBackDrop = document.querySelector('.sliderMenuBackDrop')
const depositeDrop = document.querySelector('.depositeDrop')

















let miniGameData = [

    {
        gameName: 'Pin ball',
        gameImg: 'game1',
        Types: [

            {
                formatName: 'Pinball 8 level',
                formatLogo: 'mode1',

                allBets: [{
                        title: 'Pinball 8 level Round of 64',

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
                formatLogo: 'mode1',
                allBets: [{
                        title: 'Pinball 8 level Round of 16',

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
                formatLogo: 'mode1',
                allBets: [{
                        title: ' 8 ball Round of 64',

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
                formatLogo: 'mode1',
                allBets: [{
                        title: '8 ball Round of 64',

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


let dataArray = [];
let cartItem = null;
let selectedAmount = 0;



//renderSidebar is only to render the sidebar for the first time
//then if a user clicks another game then instead of appending on the parent it should replace the current component
//so replaceSidebar (another funtion) is used .
// function renderSidebar(leagueIndx, gameIndx) {

//     //get the index of the first game of the first League

//     let gameObject = soccerData[leagueIndx].League.Game[gameIndx];
//     let leagueObject = soccerData[leagueIndx].League
//     let sport = soccerData[leagueIndx].League.Sports
//     let allBets = soccerData[leagueIndx].League.Game[gameIndx].allBets;
//     // console.log(gameObject)
//     let detailDiv = document.createElement('div');
//     detailDiv.classList.add('ExtraOddsWrapper');
//     detailDiv.innerHTML = `
//     <div class="ExtrasHeader">
//     <div class="upperHeader">
//         <div class="sports">
//             <div class="sportLogo"><img src="assets/SVGs/8.svg" alt="" width="30" height="16"></div>${sport}</div>
//         <div class="league"><img src="assets/images/${leagueObject.leagueFlag}.png" alt="" width="19" height="14" class="representLogo">${leagueObject.leagueName}</div>
//     </div>
//     <div class="LowerHeader">
//         <div class="time"><i class="bi bi-stopwatch "></i>03/24</div>
//         <div class="fullGame">
//             <div class="team1">

//                 <img src="assets/images/${gameObject.homeLogo}.png" alt="" width="14" height="14" class="representLogo">${gameObject.home}
//             </div>
//             vs
//             <div class="team2">

//                 <img src="assets/images/${gameObject.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${gameObject.away}
//             </div>

//         </div>
//     </div>
// </div>
// <div class="gamePlaceHolder"></div>
// </div>
// <div class="extraOddsContainer"></div>
//     `

//     // sidebar.replaceChild(detailDiv, detailDiv);
//     //remove this comment
//     col4.appendChild(detailDiv);

//     let reps = allBets.length

//     for (i = 0; i < reps; i++) {


//         let allBetsDiv = document.createElement('div');
//         allBetsDiv.classList.add('extraOddsBody');
//         allBetsDiv.innerHTML = `

//             <div class="oddsHeader fontBlue">${allBets[i].title}</div>
//             <div class="oddsFooter">



//             </div>


//             `
//         const extraOddsContainer = document.querySelector('.extraOddsContainer');

//         //remove this comment
//         extraOddsContainer.appendChild(allBetsDiv)

//         const totalOdds = allBets[i].totalBlocks
//             // console.log('all odds here', totalOdds)
//             // console.log('here again')
//         totalOdds.forEach((val, indx) => {
//             let allBetsDiv = document.createElement('div');
//             allBetsDiv.classList.add('finalOddWrapper');
//             allBetsDiv.innerHTML = `



//             <div class="odds1" id="${leagueIndx}-${gameIndx}">${val.oddName}   <span class="highlightOdd">
//             ${val.odds}
//             </span>
//             </div>
//         `
//             const oddsFooter = document.querySelectorAll('.oddsFooter');
//             for (let i = 0; i < oddsFooter.length; i++) {

//                 oddsFooter[i].appendChild(allBetsDiv)
//             }
//             //remove this comment

//         })


//     }





// }

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
    miniGameData.forEach((val, key) => {
        let loadGames = document.createElement('div')
        loadGames.classList.add('singleGame');
        loadGames.innerHTML = `
        
        <img src="assets/images/${val.gameImg}.png" class="d-inline-block align-text-top" width="225" height="130" id="${key}">
   
        `
        gamesContainer.appendChild(loadGames)

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

        // leagueTable.appendChild(newDiv);

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
            <div class="betOdds" id="${indx}-${key}-1">
               
                ${val.bets[0]}
            </div>
            <div class="betOdds" id="${indx}-${key}-2">
                
                ${val.bets[1]}</div>
            <div class="betOdds" id="${indx}-${key}-3">
                
                ${val.bets[2]}</div>
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
    
        </div>
        <div class="gameOdds"></div>
   `;
            //  leagueTable.appendChild(gamesDiv);

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
// renderSidebar(0, 0);

// function addToCard(key) {
//     if (listCards[key] == null) {
//         listCards[key] = products[key];
//         listCards[key].quantity = 1;
//     }
//     reloadCard();
// }

function reloadCard() {
    const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
    const OddsNumber = document.querySelector('.OddsNumber');
    let totalPayout = document.querySelector('.OddsNumberAmnt')
    if (cartItem !== null) {


        let totalOdds = cartItem.odds;
        let totalPrice = selectedAmount * totalOdds;
        cartItemsWrapper.innerHTML = ''
            // if (dataArray.length > 0) {
            //     emptyCart.style.display = 'none';
            // } else {
            //     emptyCart.style.display = 'flex'
            // }

        //  dataArray.forEach((value, key) => {
        //     totalOdds = totalOdds * parseFloat(value.odds);
        // count = count + value.quantity;
        // if (value != null) {
        let newDiv = document.createElement('div');
        newDiv.classList.add('cartItem')
        newDiv.innerHTML = `
            <div class="line1">
        <div class="leftWrapper">

            <img src="assets/images/${cartItem.leagueLogo}.svg" alt="" width="14" height="14" class="representLogo">${cartItem.leagueName}
        </div>

        
    </div>
   
    <div class="line3">${cartItem.fullGame}</div>
    <div class="line4 fontBlue">${cartItem.teamName}
    <div class="oddsLine fontBlue">
    ${cartItem.odds}
</div>
    </div>
                `;
        cartItemsWrapper.appendChild(newDiv);
        // }
        //   })
        OddsNumber.innerText = totalOdds.toLocaleString();
        // quantity.innerText = count;
        totalPayout.innerHTML = totalPrice
    } else {

        cartItemsWrapper.innerHTML = ''

        let newDiv = document.createElement('div');
        newDiv.classList.add('cartItem')
        newDiv.innerHTML = `
           
                `;
        cartItemsWrapper.appendChild(newDiv);


    }

}




// function moveElement() {
//     sidebar.style.left = '0';
//     console.log('clicked')
//         //  backdrop.style.display = 'block'

// }
// noticeCancelBtn.addEventListener('click', function() {
//     backDrop.style.display = 'none'

// })

// cartWrapper.addEventListener('click', function() {
//     cartBackdrop.style.display = 'flex'
//     col3.style.display = 'flex'
//     col3.style.zIndex = 3

// })

// cartBackdrop.addEventListener('click', function() {
//     cartBackdrop.style.display = 'none'
//     col3.style.display = ''
//     col3.style.zIndex = 1
// })
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
    const selectGame = document.querySelectorAll('.gameCol1');
    const extraOddBtn = document.querySelectorAll('.odds1');
    const col4 = document.querySelector('.column4');
    const noticeDownHeader = document.querySelector('.noticeDownHeader');
    const backBtn = document.querySelector('.msgBack');
    const upperItem = document.querySelectorAll('.upperItem');
    const noticeItem = document.querySelectorAll('.noticeItem');
    const singleGame = document.querySelectorAll('.singleGame');












    selectGame.forEach(function(selectGame) {
        selectGame.addEventListener('click', function(event) {

            const gameIndex = event.target.parentNode.id.split('-')[0]
            const leagueIndex = event.target.parentNode.id.split('-')[1]
                //  console.log(gameIndex, leagueIndex)
            replaceSidebar(leagueIndex, gameIndex);

        })
    })
    console.log(upperItem)












    singleGame.forEach(function(game) {
        game.addEventListener('click', function(event) {



            const gameIndex = event.target.id;
            console.log(miniGameData[gameIndex].Types)

            for (let i = 0; i < singleGame.length; i++) {
                singleGame[i].style.display = 'none'
            }


            // noticeDownHeader.style.display = 'none'





            let newDiv = document.createElement('div')
            newDiv.classList.add('miniGamesWrapper')
            newDiv.innerHTML = `
               
    <div class="gameBody">
        <div class="playerHeader">
            <div class="backHeader">
                <i class="bi bi-caret-left"></i> Back to the game list</div>

            <div class="gameListBody">

                
               
                
            </div>

        </div>

        
    </div>


                `

            gamesContainer.appendChild(newDiv)

            let gameType = miniGameData[gameIndex].Types
            console.log('Types', gameType)
            let gameLength = miniGameData[gameIndex].Types.length
            for (let i = 0; i < gameLength; i++) {
                let modeDiv = document.createElement('div')
                modeDiv.classList.add('gameMode')
                modeDiv.setAttribute('id', `${i}`)
                modeDiv.innerHTML = `
               
                    <div class="modeLogo" id="${i}">
                        <img src="assets/images/${gameType[i].formatLogo}.svg" alt="" width="40" height="20">
                    </div>
                    <div class="modeName">
                       ${ gameType[i].formatName}
                    </div>
                
                `
                let modeContainer = document.querySelector('.gameListBody')

                modeContainer.appendChild(modeDiv);


                const gameMode = document.querySelectorAll('.gameMode');
                gameMode.forEach(function(mode) {
                    mode.addEventListener('click', function(e) {
                        console.log('noice', e.target.id)

                        replaceMode(e.target.id);
                    })
                })


            }
            selectedMode(0);

            function selectedMode(modeIndex) {
                let gameOdds = gameType[modeIndex].allBets
                console.log('all odds', gameOdds)

                let newDiv = document.createElement('div')
                newDiv.classList.add('playerBodyContainer')
                let modeTitle = miniGameData[gameIndex].Types[modeIndex].allBets[0].title
                console.log('mode Name', modeTitle)
                newDiv.innerHTML = `
                <div class="playerPlaceholder">
        <div class="Player"></div>
    </div>
    <div class="playerBetPlace">
        <div class="playerOddsContainer">


            <div class="extraOddsContainer">
                <div class="extraOddsBody">
                    <div class="oddsHeader fontBlue"> <img src="assets/images/mode1.svg" alt="" width="40" height="20">${modeTitle}
                    </div>
                    <div class="oddsFooter">
                       
                    </div>
                </div>
                <div class="fillers"></div>


            </div>
            <div class="playerBetSlip">
                <div class="slipWrapper">
                    <div class="slipHeader">
                        <div class="HeaderTop">Betting Slip</div>

                    </div>

                    <div class="slipBody">
                        <div class="cartItemsWrapper">
                           
                        </div>
                    </div>
                    <div class="slipFooter">
                        <div class="configBtn">
                            <div class="emptyAll"><i class="bi bi-trash"></i>Empty all</div>
                            <div class="IncDec">
                            <div class="amount1">5,00</div>
                            <div class="amount1">10,00</div>
                            <div class="amount1">50,00</div>
                            <div class="amount1">1,00,00</div>
                            <div class="amount1">5,00,00</div>
                            <div class="amount1">10,00,00</div>
                            <div class="amount1">50,00,00</div>
                            <div class="maxAmnt">MAX</div>
                            <div class="resetAmnt">RESET</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Total Odds</div>
                                <div class="OddsNumber">x 1.00</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Est. Payout</div>
                                <div class="OddsNumberAmnt">0</div>
                            </div>

                        </div>
                        <div class="BetBtn">
                            <div class="btnNew">
                                Bet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
                `
                const gameBody = document.querySelector('.gameBody')
                gameBody.appendChild(newDiv);

                const totalOdds = miniGameData[gameIndex].Types[modeIndex].allBets[0].totalBlocks
                    // console.log('all odds here', totalOdds)
                    // console.log('here again')
                totalOdds.forEach((val, indx) => {

                    let allBetsDiv = document.createElement('div');
                    allBetsDiv.classList.add('finalOddWrapper');
                    allBetsDiv.innerHTML = `
    
    
    
                <div class="odds1" id="${gameIndex}-${modeIndex}-${indx}" >${val.oddName}   <span class="highlightOdd">
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
                const empty = document.querySelector('.emptyAll');
                empty.addEventListener('click', () => {
                    console.log('here')
                    cartItem = null;
                    reloadCard();
                })
            }

            function replaceMode(modeIndex) {
                let gameOdds = gameType[modeIndex].allBets
                console.log('all odds', gameOdds)
                let modeTitle = miniGameData[gameIndex].Types[modeIndex].allBets[0].title
                console.log(modeTitle)

                let oldComponent = document.querySelector('.playerBodyContainer')

                let newDiv = document.createElement('div')
                newDiv.classList.add('playerBodyContainer')
                newDiv.innerHTML = `
                <div class="playerPlaceholder">
        <div class="Player"></div>
    </div>
    <div class="playerBetPlace">
        <div class="playerOddsContainer">


            <div class="extraOddsContainer">
                <div class="extraOddsBody">
                    <div class="oddsHeader fontBlue"> <img src="assets/images/mode1.svg" alt="" width="40" height="20">${modeTitle}
                    </div>
                    <div class="oddsFooter">
                       
                    </div>
                </div>
                <div class="fillers"></div>


            </div>
            <div class="playerBetSlip">
                <div class="slipWrapper">
                    <div class="slipHeader">
                        <div class="HeaderTop">Betting Slip</div>

                    </div>

                    <div class="slipBody">
                        <div class="cartItemsWrapper">
                            
                        </div>
                    </div>
                    <div class="slipFooter">
                        <div class="configBtn">
                            <div class="emptyAll"><i class="bi bi-trash"></i>Empty all</div>
                            <div class="IncDec">
                            <div class="amount1">5,00</div>
                            <div class="amount1">10,00</div>
                            <div class="amount1">50,00</div>
                            <div class="amount1">1,00,00</div>
                            <div class="amount1">5,00,00</div>
                            <div class="amount1">10,00,00</div>
                            <div class="amount1">50,00,00</div>
                            <div class="maxAmnt">MAX</div>
                            <div class="resetAmnt">RESET</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Total Odds</div>
                                <div class="OddsNumber">x 1.00</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Est. Payout</div>
                                <div class="OddsNumberAmnt">0</div>
                            </div>

                        </div>
                        <div class="BetBtn">
                            <div class="btnNew">
                                Bet
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
                `
                const gameBody = document.querySelector('.gameBody')
                gameBody.replaceChild(newDiv, oldComponent);
                const totalOdds = miniGameData[gameIndex].Types[modeIndex].allBets[0].totalBlocks
                    // console.log('all odds here', totalOdds)
                    // console.log('here again')
                totalOdds.forEach((val, indx) => {
                    let allBetsDiv = document.createElement('div');
                    allBetsDiv.classList.add('finalOddWrapper');
                    allBetsDiv.innerHTML = `



                    <div class="odds1" id="${gameIndex}-${modeIndex}-${indx}" >${val.oddName}   <span class="highlightOdd">
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
                const empty = document.querySelector('.emptyAll');
                empty.addEventListener('click', () => {
                    console.log('here')
                    cartItem = null;
                    reloadCard();
                })

            }




        })
    })

    const loginBtn = document.querySelector('.loginBtn')
    const sliderMenu = document.querySelector('.sliderMenu')
    const sliderBackDrop = document.querySelector('.sliderMenuBackDrop')

    loginBtn.addEventListener('click', function() {
        sliderMenu.classList.add('sliderMenuActive')
        sliderBackDrop.style.display = 'block'
    })

    // sliderBackDrop.addEventListener('click', () => {
    //     sliderMenu.classList.remove('sliderMenuActive')
    //     sliderBackDrop.style.display = 'none'
    // })

    //Deposite Popup
    slideDeposite.addEventListener('click', () => {
        depositeDrop.style.display = 'flex';
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')

        const mainHeaderBtn1 = document.querySelector('.depositeUpHeader1')
        const mainHeaderBtn2 = document.querySelector('.depositeUpHeader2')

        mainHeaderBtn1.addEventListener('click', function() {

            mainHeaderBtn1.classList.add('depositeActive')

            mainHeaderBtn2.classList.remove('depositeActive')
            let noticeBody = document.querySelector('.noticeBody')
            let nextWindow = document.createElement('div')
            nextWindow.classList.add('depositeItem')
            let oldWindow = document.querySelector('.withdrawlItem')


            nextWindow.innerHTML = `
            <div class="menuItem">
                                <div class="dispIcon specDisp">Type</div>
                                <div class="dispIcon">
                                    <select name="options" id="" class="selectOptions2">
                                        <option value="">Cash</option>
                                        <option value="">Bitcoin</option>
                                        <option value="">Wireless</option>
                                    </select>
                                </div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Home of Depositor</div>
                                <div class="dispIcon">Helios Predator</div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Amount</div>
                                <div class="dispIcon inputSports"><input type="text" name="amount" id="" placeholder="Please type in the deposite amount" class="inputLeague"></div>
                            </div>
                            <div class="menuItem">
                                <div class="dispIcon specDisp">Apply for Bonus</div>
                                <div class="dispIcon"> <select name="options" id="" class="selectOptions2">
                                    <option value="">Cash</option>
                                    <option value="">Bitcoin</option>
                                    <option value="">Wireless</option>
                                </select></div>
                            </div>
                            <div class="depositeBtn2">
                                <div class="noticeBtn">Deposite Bill</div>
                            </div>
                            <div class="depositeHistory">
                                <div class="historyHeader">Deposite History</div>
                                <div class="headerItem">
                                    <div class="hd1">Select</div>
                                    <div class="hd2">Date</div>
                                    <div class="hd3">Type</div>
                                    <div class="hd4">Amount</div>
                                    <div class="hd5">Status</div>
                                </div>
                                <div class="footerItem">
                                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                                    <div class="hd2">2023-03-18 19:32:56</div>
                                    <div class="hd3">CASH</div>
                                    <div class="hd4">30,000</div>
                                    <div class="hd5 fontBlue">Approved</div>
                                </div>
                                <div class="footerItem">
                                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                                    <div class="hd2">2023-03-12 9:32:56</div>
                                    <div class="hd3">CASH</div>
                                    <div class="hd4">30,000</div>
                                    <div class="hd5 fontRed">Rejected</div>
                                </div>
                            </div>
        
           
            `

            noticeBody.replaceChild(nextWindow, oldWindow)

        })
        mainHeaderBtn2.addEventListener('click', function() {

            mainHeaderBtn2.classList.add('depositeActive')

            mainHeaderBtn1.classList.remove('depositeActive')
            let noticeBody = document.querySelector('.noticeBody')
            let nextWindow = document.createElement('div')
            nextWindow.classList.add('withdrawlItem')

            let oldWindow = document.querySelector('.depositeItem')
            console.log('ow', oldWindow)

            nextWindow.innerHTML = `
            <div class="menuItem">
                <div class="dispIcon specDisp">Balance</div>
                <div class="dispIcon">
                    14,500
                </div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Account Holder</div>
                <div class="dispIcon">Helios Predator</div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Amount</div>
                <div class="dispIcon inputSports"><input type="text" name="amount"  placeholder="Please type in the deposite amount" class="inputLeague"></div>
            </div>
            <div class="menuItem">
                <div class="dispIcon specDisp">Withdrawl Password</div>
    
                <div class="dispIcon inputSports"><input type="password" name="amount"  placeholder="Please enter your withdrawl password" class="inputLeague"></div>
    
            </div>
    
            <div class="depositeBtn2">
                <div class="noticeBtn">Withdrawl Request</div>
            </div>
            <div class="depositeHistory">
                <div class="historyHeader">Withdrawl History</div>
                <div class="headerItem">
                    <div class="hd1">Select</div>
                    <div class="hd2">Date</div>
                    <div class="hd3">Method</div>
                    <div class="hd4">Amount</div>
                    <div class="hd5">Status</div>
                </div>
                <div class="footerItem">
                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                    <div class="hd2">2023-03-18 19:32:56</div>
                    <div class="hd3">CASH</div>
                    <div class="hd4">30,000</div>
                    <div class="hd5 fontBlue">Approved</div>
                </div>
                <div class="footerItem">
                    <div class="hd1"><input type="checkbox" name="" id=""></div>
                    <div class="hd2">2023-03-12 9:32:56</div>
                    <div class="hd3">CASH</div>
                    <div class="hd4">30,000</div>
                    <div class="hd5 fontRed">Rejected</div>
                </div>
            </div>
        
           
            `

            noticeBody.replaceChild(nextWindow, oldWindow)

        })

        let depositeCancelBtn = document.querySelector('.depositeCancel')
        depositeCancelBtn.addEventListener('click', function() {
            depositeDrop.style.display = 'none'

        })

    })


    function setActiveButton(button) {
        // remove active class from all buttons
        const buttons = document.querySelectorAll('.odds1')
        buttons.forEach(btn => btn.classList.remove('betActive'));

        // add active class to the clicked button
        button.classList.add('betActive');
    }
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
            const matchTime = 'Live';
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

    col4.addEventListener('click', (event) => {
        // Check if the clicked element is a button with the desired class
        if (event.target.classList.contains('odds1')) {
            // Handle the button click here
            console.log('Button clicked:', event.target);
            setActiveButton(event.target);
            // event.target.classList.toggle('betActive');
            // Toggle the 'button-active' class on the clicked button element

            const modeIndex = event.target.id.split('-')[1]
            const gameIndex = event.target.id.split('-')[0]
            const id = event.target.id.substring(0, 3);
            // const oddIndex = event.target.id.split('-')[2]
            //   const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = miniGameData[gameIndex].Types[modeIndex].allBets[0].title;
            const leagueLogo = miniGameData[gameIndex].Types[modeIndex].formatLogo;
            const fullGame = miniGameData[gameIndex].Types[modeIndex].formatName;
            // const matchType = '1x2';
            // const matchTime = 'Live';
            const rawContent = event.target.textContent.split(' ')
            const cleanedArr = rawContent.filter(str => str.trim() !== '');
            const selectedOdd = parseFloat(cleanedArr.pop());
            const teamName = cleanedArr.join(' ');









            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: teamName,
                fullGame: fullGame,

            };
            cartItem = newObject









            // if (dataArray.some(obj => obj.id === id)) {
            //     dataArray = dataArray.filter(obj => obj.id !== id);
            //     event.target.classList.remove('betActive');
            // } else {
            //     dataArray.push(newObject);
            //     event.target.classList.add('betActive');
            // }
            reloadCard();
            // push the new object into the array
            //  console.log(dataArray)

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