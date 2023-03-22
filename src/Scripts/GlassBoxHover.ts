export default ()=>{
    const box_list=document.getElementsByClassName('glassbox')
    Array.prototype.forEach.call(box_list,(box)=>{
        box.addEventListener('mousemove',(e:MouseEvent)=>{
            
            const target=(e.target as HTMLDivElement)
            
            const rect=target.getBoundingClientRect()
            const x=e.clientX-rect.left
            const y=e.clientY-rect.top

            // const width=target.clientWidth;
            // const height=target.clientHeight;
            
            // const x_axis=2*(x/width-0.5);
            // const y_axis=2*(y/height-0.5);

            // const angle=Math.sqrt(x_axis**2+y_axis**2)

            // target.style.transform=`rotate3d(${y_axis}, ${x_axis}, 0, ${angle*15}deg)`;
            
            target.style.setProperty('--mouse-x',`${x}px`)
            target.style.setProperty('--mouse-y',`${y}px`)
            

        })
    })
}