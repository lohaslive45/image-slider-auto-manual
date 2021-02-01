var counter = 1;

setInterval(function(){
    document.getElementById('btn'+counter).checked = true;
    counter++;
    if (counter >5) {
        counter = 1;
    }
},5000);
