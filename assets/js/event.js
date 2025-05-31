const boardBody = document.querySelector('.boardBody');
const noticeWrapper = document.querySelector('.noticeViewWrapper');
const slideDeposite = document.querySelector('.slideDeposite')
const depositeDrop = document.querySelector('.depositeDrop')


let boardData = [{
        msgType: 'notification',
        title: 'Bank check Type Information',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',
        images: 'eventItem1',
        thumbnail: 'event2',
        color: 'Red'
    },
    {
        msgType: 'RULE',
        title: 'Deposite LIMIT',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',
        images: 'eventItem2',
        thumbnail: 'event3',
        color: 'Red'
    },
    {
        msgType: 'HELP',
        title: 'Withdraw Failed',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',
        images: 'eventItem5',
        thumbnail: 'event4',
        color: 'Red'
    },

]

function renderSidebar(msgIndex) {




    let boardTitle = boardData[msgIndex].title
    let description = boardData[msgIndex].message
    let images = boardData[msgIndex].images


    let detailDiv = document.createElement('div');
    detailDiv.classList.add('noticeViewer');
    detailDiv.innerHTML = `
    <div class="viewHeader ">${boardTitle}</div>
    <div class="viewBody">
        <div class="newsHeading ">${boardTitle}</div>
        <div class="newsContent">
        
        <img src="assets/images/${images}.png" class="d-inline-block align-text-top" width="85%" height="100%">
       
    </div>
    </div>
        </div>
    </div>
    `

    // sidebar.replaceChild(detailDiv, detailDiv);
    //remove this comment
    noticeWrapper.appendChild(detailDiv);

}

function replaceSidebar(msgIndex) {
    let boardTitle = boardData[msgIndex].title
    let images = boardData[msgIndex].images

    let oldElement = document.querySelector('.noticeViewer')
    let detailDiv = document.createElement('div');
    detailDiv.classList.add('noticeViewer');

    detailDiv.innerHTML = `
    <div class="viewHeader ">${boardTitle}</div>
    <div class="viewBody">
        <div class="newsHeading ">${boardTitle}</div>
        <div class="newsContent"> <img src="assets/images/${images}.png" class="d-inline-block align-text-top" width="85%" height="100%">
        </div>
    </div>
    `

    // sidebar.replaceChild(detailDiv, detailDiv);
    //remove this comment
    noticeWrapper.replaceChild(detailDiv, oldElement);
}


function initApp() {
    // console.log(soccerData)

    boardData.forEach((val, key) => {
        let newsDiv = document.createElement('div')
        newsDiv.classList.add('boardItem')
        newsDiv.setAttribute('id', `${key}`)
        newsDiv.innerHTML = `
        <div class="singleEvent">
                                    <img src="assets/images/${val.thumbnail}.png" class="d-inline-block align-text-top" width="85%" height="100%">
                                    <div class='accessEvent' id=${key}>
                                <i class="bi bi-chevron-right chevronLogo "></i>
                                </div>
                                </div>
                                
        `
            //remove this
        boardBody.appendChild(newsDiv)
    })

    {
        /* <div class="upperItem fontSecondary">
                ${val.msgType}
            </div>
            <div class="midItem">
                ${val.title}
            </div>
            <div class="lowerItem fontSecondary">
                ${val.date}

            </div> */
    }


}



initApp();
renderSidebar(0);



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
document.addEventListener('DOMContentLoaded', function() {

    let allNotices = document.querySelectorAll('.accessEvent')
    allNotices.forEach((notices) => {
        notices.addEventListener('click', (event) => {
            let msgIndex = event.target.id;
            console.log(msgIndex)
            replaceSidebar(msgIndex)
        })
    })










});