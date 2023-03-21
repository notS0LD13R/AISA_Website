export default()=>{
    const mobilebutton=document.querySelector('.menu-mobile') as HTMLElement;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
        mobilebutton.classList.toggle('is-open');
    }
    );
    const buttons = document.querySelectorAll('div.menu>a');
    let prev=buttons[0]
    buttons.forEach((button)=>{
        button.addEventListener('click',()=>{
            prev.classList.toggle('is-active');
            button.classList.toggle('is-active');
            prev=button
        });
    });
    
    }