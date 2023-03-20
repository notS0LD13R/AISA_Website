export default ()=>{
    const box_list=document.getElementsByClassName('glassbox')
    Array.prototype.forEach.call(box_list,(box)=>{
        box.addEventListener('mousemove',(e:MouseEvent)=>{
            
            const target=(e.target as HTMLDivElement)
            
            const rect=target.getBoundingClientRect()
            const x=e.clientX-rect.left
            const y=e.clientY-rect.top
            
            target.style.setProperty('--mouse-x',`${x}px`)
            target.style.setProperty('--mouse-y',`${y}px`)

        })
    })
}