export default ()=>{
    window.addEventListener('load',async ()=>{
        document.querySelector('.loader')?.classList.toggle('active')
        setTimeout(() => {
            document.getElementById('example-2')!.style.display='none';
        }, 550);
        
    })
}