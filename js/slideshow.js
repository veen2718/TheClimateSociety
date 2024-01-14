console.log(`
width: ${window.innerWidth}
height: ${window.innerHeight}
`)


function displayStats(){
    const container = document.getElementById('slideShowItems')
let slideShowItems = container.querySelectorAll('.slideItem')

let items = Array.from(slideShowItems,item=>
    [100/window.innerWidth * item.getBoundingClientRect().x, 100/window.innerWidth * item.getBoundingClientRect().width]
)

// slideShowItems.forEach(item => {
//     l = item.getBoundingClientRect().x
//     l2 = 100 * l/window.innerWidth
//     w = item.getBoundingClientRect().width
//     w2 = 100 * w/window.innerWidth


//     console.log(l , w, l2, w2);
// })
console.table(items)
let item = container
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
    check()
    console.log("moved right")
    
    AnimateRight().then(fixRight)
    // setTimeout(check, 750);
    
}

function moveLeft(){
    check()
    console.log("moved left")
    AnimateLeft().then(fixLeft)
    // setTimeout(check, 750);
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

function check(){
    console.log('Checking')
    const container = document.getElementById('slideShowItems')
    let slideShowItems = container.querySelectorAll('.slideItem')

    for (let [index, slideItem] of slideShowItems.entries()) {
        let item = slideItem.getBoundingClientRect()
            let width = item.width
            let height = item.height
        if (index != 2){
            
            if(Math.round(width) != Math.round(0.2 * window.innerWidth)){
                console.log(slideItem.style.width)
                slideItem.style.width = '20vw'
                
            }
            if(Math.round(height) != Math.round(0.2 * window.innerHeight)){
                console.log(slideItem.style.height)
                slideItem.style.height = '20vh'
            }
        }else if (index == 2){
            if(Math.round(width) != Math.round(0.4 * window.innerWidth)){
                console.log(slideItem.style.width, 2)
                slideItem.style.width = '40vw'
            }
            if(Math.round(height) != Math.round(0.35 * window.innerHeight)){
                console.log(slideItem.style.height, 2)
                slideItem.style.height = '35vh'
            }
        }
    }
}