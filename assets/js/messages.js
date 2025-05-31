const backDrop0 = document.querySelector('.my-backdrop0');
const showMsg = document.querySelector('#messages');
const msgBackdrop = document.querySelector('#messages');


console.log('hola')
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

showMsg.addEventListener('click', () => {
    console.log('hello')
    backDrop0.style.display = 'flex'
    sliderBackDrop.style.display = 'none'
    sliderMenu.classList.remove('sliderMenuActive')

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
        msgBody.appendChild(newsDiv)
    })
    const noticeItem = document.querySelectorAll('.noticeItem');
    const noticeCancelBtn = document.querySelector('#msgCancel');

    const upperItem = document.querySelectorAll('.upperItem');
    const noticeDownHeader = document.querySelector('.noticeDownHeader');
    console.log(upperItem)
    upperItem.forEach(function(upperItem) {
        upperItem.addEventListener('click', function(event) {
            console.log('here')

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
            msgBody.appendChild(newDiv)


        })
    })

    noticeCancelBtn.addEventListener('click', function() {
        msgBody = document.querySelector('.msgBody');
        backDrop0.style.display = 'none'
        msgBody.innerHTML = ``

    })
})