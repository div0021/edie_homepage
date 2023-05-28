const img11=document.querySelector('.img11');
const img1=document.querySelector('.img1')

const img21=document.querySelector('.img21');
const img2=document.querySelector('.img2')


const img31=document.querySelector('.img31');
const img3=document.querySelector('.img3')

const img41=document.querySelector('.img41');
const img4=document.querySelector('.img4')

const img5=document.querySelector('.img5')

img11.addEventListener('mouseenter',function(){
    
    img1.style="transform:translateY(24rem)";
});


img11.addEventListener('mouseleave',function(){
    
    img1.style="transform:translateY(0)";
});


img31.addEventListener('mouseenter',function(){
    
    img3.style="transform:scale(0)";
    
});


img31.addEventListener('mouseleave',function(){
    
    img3.style="transform:scale(1)";
});


img21.addEventListener('mouseenter',function(){
    
    img2.style="opacity:0";
});


img21.addEventListener('mouseleave',function(){
    
    img2.style="opacity:1";
});

img41.addEventListener('mouseenter',function(){
    
    img4.style="transform:translateY(24rem)";
    img5.style="transform:translateY(-24rem)";
    
});


img41.addEventListener('mouseleave',function(){
    
    img4.style="transform:translateY(0)";
    img5.style="transform:translateY(0)";
});


// footer

const home = document.getElementById('home');
const home1 = document.getElementById('home1');
const services = document.getElementById('services');
const services1 = document.getElementById('services1');
const work = document.getElementById('work');
const work1 = document.getElementById('work1');
const client = document.getElementById('client');
const client1 = document.getElementById('client1');
const contact = document.getElementById('contact');
const contact1 = document.getElementById('contact1');

// console.log(home.offsetWidth);
home.addEventListener('mouseover',function(){
    home1.style=`width:${home.offsetWidth}px`
});
home.addEventListener('mouseleave',function(){
    home1.style='width:0'
})

services.addEventListener('mouseover',function(){
    services1.style=`width:${services.offsetWidth}px`
});
services.addEventListener('mouseleave',function(){
    services1.style='width:0'
})

work.addEventListener('mouseover',function(){
    work1.style=`width:${work.offsetWidth}px`
});
work.addEventListener('mouseleave',function(){
    work1.style='width:0'
})

client.addEventListener('mouseover',function(){
    client1.style=`width:${client.offsetWidth}px`
});
client.addEventListener('mouseleave',function(){
    client1.style='width:0'
})

contact.addEventListener('mouseover',function(){
    contact1.style=`width:${contact.offsetWidth}px`
});
contact.addEventListener('mouseleave',function(){
    contact1.style='width:0'
})


// navbar
const n_home = document.getElementById('n_home');
const n_home1 = document.getElementById('n_home1');
const n_services = document.getElementById('n_services');
const n_services1 = document.getElementById('n_services1');
const n_work = document.getElementById('n_work');
const n_work1 = document.getElementById('n_work1');
const n_client = document.getElementById('n_client');
const n_client1 = document.getElementById('n_client1');
const n_contact = document.getElementById('n_contact');
const n_contact1 = document.getElementById('n_contact1');



n_home.addEventListener('mouseover',function(){
    n_home1.style=`width:${n_home.offsetWidth}px`
});
n_home.addEventListener('mouseleave',function(){
    n_home1.style='width:0'
})

n_services.addEventListener('mouseover',function(){
    n_services1.style=`width:${n_services.offsetWidth}px`
});
n_services.addEventListener('mouseleave',function(){
    n_services1.style='width:0'
})

n_work.addEventListener('mouseover',function(){
    n_work1.style=`width:${n_work.offsetWidth}px`
});
n_work.addEventListener('mouseleave',function(){
    n_work1.style='width:0'
})

n_client.addEventListener('mouseover',function(){
    n_client1.style=`width:${n_client.offsetWidth}px`
});
n_client.addEventListener('mouseleave',function(){
    n_client1.style='width:0'
})

n_contact.addEventListener('mouseover',function(){
    n_contact1.style=`width:${n_contact.offsetWidth}px`
});
n_contact.addEventListener('mouseleave',function(){
    n_contact1.style='width:0'
})

// hamburger

const hamburger = document.getElementById('hamburger');

const ham1=document.getElementById('ham1');
const ham2=document.getElementById('ham2');
const ham3=document.getElementById('ham3');
const pop = document.getElementById('pop');

hamburger.addEventListener('click',function(){
    
    if(hamburger.classList.contains('ham')){
        hamburger.style='transform:rotate(0)'
        hamburger.classList.remove('ham');
        
        ham1.style='transform-origin:2px;transform:rotate(0)'
        ham2.style='opacity:1'
        ham3.style='transform-origin:2px;transform:rotate(0)'
        pop.style='height:0'

    }else{
        hamburger.style='transform:rotate(360deg)'
        hamburger.classList.add('ham');
        ham1.style='transform-origin:2px;transform:rotate(45deg)'
        ham2.style='opacity:0'
        ham3.style='transform-origin:2px;transform:rotate(-45deg)'
        pop.style='height:13.5rem'
    }
   
})

