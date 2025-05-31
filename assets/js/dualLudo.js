const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');
const leagueTable = document.querySelector('.gamesTable');
const handiOdds = document.querySelector('.nestedOdds');
const betOdds = document.querySelector('.betOdds');
const extraOdd = document.querySelector('.extraOdd');
const cartItemsWrapper = document.querySelector('.cartItemsWrapper');
const cartItemsWrapper2 = document.querySelector('.cartItemsWrapper2');


const emptyCart = document.querySelector('.emptyCart');
const emptyCart2 = document.querySelector('.emptyCart2');
const selectOptions = document.querySelector('.selectOptions');
const col4 = document.querySelector('.column4');
const col42 = document.querySelector('.column42');
const ExtraOddsWrapper = document.querySelector('.ExtraOddsWrapper');
const noticeCancelBtn = document.querySelector('.noticeCancel');
const depositeCancelBtn = document.querySelector('.depositeCancel');
const OddsNumber = document.querySelector('.OddsNumber');
const backDrop = document.querySelector('.my-backdrop');
const depositeBackDrop = document.querySelector('.depositeDrop');
const noticeBody = document.querySelector('.noticeBody');
const cartWrapper = document.querySelector('.cartWrapper');
const cartWrapper2 = document.querySelector('.cartWrapper2');
const cartBackdrop = document.querySelector('.cartBackdrop');
const cartBackdrop2 = document.querySelector('.cartBackdrop2');
const col3 = document.querySelector('.column3');
const col32 = document.querySelector('.column32');
const gamesContainer = document.querySelector('.gamesContainer')
const slideDeposite = document.querySelector('.slideDeposite')
const depositeDrop = document.querySelector('.depositeDrop')
const mainHeaderBtn1 = document.querySelector('.depositeUpHeader1')


const mainHeaderBtn2 = document.querySelector('.depositeUpHeader2')

const ludo1 = document.querySelector('.ludo1')
const ludo2 = document.querySelector('.ludo2')
const wrapper1 = document.querySelector('.bodyWrapper')
const wrapper2 = document.querySelector('.bodyWrapper2')
const slipCancel = document.querySelector('.slipCancel')
const slipCancel2 = document.querySelector('.slipCancel2')




















let consecutiveHighNumber = 0;
let consecutiveLowNumber = 0;
let consecutiveOdd = 0;
let consecutiveEven = 0;
let consecutiveHighNumber2 = 0;
let consecutiveLowNumber2 = 0;
let consecutiveOdd2 = 0;
let consecutiveEven2 = 0;
let totalHistory = 0;
let totalHistory2 = 0;
let selectedAmount = 0;


let ludoData1 = {
    Under: 3.2,
    Over: 2.4,
    Odd: 2.7,
    Even: 2.8,
}
let ludoData2 = {
    dice1: 2,
    dice2: 3,
    dice3: 4,
    dice4: 5,
    dice5: 1,
    dice6: 2,
}





let dataArray = [];
let dataArray2 = [];
let cartItem = null;
let diceHistory = [];



//LUDO 2


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


//HISTORY TABLE
function generateHistoryTable222(number) {

    let historyBody = document.querySelector('.historyBody2')
    let newHistory = document.createElement('div')
    newHistory.classList = 'singleHistory'
    newHistory.innerHTML = `
    <div class="historyCol1">${totalHistory2}</div>
        <div class="historyCol1">
        <i class="bi bi-caret-${number < 4  ?  'down' : 'up'}-fill ${number < 4  ?  'Under' : 'Over'}"></i>
        
         </div>
        <div class="historyCol1 ${number % 2 == 0 ?  'Even' : 'Odd'}">${number % 2 == 0 ?  'E' : 'O'}</div>
        <div class="historyCol1">
            <i class="bi bi-dice-${number}-fill"></i>
        </div>
    `
    historyBody.appendChild(newHistory)
    totalHistory2 = totalHistory2 + 1
}

//OVER UNDER

function generateHistoryTable12(number) {


    // get the box element
    let box = document.querySelector('.box2');

    // check if the generated number is less than 4
    if (number < 4) {
        // if the number is less than 4 and there have been less than 6 consecutive low numbers, append it to the last element
        consecutiveHighNumber2 = 0

        if (consecutiveLowNumber2 == 0) {
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveLowNumber2++;

        } else if (consecutiveLowNumber2 < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveLowNumber2++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveLowNumber2 = 0;
        }
    } else {
        consecutiveLowNumber2 = 0;

        if (consecutiveHighNumber2 == 0) {
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber2++;

        } else if (consecutiveHighNumber2 < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveHighNumber2++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber2 = 0;
        }


    }

}

//ODD EVEN
function generateHistoryTable22(number) {


    // get the box element
    let box2 = document.querySelector('.boxOU2');


    // check if the generated number is less than 4
    if (number % 2 === 0) {
        // if the number is less than 4 and there have been less than 6 consecutive low numbers, append it to the last element
        consecutiveOdd2 = 0;
        console.log('even', consecutiveEven2)

        if (consecutiveEven2 == 0) {
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `

            element.appendChild(item);
            box2.appendChild(element);
            consecutiveEven2++;

        } else if (consecutiveEven2 < 6) {
            const lastElement = box2.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveEven2++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `;
            element.appendChild(item);
            box2.appendChild(element);
            consecutiveEven2 = 0;
        }
    } else {
        consecutiveEven2 = 0;
        console.log('odd', consecutiveOdd2)
        if (consecutiveOdd2 == 0) {
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            element.appendChild(item);
            box2.appendChild(element);
            consecutiveOdd2++;

        } else if (consecutiveOdd2 < 6) {
            const lastElement = box2.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveOdd2++;
        } else if (consecutiveOdd2 == 6) {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element2';
            const item = document.createElement('div');
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            element.appendChild(item);
            box2.appendChild(element);
            consecutiveOdd2 = 0;
        }


    }

}




//LUDO 1

//History Table
function generateHistoryTable(number) {

    let historyBody = document.querySelector('.historyBody')
    let newHistory = document.createElement('div')
    newHistory.classList = 'singleHistory'
    newHistory.innerHTML = `
    <div class="historyCol1">${totalHistory}</div>
        <div class="historyCol1">
        <i class="bi bi-caret-${number < 4  ?  'down' : 'up'}-fill ${number < 4  ?  'Under' : 'Over'}"></i>
        
         </div>
        <div class="historyCol1 ${number % 2 == 0 ?  'Even' : 'Odd'}">${number % 2 == 0 ?  'E' : 'O'}</div>
        <div class="historyCol1">
            <i class="bi bi-dice-${number}-fill"></i>
        </div>
    `
    historyBody.appendChild(newHistory)
    totalHistory = totalHistory + 1
}

//Over Under
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
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveLowNumber++;

        } else if (consecutiveLowNumber < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveLowNumber++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'oddsUnder';
            item.innerHTML = `
            <div class='oddsCollector collectUnder'>
           ${number}
            </div>
            `;
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
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber++;

        } else if (consecutiveHighNumber < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveHighNumber++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'oddsOver';
            item.innerHTML = `
            <div class='oddsCollector collectOver'>
           ${number}
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveHighNumber = 0;
        }


    }

}


//Odd Even
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
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `

            element.appendChild(item);
            box.appendChild(element);
            consecutiveEven++;

        } else if (consecutiveEven < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveEven++;
        } else {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'oddsEven';
            item.innerHTML = `
            <div class='oddsCollector collectEven'>
            E
            </div>
            `;
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
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveOdd++;

        } else if (consecutiveOdd < 6) {
            const lastElement = box.lastElementChild;
            const item = document.createElement('div');
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            lastElement.appendChild(item);
            consecutiveOdd++;
        } else if (consecutiveOdd == 6) {
            // if there have been 6 consecutive low numbers, append a new element and reset the counter
            const element = document.createElement('div');
            element.className = 'element';
            const item = document.createElement('div');
            item.className = 'oddsOdd';
            item.innerHTML = `
            <div class='oddsCollector collectOdd'>
            O
            </div>
            `;
            element.appendChild(item);
            box.appendChild(element);
            consecutiveOdd = 0;
        }


    }

}

function initApp() {
    let bodyWrapper1 = document.querySelector('.extraOddsBody1')
    let bodyWrapper2 = document.querySelector('.extraOddsBody3')

    let bodyWrapper3 = document.querySelector('.extraOddsBody12')
    let bodyWrapper4 = document.querySelector('.extraOddsBody32')

    let ludoOdds1Div = document.createElement('div')
    ludoOdds1Div.classList = 'oddsFooter'
    ludoOdds1Div.innerHTML = `
    <div class="oddsSelect" id="1">Under <span class="highlightOdd">
    ${ludoData1.Under}
    </span>
</div>
<div class="oddsSelect" id="1">Over <span class="highlightOdd">
${ludoData1.Over}
    </span>
</div>
<div class="oddsSelect" id="2">Odd <span class="highlightOdd">
${ludoData1.Odd}
    </span>
</div>
<div class="oddsSelect" id="2">Even <span class="highlightOdd">
${ludoData1.Even}
    </span>
</div>
    `
    let ludoOdds3Div = document.createElement('div')
    ludoOdds3Div.classList = 'oddsFooter'
    ludoOdds3Div.innerHTML = `
    <div class="oddsSelect2" id="1">Under <span class="highlightOdd">
    ${ludoData1.Under}
    </span>
</div>
<div class="oddsSelect2" id="1">Over <span class="highlightOdd">
${ludoData1.Over}
    </span>
</div>
<div class="oddsSelect2" id="2">Odd <span class="highlightOdd">
${ludoData1.Odd}
    </span>
</div>
<div class="oddsSelect2" id="2">Even <span class="highlightOdd">
${ludoData1.Even}
    </span>
</div>
    `
    bodyWrapper3.appendChild(ludoOdds3Div);
    bodyWrapper1.appendChild(ludoOdds1Div);

    let ludoOdds2Div = document.createElement('div')
    ludoOdds2Div.classList = 'oddsFooter'
    ludoOdds2Div.innerHTML = `
    <div class="oddsSelect dice" id="3-1"><i class="bi bi-dice-1-fill dice1s"></i> <span class="highlightOdd">
    ${ludoData2.dice1}
    </span>
</div>
<div class="oddsSelect dice" id="3-2"><i class="bi bi-dice-2-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice2}
    </span>
</div>
<div class="oddsSelect dice" id="3-3"><i class="bi bi-dice-3-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice3}
    </span>
</div>
<div class="oddsSelect dice" id="3-4"><i class="bi bi-dice-4-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice4}
    </span>
</div>
<div class="oddsSelect dice" id="3-5"><i class="bi bi-dice-5-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice5}
    </span>
</div>
<div class="oddsSelect dice" id="3-6"><i class="bi bi-dice-6-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice6}
    </span>
</div>
    `
    let ludoOdds4Div = document.createElement('div')
    ludoOdds4Div.classList = 'oddsFooter'
    ludoOdds4Div.innerHTML = `
    <div class="oddsSelect2 dice" id="3-1"><i class="bi bi-dice-1-fill dice1s"></i> <span class="highlightOdd">
    ${ludoData2.dice1}
    </span>
</div>
<div class="oddsSelect2 dice" id="3-2"><i class="bi bi-dice-2-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice2}
    </span>
</div>
<div class="oddsSelect2 dice" id="3-3"><i class="bi bi-dice-3-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice3}
    </span>
</div>
<div class="oddsSelect2 dice" id="3-4"><i class="bi bi-dice-4-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice4}
    </span>
</div>
<div class="oddsSelect2 dice" id="3-5"><i class="bi bi-dice-5-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice5}
    </span>
</div>
<div class="oddsSelect2 dice" id="3-6"><i class="bi bi-dice-6-fill dice1s"></i> <span class="highlightOdd">
${ludoData2.dice6}
    </span>
</div>
    `
    bodyWrapper2.appendChild(ludoOdds2Div);
    bodyWrapper4.appendChild(ludoOdds4Div);



}
initApp();


function reloadCard() {
    cartItemsWrapper.innerHTML = ''
    let cartNumber = document.querySelector('.cartNumber')

    let totalPayout = document.querySelector('.OddsNumberAmnt')
    let totalOdds = 1;
    let totalPrice = selectedAmount;
    cartNumber.innerHTML = dataArray.length
    if (dataArray.length > 0) {
        emptyCart.style.display = 'none';
    } else {
        emptyCart.style.display = 'flex'
    }

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
   
    <div class="line3">${value.fullGame}</div>
    <div class="line4 fontBlue"> Dice ${value.teamName}
    <div class="oddsLine fontBlue">
    ${value.odds}
</div>
    </div>
                `;
            cartItemsWrapper.appendChild(newDiv);
        }
    })
    OddsNumber.innerText = totalOdds.toLocaleString();
    totalPayout.innerHTML = totalPrice * totalOdds;

}

function reloadCard2() {
    cartItemsWrapper2.innerHTML = ''
    let cartNumber2 = document.querySelector('.cartNumber2')

    let totalPayout = document.querySelector('.OddsNumberAmnt2')
    let totalOdds = 1;
    let totalPrice = selectedAmount;
    cartNumber2.innerHTML = dataArray2.length
    if (dataArray2.length > 0) {
        emptyCart2.style.display = 'none';
    } else {
        emptyCart2.style.display = 'flex'
    }

    dataArray2.forEach((value, key) => {
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

        <div class="exitLogo2">
            <i class="bi bi-x-lg"></i>
        </div>
    </div>
   
    <div class="line3">${value.fullGame}</div>
    <div class="line4 fontBlue"> Dice ${value.teamName}
    <div class="oddsLine fontBlue">
    ${value.odds}
</div>
    </div>
                `;
            cartItemsWrapper2.appendChild(newDiv);
        }
    })
    OddsNumber.innerText = totalOdds.toLocaleString();
    totalPayout.innerHTML = totalPrice * totalOdds;

}

const diceBtn = document.querySelector('.diceGenerator')
const diceBtn2 = document.querySelector('.diceGenerator2')
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
        generateHistoryTable(randomNumber);
        //console.log(diceHistory)

    }

)
diceBtn2.addEventListener('click', function() {

        var randomNumber = Math.floor(Math.random() * 6) + 1;
        var dice = document.querySelector('.dice2')
        dice.innerHTML = `

    <img src="assets/images/dice-${randomNumber}.png" alt="" width="120" height="120" class="diceLogo">
    `
        var resultElement = document.querySelector(".diceNumber2");
        diceHistory.push(randomNumber);
        resultElement.innerHTML = randomNumber;
        generateHistoryTable12(randomNumber);
        generateHistoryTable22(randomNumber);
        generateHistoryTable222(randomNumber);
        //console.log(diceHistory)

    }

)

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


const ddBtn = document.querySelector('.ddBtn')
const ddBtn2 = document.querySelector('.ddBtn2')
const ddBtn3 = document.querySelector('.ddBtn3')
const ddBtn4 = document.querySelector('.ddBtn4')

const oddsFooter = document.querySelector('.oddsFooter2')
const oddsFooter2 = document.querySelector('.oddsFooter22')

const oddsFooter3 = document.querySelector('.oddsFooter3')
const oddsFooter33 = document.querySelector('.oddsFooter33')
ddBtn.addEventListener('click', () => {

    oddsFooter.classList.toggle('oddsFooterActive')
    ddBtn.classList.toggle('ddActive')
})
ddBtn2.addEventListener('click', () => {

    oddsFooter2.classList.toggle('oddsFooterActive')
    ddBtn2.classList.toggle('ddActive')
})
ddBtn3.addEventListener('click', () => {

    oddsFooter3.classList.toggle('oddsFooterActive')
    ddBtn3.classList.toggle('ddActive')
})
ddBtn4.addEventListener('click', () => {

    oddsFooter33.classList.toggle('oddsFooterActive')
    ddBtn4.classList.toggle('ddActive')
})


cartWrapper.addEventListener('click', function() {
    cartBackdrop.style.display = 'flex'
    col3.style.display = 'flex'
    col3.style.zIndex = 3

    slipCancel.addEventListener('click', () => {
        cartBackdrop.style.display = 'none'
        col3.style.display = ''
        col3.style.zIndex = 1
    })

})
cartWrapper2.addEventListener('click', function() {
    cartBackdrop2.style.display = 'flex'
    col32.style.display = 'flex'
    col32.style.zIndex = 3

})

cartWrapper2.addEventListener('click', function() {
    cartBackdrop2.style.display = 'flex'
    col32.style.display = 'flex'
    col32.style.zIndex = 3

    slipCancel2.addEventListener('click', () => {
        cartBackdrop2.style.display = 'none'
        col32.style.display = ''
        col32.style.zIndex = 1
    })

})


cartBackdrop.addEventListener('click', function() {
    cartBackdrop.style.display = 'none'
    col3.style.display = ''
    col3.style.zIndex = 1
})
cartBackdrop2.addEventListener('click', function() {
    cartBackdrop2.style.display = 'none'
    col32.style.display = ''
    col32.style.zIndex = 1
})
ludo1.addEventListener('click', () => {
    wrapper1.style.display = 'flex'
    wrapper2.style.display = 'none'
    ludo1.classList.add('betActive')
    ludo2.classList.remove('betActive')
})
ludo2.addEventListener('click', () => {
    wrapper1.style.display = 'none'
    wrapper2.style.display = 'flex'
    ludo2.classList.add('betActive')
    ludo1.classList.remove('betActive')
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
    const empty2 = document.querySelector('.emptyAll2');
    empty.addEventListener('click', () => {
        const popup = document.querySelector('.limitPopUp')
        popup.style.display = 'none'
        dataArray.splice(0, dataArray.length)
        reloadCard();
    })
    empty2.addEventListener('click', () => {
        const popup = document.querySelector('.limitPopUp2')
        popup.style.display = 'none'
        dataArray2.splice(0, dataArray2.length)
        reloadCard2();
    })
    const slipBody = document.querySelector('.slipBody')
    slipBody.addEventListener('click', (event) => {

        if (event.target.parentNode.matches('.exitLogo')) {
            const popup = document.querySelector('.limitPopUp')
            popup.style.display = 'none'
            let id = event.target.parentNode.id;
            console.log('from here', id)
            dataArray.splice(id, 1)
            reloadCard();
        } else {
            console.log('sad', event.target)
        }
    })
    const slipBody2 = document.querySelector('.slipBody2')
    slipBody2.addEventListener('click', (event) => {

        if (event.target.parentNode.matches('.exitLogo2')) {
            const popup = document.querySelector('.limitPopUp2')
            popup.style.display = 'none'
            let id = event.target.parentNode.id;
            console.log('from here', id)
            dataArray2.splice(id, 1)
            reloadCard2();
        } else {
            console.log('sad', event.target)
        }
    })









    selectGame.forEach(function(selectGame) {
        selectGame.addEventListener('click', function(event) {

            const gameIndex = event.target.parentNode.id.split('-')[0]
            const leagueIndex = event.target.parentNode.id.split('-')[1]
                //  console.log(gameIndex, leagueIndex)
            replaceSidebar(leagueIndex, gameIndex);

        })
    })
    console.log(upperItem)






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
                                <select name="options" id="" class="selectOptions">
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
                            <div class="dispIcon"> <select name="options" id="" class="selectOptions">
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
        // backDrop.addEventListener('click', () => {
        //     backDrop.style.display = 'none'
        // })


    depositeCancelBtn.addEventListener('click', function() {
            depositeBackDrop.style.display = 'none'

        })
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
            let noticeBody = document.querySelector('.noticeBodyNew')
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
            let noticeBody = document.querySelector('.noticeBodyNew')
            let nextWindow = document.createElement('div')
            nextWindow.classList.add('withdrawlItem')
            let oldWindow = document.querySelector('.depositeItem')


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
        const buttons = document.querySelectorAll('.oddsSelect')
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
        if (event.target.classList.contains('oddsSelect')) {
            // Handle the button click here
            console.log('Button clicked:', event.target);
            setActiveButton(event.target);
            // event.target.classList.toggle('betActive');
            // Toggle the 'button-active' class on the clicked button element

            const modeIndex = event.target.id

            console.log(modeIndex)
            const id = event.target.id.split('-')[0];
            // const oddIndex = event.target.id.split('-')[2]
            //   const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = 'Ludo Champion';
            const leagueLogo = 'dice-1';
            const fullGame = 'Dice Prediction';
            // const matchType = '1x2';
            // const matchTime = 'Live';
            let selectedOdd = 0;
            let teamName = '';
            if (event.target.classList.contains('dice')) {
                teamName = event.target.id.split('-')[1]
                const rawContent = event.target.textContent.split(' ')
                const cleanedArr = rawContent.filter(str => str.trim() !== '');
                selectedOdd = parseFloat(cleanedArr.pop());

            } else {
                const rawContent = event.target.textContent.split(' ')
                const cleanedArr = rawContent.filter(str => str.trim() !== '');
                selectedOdd = parseFloat(cleanedArr.pop());
                teamName = cleanedArr.join(' ');
            }

            console.log('sO', id)
            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: teamName,
                fullGame: fullGame,

            };
            const popup = document.querySelector('.limitPopUp')
            if (dataArray.length < 2) {
                popup.style.display = 'none'
                if (dataArray.some(obj => obj.id === id)) {

                    dataArray = dataArray.filter(obj => obj.id !== id);
                    dataArray.push(newObject);

                } else {
                    dataArray.push(newObject);
                }
            } else {
                popup.style.display = 'flex'
            }



            reloadCard();


        }
    });
    col42.addEventListener('click', (event) => {
        // Check if the clicked element is a button with the desired class
        if (event.target.classList.contains('oddsSelect2')) {
            // Handle the button click here
            console.log('Button clicked:', event.target);
            setActiveButton(event.target);
            // event.target.classList.toggle('betActive');
            // Toggle the 'button-active' class on the clicked button element

            const modeIndex = event.target.id

            console.log(modeIndex)
            const id = event.target.id.split('-')[0];
            // const oddIndex = event.target.id.split('-')[2]
            //   const teamName = oddIndex == 1 ? soccerData[leagueIndex].League.Game[gameIndex].home : oddIndex == 3 ? soccerData[leagueIndex].League.Game[gameIndex].away : 'draw';
            const leagueName = 'Ludo Champion';
            const leagueLogo = 'dice-1';
            const fullGame = 'Dice Prediction';
            // const matchType = '1x2';
            // const matchTime = 'Live';
            let selectedOdd = 0;
            let teamName = '';
            if (event.target.classList.contains('dice')) {
                teamName = event.target.id.split('-')[1]
                const rawContent = event.target.textContent.split(' ')
                const cleanedArr = rawContent.filter(str => str.trim() !== '');
                selectedOdd = parseFloat(cleanedArr.pop());

            } else {
                const rawContent = event.target.textContent.split(' ')
                const cleanedArr = rawContent.filter(str => str.trim() !== '');
                selectedOdd = parseFloat(cleanedArr.pop());
                teamName = cleanedArr.join(' ');
            }

            console.log('sO', id)
            let newObject = {
                id: id, // generate unique id 
                leagueLogo: leagueLogo,
                leagueName: leagueName,
                odds: selectedOdd,
                teamName: teamName,
                fullGame: fullGame,

            };
            const popup = document.querySelector('.limitPopUp2')
            if (dataArray2.length < 2) {
                popup.style.display = 'none'
                if (dataArray2.some(obj => obj.id === id)) {

                    dataArray2 = dataArray2.filter(obj => obj.id !== id);
                    dataArray2.push(newObject);

                } else {
                    dataArray2.push(newObject);
                }
            } else {
                popup.style.display = 'flex'
            }



            reloadCard2();


        }
    });






    extraOdd.forEach(function(extraOdd) {
        extraOdd.addEventListener('click', function(event) {
            // Toggle the 'button-active' class on the clicked button element





        });
    });

});