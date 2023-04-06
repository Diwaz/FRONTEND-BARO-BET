const boardBody = document.querySelector('.boardBody');
const noticeWrapper = document.querySelector('.noticeViewWrapper');




let messageData = [{
        msgType: 'notification',
        title: 'Bank check Type Information',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',

        color: 'Red'
    },
    {
        msgType: 'RULE',
        title: 'Deposite LIMIT',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',

        color: 'Red'
    },
    {
        msgType: 'HELP',
        title: 'Withdraw Failed',
        message: ' 23: 30 ~ 00: 05 is bank check time, so charging is not possible.When depositing during bank inspection time (deposit account may change), it is difficult to check It may take a long time to confirm payment.If you make a linked deposit rather than a registered account, it will be cumbersome to check every time. Please make a deposit to the account you registered when you registered as a member.',
        date: '2023-03-26 22:40:44',
        status: 'Unread',

        color: 'Red'
    },

]

function renderSidebar(msgIndex) {




    let boardTitle = messageData[msgIndex].title
    let description = messageData[msgIndex].message


    let detailDiv = document.createElement('div');
    detailDiv.classList.add('noticeViewer');
    detailDiv.innerHTML = `
    <div class="viewHeader ">${boardTitle}</div>
    <div class="viewBody">
        <div class="newsHeading ">${boardTitle}</div>
        <div class="newsContent">${description}
        </div>
    </div>
    `

    // sidebar.replaceChild(detailDiv, detailDiv);
    //remove this comment
    noticeWrapper.appendChild(detailDiv);

}

function replaceSidebar(msgIndex) {
    let boardTitle = messageData[msgIndex].title
    let description = messageData[msgIndex].message

    let oldElement = document.querySelector('.noticeViewer')
    let detailDiv = document.createElement('div');
    detailDiv.classList.add('noticeViewer');

    detailDiv.innerHTML = `
    <div class="viewHeader ">${boardTitle}</div>
    <div class="viewBody">
        <div class="newsHeading ">${boardTitle}</div>
        <div class="newsContent">${description}
        </div>
    </div>
    `

    // sidebar.replaceChild(detailDiv, detailDiv);
    //remove this comment
    noticeWrapper.replaceChild(detailDiv, oldElement);
}


function initApp() {
    // console.log(soccerData)

    messageData.forEach((val, key) => {
        let newsDiv = document.createElement('div')
        newsDiv.classList.add('boardItem')
        newsDiv.setAttribute('id', `${key}`)
        newsDiv.innerHTML = `
        <div class="upperItem fontSecondary">
        ${val.msgType}
    </div>
    <div class="midItem">
        ${val.title}
    </div>
    <div class="lowerItem fontSecondary">
        ${val.date}

    </div>
        `
            //remove this
        boardBody.appendChild(newsDiv)
    })




}



initApp();
renderSidebar(0);

document.addEventListener('DOMContentLoaded', function() {

    let allNotices = document.querySelectorAll('.boardItem')
    allNotices.forEach((notices) => {
        notices.addEventListener('click', (event) => {

            let msgIndex = event.target.parentNode.id;
            replaceSidebar(msgIndex)
        })
    })










});