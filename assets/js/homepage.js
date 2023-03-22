const triggerSidebar = document.querySelector('.tooglebarSegment');
const sidebar = document.querySelector('.sidebar');
const backdrop = document.querySelector('.my-backdrop');






const gameData = {

    League1: {
        leagueFlag: 'Spain',
        leagueName: 'la Liga',
        Game1: {
            team1: {
                date: "03/11",
                logo: "assets/images/team1.png",
                name: "Arsenal FC"
            },
            team2: {
                time: "6:00",
                logo: "assets/images/team2.png",
                name: "Bayern FC"
            },
            odds: {
                bet: ["3.50", "3.20", "3.00"],
                handi: [
                    { label: "-1.5", value: "2.10" },
                    { label: "1.5", value: "1.64" }
                ],
                extra: "+78"
            }
        }
    }

};





function moveElement() {
    sidebar.style.left = '0';
    console.log('clicked')
        //  backdrop.style.display = 'block'

}

triggerSidebar.addEventListener('click', moveElement);