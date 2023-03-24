export default ()=>{
    window.addEventListener('load',async ()=>{
        document.querySelector('.loader')?.classList.toggle('tran')
        document.querySelector('.loader')?.classList.toggle('active')
    })
}