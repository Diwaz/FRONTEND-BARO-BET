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

















let consecutiveHighNumber = 0;
let consecutiveLowNumber = 0;
let consecutiveOdd = 0;
let consecutiveEven = 0;



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




let dataArray = [];
let cartItem = null;
let diceHistory = [];




function replaceSidebar(leagueIndx, gameIndx) {
    // let gameObject = soccerData[leagueIndx].League.Game[gameIndx];
    // let leagueObject = soccerData[leagueIndx].League
    // let allBets = soccerData[leagueIndx].League.Game[gameIndx].allBets;


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
        //remove this cmnt
        //col4.replaceChild(newComponent, oldComponent)

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

function generateHistoryTable1(number) {


    // get the box element
    let box = document.querySelector('.box');

    // check if the generated number is less than 4
    if (number < 4) {
        // if the number is less than 4 and there have been less than 6 consecutive low numbers, append it to the last element
        consecutiveHighNumber = 0

        if (consecutiveLowNumber == 0) {
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = number;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveLowNumber++;

        } else if (consecutiveLowNumber < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = number;
            lastElement.appendChild(item);
            consecutiveLowNumber++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = number;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveLowNumber = 0;
        }
    } else {
        consecutiveLowNumber = 0;

        if (consecutiveHighNumber == 0) {
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = number;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber++;

        } else if (consecutiveHighNumber < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = number;
            lastElement.appendChild(item);
            consecutiveHighNumber++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = number;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber = 0;
        }


    }

}

function generateHistoryTable2(number) {


    // get the box element
    let box = document.querySelector('.boxOU');


    // check if the generated number is less than 4
    if (number % 2 === 0) {
        // if the number is less than 4 and there have been less than 6 consecutive low numbers, append it to the last element
        consecutiveOdd = 0;
        console.log('even', consecutiveEven)

        if (consecutiveEven == 0) {
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = 'Even';
            element.appendChild(item);
            box.appendChild(element);
            consecutiveEven++;

        } else if (consecutiveEven < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = 'Even';
            lastElement.appendChild(item);
            consecutiveEven++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = 'Even';
            element.appendChild(item);
            box.appendChild(element);
            consecutiveEven = 0;
        }
    } else {
        consecutiveEven = 0;
        console.log('odd', consecutiveOdd)
        if (consecutiveOdd == 0) {
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = 'Odd';
            element.appendChild(item);
            box.appendChild(element);
            consecutiveOdd++;

        } else if (consecutiveOdd < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'odds1';
            item.innerHTML = 'Odd';
            lastElement.appendChild(item);
            consecutiveOdd++;
        } else if (consecutiveOdd = 6) {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'item';
            item.innerHTML = 'Odd';
            element.appendChild(item);
            box.appendChild(element);
            consecutiveOdd = 0;
        }


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
            //remove this cmnt
            //  gamesContainer.appendChild(loadGames)

    })
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
            //noticeBody.appendChild(newsDiv)
    })

    //     soccerData.forEach((value, key) => {


    //         //For leagues
    //         let newDiv = document.createElement('div');
    //         newDiv.classList.add('leagueTable');
    //         newDiv.innerHTML = `
    //         <div class="leagueHeader bbcolor">
    //         <div class="leagueCol1">

    //             <img src="assets/images/${value.League.leagueFlag}.png" alt="" width="19" height="14" class="representLogo"> ${value.League.leagueName}</div>
    //         <div class="leagueCol2">

    //         <div class="betHeader">Home </div>
    //         <div class="betHeader">Draw</div>
    //         <div class="bHeader">Away</div>
    //         </div>
    //         <div class="leagueCol3"> Handicap
    //         </div>
    //         <div class="leagueCol4">Over/Under
    //         </div>
    //     </div>
    //    `;

    //         // leagueTable.appendChild(newDiv);

    //         let games = value.League.Game;
    //         //  console.log(games)
    //         games.forEach((val, indx) => {
    //             // For Games
    //             let gamesDiv = document.createElement('div');
    //             gamesDiv.classList.add('leagueFooter');
    //             gamesDiv.innerHTML = `
    //             <div class="gameCol1" id='${indx}-${key}'>

    //             <div class="teamRow1">
    //                 <div class="nestedRow"> <img src="assets/images/${val.homeLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.home}</div>
    //                 <div class="nestedRow fontBlue">${val.homeGoal}</div>
    //             </div>
    //             <div class="teamRow1">
    //                 <div class="nestedRow"> <img src="assets/images/${val.awayLogo}.png" alt="" width="14" height="14" class="representLogo"> ${val.away}</div>
    //                 <div class="nestedRow fontBlue">${val.awayGoal}</div>
    //             </div>
    //             <div class="teamRow1">
    //                 <div class="nestedRow specWidth"><i class="bi bi-stopwatch "></i> 1st half of <span class="fontBlue"> 37:31'</span></div>
    //                 <div class="nestedRow fontBlue">+48</div>
    //             </div>

    //         </div>
    //         <div class="gameCol2">
    //             <div class="betOdds" id="${indx}-${key}-1">

    //                 ${val.bets[0]}
    //             </div>
    //             <div class="betOdds" id="${indx}-${key}-2">

    //                 ${val.bets[1]}</div>
    //             <div class="betOdds" id="${indx}-${key}-3">

    //                 ${val.bets[2]}</div>
    //         </div>
    //         <div class="gameCol3">
    //             <div class="handiOdds">
    //                 <div class="nestedOdds fontOrange">${val.handiBets[0]}</div>
    //                 <div class="nestedOdds">${val.handiBets[1]}</div>
    //             </div>
    //             <div class="handiOdds">
    //                 <div class="nestedOdds fontOrange">${val.handiBets[2]}</div>
    //                 <div class="nestedOdds">${val.handiBets[3]}</div>
    //             </div>


    //         </div>
    //         <div class="gameCol4">
    //             <div class="handiOdds">
    //                 <div class="nestedOdds fontRed">${val.handiBets[4]}</div>
    //                 <div class="nestedOdds">${val.handiBets[5]}</div>
    //             </div>
    //             <div class="handiOdds">
    //                 <div class="nestedOdds fontBlue">${val.handiBets[6]}</div>
    //                 <div class="nestedOdds">${val.handiBets[7]}</div>
    //             </div>

    //         </div>
    //         <div class="gameOdds"></div>
    //    `;
    //             //  leagueTable.appendChild(gamesDiv);

    //             // let allBets = val.allBets;
    //             // console.log(allBets)

    //             // allBets.forEach((v, k) => {
    //             //     // For Games
    //             //     let allBetsDiv = document.createElement('div');
    //             //     allBetsDiv.classList.add('extraOddsBody');
    //             //     allBetsDiv.innerHTML = `
    //             //                 <div class="oddsHeader fontBlue">1x2</div>
    //             //                 <div class="oddsFooter">
    //             //                     <div class="odds1">FCB 1.90
    //             //                     </div>

    //             //                     <div class="odds1">RMA 4.10</div>
    //             //                 </div>`;

    //             //     ExtraOddsWrapper.appendChild(allBetsDiv);


    //             // })

    //         })


    //     })


}
initApp();


function reloadCard() {
    const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
    const OddsNumber = document.querySelector('.OddsNumber');
    cartItemsWrapper.innerHTML = ''

    let newDiv = document.createElement('div');
    newDiv.classList.add('cartItem')
    newDiv.innerHTML = `
            <div class="line1">
        <div class="leftWrapper">

            <img src="assets/images/${cartItem.leagueLogo}.svg" alt="" width="14" height="14" class="representLogo">${cartItem.leagueName}
        </div>

        <div class="exitLogo">
            <i class="bi bi-x-lg"></i>
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

}

const diceBtn = document.querySelector('.diceGenerator')
diceBtn.addEventListener('click', function() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var dice = document.querySelector('.dice')
    dice.innerHTML = `
    
    <img src="assets/images/dice-${randomNumber}.png" alt="" width="120" height="120" class="diceLogo">
    `
    var resultElement = document.querySelector(".diceNumber");
    diceHistory.push(randomNumber);
    resultElement.innerHTML = randomNumber;
    generateHistoryTable1(randomNumber);
    generateHistoryTable2(randomNumber);
    //console.log(diceHistory)

})



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
                // noticeBody.appendChild(newDiv)


        })
    })








    singleGame.forEach(function(game) {
        game.addEventListener('click', function(event) {



            const gameIndex = event.target.id;
            console.log(miniGameData[gameIndex].Types)

            for (let i = 0; i < singleGame.length; i++) {
                singleGame[i].style.display = 'none'
            }




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
                //remove point
                //  gamesContainer.appendChild(newDiv)

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

                //remove this cmnt
                // modeContainer.appendChild(modeDiv);


                const gameMode = document.querySelectorAll('.gameMode');
                gameMode.forEach(function(mode) {
                    mode.addEventListener('click', function(e) {
                        console.log('noice', e.target.id)

                        replaceMode(e.target.id);
                    })
                })


            }
            // selectedMode(0);

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
                                <div class="ControlWrapper">
                                    <div class="inc"><i class="bi bi-dash"></i></div>
                                    <div class="inc"><i class="bi bi-plus"></i></div>
                                    <div class="amount">Amount</div>
                                    <div class="erase"><i class="bi bi-eraser-fill"></i></div>
                                </div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Total Odds</div>
                                <div class="OddsNumber">x 1.00</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Est. Payout</div>
                                <div class="OddsNumber">0</div>
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

                        //remove this
                        oddsFooter[i].appendChild(allBetsDiv)
                    }
                    //remove this comment

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
                                <div class="ControlWrapper">
                                    <div class="inc"><i class="bi bi-dash"></i></div>
                                    <div class="inc"><i class="bi bi-plus"></i></div>
                                    <div class="amount">Amount</div>
                                    <div class="erase"><i class="bi bi-eraser-fill"></i></div>
                                </div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Total Odds</div>
                                <div class="OddsNumber">x 1.00</div>
                            </div>
                            <div class="betControl">
                                <div class="totalOdds">Est. Payout</div>
                                <div class="OddsNumber">0</div>
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



            }




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

            reloadCard();


        }
    });






    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element





        });
    });

});