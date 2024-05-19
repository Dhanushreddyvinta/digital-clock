// function currentDate() {
//     var date=new Date();
//     var dd=date.getDate().toString().padStart(2,'0');
//     var mm=date.getMonth();
//     var dy=date.getDay();
//     var months=["jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec"];
//     var days=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
//     var yy=date.getFullYear();
//     var dateString=`${dd}/${months[mm]}/${yy}`
//    document.getElementById("date").innerHTML=dateString;
//    document.getElementById("day").innerHTML=days[dy];
// }
// setInterval(currentDate,1000)

// function dateOutput() {
//     var date = new Date();
//     var ampm = "PM";
//     var hh = date.getHours();
//     ampm = hh >= 12 ? "PM" : "AM";
//     hh = hh % 12 || 12; // Ensure 12-hour format
//     hh = hh.toString().padStart(2, '0');
//     var mi = date.getMinutes().toString().padStart(2, '0');
//     var ss = date.getSeconds().toString().padStart(2, '0');
//     var hhmi = `${hh}:${mi} ${ampm}`;
//     document.getElementById("hours12").innerHTML = hhmi;
//     document.getElementById("sec").innerHTML = ss;
// }

// setInterval(dateOutput,1000)
// function dateOutput24() {
//     var date=new Date();
//     var ampm="PM"
//     var hh=date.getHours().toString().padStart(2,'0');
//     var mi=date.getMinutes().toString().padStart(2,'0');
//     var ss=date.getSeconds().toString().padStart(2,'0');
//     document.getElementById("hours24").innerHTML=`${hh}:${mi}`
    
// }
// setInterval(dateOutput24,1000)
// var num=0;
// function togglebutton() {
//     num++;
//     if(num%2==0)
//     {
//         document.getElementById("button").style.left="0px";
//         document.getElementById("button").style.backgroundColor="black";
//         document.getElementById("toggle").style.backgroundColor="white";
//         document.getElementById("hours12").style.display="block";
//         document.getElementById("hours24").style.display="none"
//     }
//     else
//     {
//         document.getElementById("button").style.left="3vw";
//         document.getElementById("button").style.backgroundColor="white";
//         document.getElementById("toggle").style.backgroundColor="black";
//         document.getElementById("hours12").style.display="none";
//         document.getElementById("hours24").style.display="block" ;
//     }
// }

// function bgImage(){
//     var date= new Date();
//     var dy= date.getDay();
//     console.log(dy);
//     var arrImage=["img1.jpeg","img2.jpeg","img3.jpeg","img4.jpeg","img5.jpeg","img6.jpeg","img7.jpeg",]
//     console.log(arrImage[dy]);
//     document.body.style.backgroundImage=`url(../asset/${arrImage[dy]})`  
// }
// bgImage()

// var allinp=document.querySelectorAll("input")
// console.log(allinp);
// function userData(){
//     var currentDate=new Date();
//     var dd=currentDate.getDate();
//     var mo=currentDate.getMonth()+1;
//     var yy=currentDate.getFullYear();
//     var hh=currentDate.getHours();
//     var mm=currentDate.getMinutes();

//    if (mo<=9){
//     mo="0"+mo;
//    }
//    if (mm<=9){
//     mm="0"+mm;
//    }
//    if (dd<=9){
//     dd="0"+dd;
//    }
//    if (hh<=9){
//     hh="0"+hh;
//    }
//    currentddmmyy=`${yy}-${mm}-${+dd}`
//    var currentTime=`${hh}:${mm}`
//    console.log(currentddmmyy);
//    console.log(currentTime);
//    var userDate=allinp[1].value;
//    console.log(userDate);
//    var usertime=allinp[2].value;
//    console.log(usertime);

// if(currentddmmyy==userDate && usertime==currentTime){
//     window.alert("wake up!")
//     Audio.play();
// }
// }
// setInterval(userData,1000)

// function openAlramwindow(){
//     var alramWindow=document.querySelector(".alramWindow")
//     alramWindow.style.display="block";
// }

// function closeAlramwindow(){
//     var alramWindow=document.querySelector(".alramWindow")
//     alramWindow.style.display="none";
// }

function dateOutput() {
    var date = new Date();
    var ampm = "PM";
    var hh = date.getHours();
    ampm = hh >= 12 ? "PM" : "AM";
    hh = hh % 12 || 12; // Ensure 12-hour format
    hh = hh.toString().padStart(2, '0');
    var mi = date.getMinutes().toString().padStart(2, '0');
    var ss = date.getSeconds().toString().padStart(2, '0');
    var hhmi = `${hh}:${mi} ${ampm}`;
    document.getElementById("hours12").textContent = hhmi;
    document.getElementById("sec").textContent = ss;
}

function openAlramwindow() {
    document.getElementById("containerAlram").style.display = "block";
}

function closeAlramwindow() {
    document.getElementById("containerAlram").style.display = "none";
}

function userData() {
    var selectedDate = document.querySelector("input[type='date']").value;
    var selectedTime = document.querySelector("input[type='time']").value;
    console.log("Date: " + selectedDate);
    console.log("Time: " + selectedTime);
}

function togglebutton() {
    var button = document.getElementById("button");
    if (button.value === "OFF") {
        button.value = "ON";
        button.style.background = "#00ff00";
    } else {
        button.value = "OFF";
        button.style.background = "#ff0000";
    }
}

// Call the dateOutput function every second
setInterval(dateOutput, 1000);
