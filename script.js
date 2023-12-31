const grids = document.querySelectorAll('.grid')
const headings = document.querySelectorAll('.heading .wrapper .text')

function enterScreen(index) {
    
    const grid = grids[index]
  
    const heading = headings[index] 
    const gridColumns = grid.querySelectorAll('.column')
 
    grid.classList.add('active')      
   
    gridColumns.forEach(element => {
        element.classList.remove('animate-before', 'animate-after')
    })
 
    heading.classList.remove('animate-before', 'animate-after')
}
 
function exitScreen(index, exitDelay) {
    const grid = grids[index]
   
    const heading = headings[index] 
    const gridColumns = grid.querySelectorAll('.column')

    gridColumns.forEach(element => {
        element.classList.add('animate-after')
    })  
    heading.classList.add('animate-after')

    setTimeout(() => {
        grid.classList.remove('active')      
    }, exitDelay)
   
}


function setupAnimationCycle({ timePerScreen, exitDelay }) {
    const cycleTime = timePerScreen + exitDelay
    console.log(cycleTime)
    let nextIndex = 0
    function nextCycle() {
        const currentIndex = nextIndex  
        enterScreen(currentIndex) //1.2s
        setTimeout(() => exitScreen(currentIndex, exitDelay), timePerScreen)
        nextIndex = nextIndex === grids.length - 1 ? 0 : nextIndex + 1
    }

    nextCycle()

    setInterval(nextCycle, cycleTime);
    // exitScreen(inititalScreen, exitDelay)
}
 

setupAnimationCycle({
    timePerScreen: 4000, // ms
    exitDelay: 200 * 7 // ms
})