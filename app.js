Array.from(document.getElementsByTagName('input')).forEach((e,i)=>{
    if(e.value.length > 0){
        document.getElementsByClassName('bi')[i].style.transform = "rotate(180deg)";
    }
    else{
        document.getElementsByClassName('bi')[i].style.transform = "rotate(0deg)";
    }
})