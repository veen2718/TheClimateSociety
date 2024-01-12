function moveSlideshowRight(){
    console.log("moveSlideshowRight")
    const slideShowItemsDiv = document.getElementById('slideShowItems');
    
    const lastItem = slideShowItemsDiv.lastElementChild
    const firstItem = slideShowItemsDiv.firstElementChild

    slideShowItemsDiv.insertBefore(lastItem,firstItem);

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