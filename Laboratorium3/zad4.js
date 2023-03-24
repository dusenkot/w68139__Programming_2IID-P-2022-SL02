function getTime() 
{
    return (new Date()).toLocaleTimeString();
}
setInterval(function() {

    document.getElementById('czas').innerHTML = getTime();
    
}, 1000);