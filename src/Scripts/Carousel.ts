export default ()=>{
    const left=document.getElementById('arrow-left');
    const right=document.getElementById('arrow-right');

    const shift_carousel=(offset:number)=>{
        const item_list =Array.from(document.getElementsByClassName('carousel-item'));
        for (let item of item_list){
            const no=parseInt(item.classList[1].slice(1))
            item.classList.replace(`i${no}`,`i${(no+offset)%5+1}`)
        }
    }
    
    left?.addEventListener('click',()=>shift_carousel(3))
    right?.addEventListener('click',()=>shift_carousel(0))
}