const members = document.querySelectorAll('.member');

members.forEach(member => {
    member.addEventListener('click', function() {

        // members.forEach(otherMember => {
        //     if (otherMember !== this) {
        //         otherMember.classList.remove('clicked');
        //     }
        // });


        // this.classList.toggle('clicked');
    });
});



















// const members = document.querySelectorAll('.member');
// members.forEach(member => {
//     member.addEventListener('click', function() {
//         console.log('member clicked');
//         const memberData = this.getBoundingClientRect();
//         const memberWidth = memberData.width;
//         const memberHeight = memberData.height;

//         members.forEach(otherMember => {
//             // if(otherMember !== this){
//             //     otherMember.style.width = '18vw';
//             //     otherMember.style.height = '45vh';
//             // }
//             otherMember.classList.remove('clicked')
//         });

//         console.log(this.style.width);
//         this.classList.toggle('clicked');
//         // if(this.classList.contains('large')) {
//         //     this.style.width = '18vw';
//         //     this.style.height = '45vh';
//         //     this.classList.remove('large');
//         // } else {
//         //     this.style.width = '30vw';
//         //     this.style.height = '70vh';
//         //     this.classList.add('large');
//         //     console.log("growing");
//         // }
//     });
// });
