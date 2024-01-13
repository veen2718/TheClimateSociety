console.log(`
width: ${window.innerWidth}
height: ${window.innerHeight}
`)


function displayStats(){
    const container = document.getElementById('slideShowItems')
let slideShowItems = container.querySelectorAll('.slideItem')
slideShowItems.forEach(item => {
    l = item.getBoundingClientRect().x
    l2 = 100 * l/window.innerWidth
    w = item.getBoundingClientRect().width
    w2 = 100 * w/window.innerWidth


    console.log(l , w, l2, w2);
})
item = container
l = item.getBoundingClientRect().x
    l2 = 100 * l/window.innerWidth
    w = item.getBoundingClientRect().width
    w2 = 100 * w/window.innerWidth


    console.log(l , w, l2, w2);
}

document.addEventListener('DOMContentLoaded', function(){
    displayStats();
})



function AnimateRight(){
    return new Promise((resolve, reject) => {
        const container = document.getElementById('slideShowItems')
        let slideShowItems = container.querySelectorAll('.slideItem')
        
        container.style.transition = 'all 0.2s ease-in-out'

        slideShowItems.forEach( item =>{
            item.style.transition = 'all 0.2s ease-in-out'
        })

        container.style.marginLeft = '28vw'
        
        let secondItem = slideShowItems[1]
        secondItem.style.width = '40vw'
        secondItem.style.height = '35vh'
        let thirdItem = slideShowItems[2]
        thirdItem.style.width= '20vw'
        thirdItem.style.height = '20vh'

        setTimeout(resolve, 200)
    })
}

function fixMoveRight(){
    const container = document.getElementById('slideShowItems')
    let slideShowItems = container.querySelectorAll('.slideItem')
    container.style.transition = 'none'
    slideShowItems.forEach( item =>{
        item.style.transition = 'none'
    })

    const lastItem = container.lastElementChild
    const firstItem = container.firstElementChild
    container.style.marginLeft = '0'

    container.insertBefore(lastItem, firstItem)

}

function moveRight(){
    console.log("moved right")
    
    AnimateRight().then(fixMoveRight)
    
}


function oldFuncs(){
    function moveSlideshowRight(){
        console.log("moveSlideshowRight")
        const slideShowItemsDiv = document.getElementById('slideShowItems');
        
        const lastItem = slideShowItemsDiv.lastElementChild
        const firstItem = slideShowItemsDiv.firstElementChild

        // slideShowItemsDiv.insertBefore(lastItem,firstItem);

        let slideShowItems = slideShowItemsDiv.querySelectorAll('*')
        const newFirstItem = slideShowItems[0]
        const newLastItems = slideShowItems[slideShowItems.length - 1]
        const thirdItem = slideShowItems[2]
        const fourthItem = slideShowItems[3]
        newFirstItem.classList.remove('unanimated')
        newLastItems.classList.add('unanimated')
        thirdItem.classList.add('focused')
        thirdItem.classList.remove('unfocused')
        fourthItem.classList.remove('focused')
        fourthItem.classList.add('unfocused')


    }


    function calculateMove(element, startX, startY) {
        const rect = element.getBoundingClientRect();
        return { x: startX - rect.left, y: startY - rect.top };
    }
    
    function prepareTransition(element, move) {
        element.style.transform = `translate(${move.x}px, ${move.y}px)`;
    }
    
    function forceReflow(element) {
        element.offsetWidth; // This line forces a reflow
    }
    
    function applyTransition(element) {
        setTimeout(() => {
        element.style.transform = '';
        }, 500); // A short delay to ensure the transition is rendered
    }
    
    function reorderElementsWithTransition() {
        const container = document.getElementById('slideShowItems');
        const elements = Array.from(container.querySelectorAll('.slideItem'));
    
        // Store initial positions
        const initialPositions = elements.map(el => el.getBoundingClientRect());
    
        // Prepare each element for transition
        elements.forEach((el, index) => {
        const move = calculateMove(el, initialPositions[index].left, initialPositions[index].top);
        prepareTransition(el, move);
        });
    
        // Force a reflow on each element
        elements.forEach(forceReflow);
    
        // Reorder the elements in the DOM
        const lastElement = container.lastElementChild;
        container.insertBefore(lastElement, container.firstElementChild);
    
        // Apply the transitions
        elements.forEach(applyTransition);
    }
    
    // Call this function to reorder elements with transition

}


// width: 1885
// height: 1017