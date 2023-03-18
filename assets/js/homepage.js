const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');

function moveElement() {
    sidebar.style.left = '0';
    console.log('clicked')
        //  backdrop.style.display = 'block'

}

triggerSidebar.addEventListener('click', moveElement);