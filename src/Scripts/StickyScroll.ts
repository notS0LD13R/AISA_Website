export default ()=>{
    const list=document.getElementsByClassName('Frame-1');
    //@ts-ignore
    for (let frame of list){
        frame.style.setProperty('--height',`${frame.clientHeight}px`)
    }
}