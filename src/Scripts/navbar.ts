export default()=>{
    const mobilebutton=document.querySelector('.menu-mobile');
    const hamburger = document.querySelector('.hamburger');
    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
        mobilebutton.classList.toggle('is-open');
    }
    );
    const buttons = document.querySelectorAll('div.menu>a');
    let prev=buttons[0]
    console.log(prev)
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            prev.classList.toggle('is-active');
            button.classList.toggle('is-active');
            prev=button
        });
    });
    
    }