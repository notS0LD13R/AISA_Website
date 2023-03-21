export default ()=>{
    const list=document.getElementsByClassName('Frame-1');
    for (let frame of list){
        frame.style.setProperty('--height',`${frame.clientHeight}px`)
    }
}