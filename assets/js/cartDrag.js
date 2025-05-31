// const betSlip = document.querySelector('.betSlip')
// const slipHeader = document.querySelector('.slipHeader')


// console.log('here')
// const onDrag = ({ movementY }) => {
//     let getStyle = window.getComputedStyle(betSlip);
//     let movX = parseInt(getStyle.top);
//     console.log(movX)
//     console.log(movementY)
//     if (movementY > 0) {

//         betSlip.style.top = `${movX+movementY}px`
//         betSlip.style.top = '20%'

//     }
//     if (movX + movementY > 350) {
//         betSlip.style.top = '20%'
//         cartBackdrop.style.display = 'none'
//         col3.style.display = ''
//         col3.style.zIndex = 1
//         slipHeader.removeEventListener("mousemove", onDrag);
//     }

// }

// slipHeader.addEventListener('mousedown', () => {
//     slipHeader.addEventListener('mousemove', onDrag);
// })