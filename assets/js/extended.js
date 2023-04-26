const matchHistory = document.querySelector('.matchHistory')
const infoHistory = document.querySelector('.infoHistory')
const historyDrop = document.querySelector('.my-backdrop3')
const infoDrop = document.querySelector('.my-backdrop4')
const customerDrop1 = document.querySelector('.my-backdrop5')
const customerDrop2 = document.querySelector('.my-backdrop6')
const changeInfoBtn = document.querySelector('.changeBtn')
const customerToggleBtn = document.querySelector('.customerBtn')
const sliderCancel = document.querySelector('.sliderCancel')
const myBetsBtn = document.querySelector('.myBetsBtn')
const betsDrop = document.querySelector('.my-backdrop7')


sliderCancel.addEventListener('click', () => {
    sliderMenu.classList.remove('sliderMenuActive')
    sliderBackDrop.style.display = 'none'
})



document.addEventListener('DOMContentLoaded', function() {




    sliderBackDrop.addEventListener('click', () => {
        sliderMenu.classList.remove('sliderMenuActive')
        sliderBackDrop.style.display = 'none'
    })

    let pageNo = 1;
    matchHistory.addEventListener('click', () => {
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        historyDrop.style.display = 'flex'

        let historyCancelBtn = document.querySelector('.historyCancel')
        historyCancelBtn.addEventListener('click', function() {
            historyDrop.style.display = 'none'

        })

        let totalPage = 10

        let e = document.querySelector('#mini1')
        let pageLimit = e.options[e.selectedIndex].text
        e.addEventListener('change', () => {
            pageLimit = e.value

        })
        let pgN = document.querySelector('#miniPN1');
        let lBtn = document.querySelector('#lbtn1')
        let rBtn = document.querySelector('#rbtn1')

        const left = () => {
            pageNo = pageNo - 1;
            pgN.innerHTML = pageNo
            if (pageNo == 1) {
                lBtn.classList.add('deactive')
                rBtn.classList.remove('deactive')
            }
            if (pageNo + 1 == totalPage) {
                rBtn.classList.add('deactive')
                lBtn.classList.remove('deactive')
            }
            if (pageNo != 1) {
                rBtn.classList.remove('deactive')
                lBtn.classList.remove('deactive')
            }
        }

        const right = () => {
            pageNo = pageNo + 1;
            pgN.innerHTML = pageNo
            if (pageNo == 1) {
                lBtn.classList.add('deactive')
                rBtn.classList.remove('deactive')
            }
            if (pageNo != 1) {
                rBtn.classList.remove('deactive')
                lBtn.classList.remove('deactive')
            }
            if (pageNo + 1 == totalPage) {
                rBtn.classList.add('deactive')
                lBtn.classList.remove('deactive')
            }


        }
        lBtn.addEventListener('click', left)
        rBtn.addEventListener('click', right)
        console.log(pageNo)


    })
    changeInfoBtn.addEventListener('click', () => {
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        console.log('here')
        infoDrop.style.display = 'flex'
        changeCancel = document.querySelector('.infoCancel')
        changeCancel.addEventListener('click', () => {
            infoDrop.style.display = 'none'
        })
    })
    customerToggleBtn.addEventListener('click', () => {
            sliderMenu.classList.remove('sliderMenuActive')
            sliderBackDrop.style.display = 'none'
            const footer = document.querySelectorAll('#footer5')
            console.log('asdasd')
            customerDrop1.style.display = 'flex'
            const changeCancel = document.querySelector('.customerCancel1')
            changeCancel.addEventListener('click', () => {
                customerDrop1.style.display = 'none'
            })

            const btn1 = document.querySelector('.submitReportBtn')
            const btn2 = document.querySelector('.submitIssueBtn')
            btn1.addEventListener('click', () => {
                customerDrop2.style.display = 'flex'
                const changeCancel = document.querySelector('.customerCancel2')
                changeCancel.addEventListener('click', () => {
                    customerDrop2.style.display = 'none'
                })
            })
            footer.forEach((footer) => {
                footer.addEventListener('click', () => {
                    customerDrop2.style.display = 'flex'

                    const changeCancel = document.querySelector('.customerCancel2')
                    changeCancel.addEventListener('click', () => {
                        customerDrop2.style.display = 'none'
                    })
                })
            })
            btn2.addEventListener('click', () => {
                customerDrop2.style.display = 'none'
            })
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

    myBetsBtn.addEventListener('click', () => {
        betsDrop.style.display = 'flex'
        sliderBackDrop.style.display = 'none'
        sliderMenu.classList.remove('sliderMenuActive')
        changeCancel = document.querySelector('#cancel7')
        changeCancel.addEventListener('click', () => {
            betsDrop.style.display = 'none'
        })
    })

});