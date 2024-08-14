const hourEl=document.getElementById("hour");
const minuteEl=document.getElementById("minute");
const secondEl=document.getElementById("second");
const ampmEl=document.getElementById("ampm");
const bodyEl=document.body;

function updateClock(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm="AM";

    if(h>12)
    {
        h=h-12;
        ampm="PM";
    }
    else if(h === 12)
    {
        ampm="PM"
    }
    else if(h === 0)
    {
        h=12;
    }

    // Adding leading zeroes
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerText = ampm;

    // Setting dynamic background based on time of day
    if (h >= 5 && h < 12 && ampm === "AM") {
        bodyEl.style.backgroundImage = "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?fit=crop&w=1920&q=80')";
    } else if (h >= 12 && h < 5 && ampm === "PM") {
        bodyEl.style.backgroundImage = "url('https://images.unsplash.com/photo-1525357816819-392d2385a452?fit=crop&w=1920&q=80')";
    } else if (h >= 5 && h < 8 && ampm === "PM") {
        bodyEl.style.backgroundImage = "url('https://images.unsplash.com/photo-1502082553048-f009c37129b9?fit=crop&w=1920&q=80')";
    } else {
        bodyEl.style.backgroundImage = "url('https://images.unsplash.com/photo-1483058712412-4245e9b90334?fit=crop&w=1920&q=80')";
    }

    setTimeout(() => {
        updateClock();
    },1000);
}

updateClock();