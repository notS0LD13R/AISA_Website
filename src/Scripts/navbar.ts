export default()=>{
    const mobilebutton=document.querySelector('.menu-mobile') as HTMLElement;
    const hamburger = document.querySelector('.hamburger') as HTMLElement;
    const navbar = document.querySelector('.navbar') as HTMLElement;
    hamburger.addEventListener('click',function(){
        this.classList.toggle('is-active');
        mobilebutton.classList.toggle('is-open');
        navbar.classList.toggle('is-active');
        navbar.classList.toggle('isnt');
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
    // const options ={}
    // const observer = new IntersectionObserver(function(entries,observer)
    // {
    //     entries.forEach(entry =>{
    //         console.log(entry);
    //     })

    // }, options);
    function scroll(){
    const body = document.querySelector('body') as HTMLElement;
    const abouter=document.querySelector('#abouter') as HTMLElement;
    const gallery = document.querySelector('#gallery') as HTMLElement;
    const somebs = document.querySelector('#somebs') as HTMLElement;
    const footer = document.querySelector('.footer') as HTMLElement;
    let  total :number  = body.offsetHeight;
    let footerheight :number= total-footer.offsetHeight-(footer.offsetHeight)/2;
    let galleryheight:number=footerheight-gallery.offsetHeight;
    let somebsheight:number=total-somebs.offsetHeight;
    let aboutusheight:number=somebsheight-abouter.offsetHeight;


    var arr:number[];
    arr=[aboutusheight,somebsheight,galleryheight,footerheight];
    
    if (window.scrollY>footerheight){
        prev.classList.remove('is-active');
        buttons[4].classList.add('is-active');
        prev=buttons[4]
    }
    else if (window.scrollY>galleryheight){
        prev.classList.remove('is-active');
        buttons[3].classList.add('is-active');
        prev=buttons[3];
    }
    else if (window.scrollY>somebsheight){
        prev.classList.remove('is-active');
        buttons[2].classList.add('is-active');
        prev=buttons[2];
    }
    else if (window.scrollY>aboutusheight){
        prev.classList.remove('is-active');
        buttons[1].classList.add('is-active');
        prev=buttons[1];
    }
    else{
        prev.classList.remove('is-active');
        buttons[0].classList.add('is-active');
        prev=buttons[0];
    }

    
    }
    setInterval(scroll,1);

    }