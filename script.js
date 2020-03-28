
document.querySelector('.slot_btn_container').addEventListener('click', ()=>{
        let slotA_id = setInterval( slotA_func, 50 );
        let slotB_id = setInterval( slotB_func, 50 );
        let slotC_id = setInterval( slotC_func, 50 );
        document.querySelector('.slot_btn_container').classList.add('none');

        let click_btn = document.querySelectorAll('.click_btn');
        click_btn.forEach(index => {
            index.addEventListener('click', ()=> {
                console.log( index.dataset.indexId );
                if ( index.dataset.indexId == 1 ) {
                    clearInterval( slotA_id );
                } else if ( index.dataset.indexId == 2 ) {
                    clearInterval( slotB_id );
                } else {
                    clearInterval( slotC_id );
                }

            },false);
        });
},false);



function slotA_func() {
    let slotA = Math.floor(Math.random()* 4+1);
    switch( slotA ) {
        case 1:
            document.getElementById('slot_imageA').setAttribute('src','./images/chery.gif');
            break;
        case 2:
            document.getElementById('slot_imageA').setAttribute('src','./images/seven.png');
            break;
        case 3:
            document.getElementById('slot_imageA').setAttribute('src','./images/slot2.jpg');
            break;
        case 4:
            document.getElementById('slot_imageA').setAttribute('src','./images/slot5.jpg');
            break;
    }
}

function slotB_func() {
    let slotB = Math.floor(Math.random()* 4+1);
    switch( slotB ) {
        case 1:
            document.getElementById('slot_imageB').setAttribute('src','./images/chery.gif');
            break;
        case 2:
            document.getElementById('slot_imageB').setAttribute('src','./images/seven.png');
            break;
        case 3:
            document.getElementById('slot_imageB').setAttribute('src','./images/slot2.jpg');
            break;
        case 4:
            document.getElementById('slot_imageB').setAttribute('src','./images/slot5.jpg');
            break;
    }
}
function slotC_func() {
    let slotC = Math.floor(Math.random()* 4+1);
    switch( slotC ) {
        case 1:
            document.getElementById('slot_imageC').setAttribute('src','./images/chery.gif');
            break;
        case 2:
            document.getElementById('slot_imageC').setAttribute('src','./images/seven.png');
            break;
        case 3:
            document.getElementById('slot_imageC').setAttribute('src','./images/slot2.jpg');
            break;
        case 4:
            document.getElementById('slot_imageC').setAttribute('src','./images/slot5.jpg');
            break;
    }
}
