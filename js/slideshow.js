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

function fixMove(){
    const container = document.getElementById('slideShowItems')
    let slideShowItems = container.querySelectorAll('.slideItem')
    container.style.transition = 'none'
    slideShowItems.forEach( item =>{
        item.style.transition = 'none'
    })
    

    

}

function fixRight(){
    fixMove()
    const container = document.getElementById('slideShowItems')
    const lastItem = container.lastElementChild
    const firstItem = container.firstElementChild
    container.style.marginLeft = '0'

    container.insertBefore(lastItem, firstItem)
}

function fixLeft(){
    fixMove()
    const container = document.getElementById('slideShowItems')
    const lastItem = container.lastElementChild
    const firstItem = container.firstElementChild
    container.style.marginLeft = '0'

    container.appendChild(firstItem)
}



function moveRight(){
    console.log("moved right")
    
    AnimateRight().then(fixRight)
    
}

function moveLeft(){
    console.log("moved left")
    AnimateLeft().then(fixLeft)
}


function AnimateLeft(){
    return new Promise((resolve, reject) => {
        const container = document.getElementById('slideShowItems')
        let slideShowItems = container.querySelectorAll('.slideItem')
        
        container.style.transition = 'all 0.2s ease-in-out'

        slideShowItems.forEach( item =>{
            item.style.transition = 'all 0.2s ease-in-out'
        })

        container.style.marginLeft = '-28vw'
        
        let secondItem = slideShowItems[3]
        secondItem.style.width = '40vw'
        secondItem.style.height = '35vh'
        let firstItem = slideShowItems[2]
        firstItem.style.width= '20vw'
        firstItem.style.height = '20vh'

        setTimeout(resolve, 200)
    })
}