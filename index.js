function count(){
    const present = new Date();
    console.log(present);
    const future=new Date("July 21, 2028 00:00:00");
    const diff=future-present;
    console.log(diff);
    // this is in milliseconds
    //now we need to convert it to days and put it inside the dom eleemnt 
    const days=Math.floor(diff/(1000*60*60*24));
    console.log(days);
    //now we need to put it inside the dom element
    let dayselement=document.querySelector(".countdown .days h1");
    dayselement.innerText=days;
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    const seconds=Math.floor((diff%(1000*60))/(1000));
    document.querySelector(".timing .hours h1").innerText=hours;
    document.querySelector(".timing .minutes h1").innerText=minutes;
    document.querySelector(".timing .seconds h1").innerText=seconds;
}
setInterval(count, 1000);

function backgroundchanger() {
    const images = [
        "./360_F_255924443_xnmyQh2iHdQKfY5o16mkIVjzJu1t6QDt.jpg",
        "./360_F_471849799_YcxALDGj2qtZ9PnWRAOmXFAUUNsPtn95.jpg"
    ];
    const randomnumber = Math.floor(Math.random() * images.length);
    document.body.style.backgroundImage = `url('${images[randomnumber]}')`;
}
setInterval(backgroundchanger, 10000);