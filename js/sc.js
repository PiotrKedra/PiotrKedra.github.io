window.onload = function(){
    function wypisz(){
        alert("sdsd");
    }

    var test = document.getElementById("test");

    test.onclick = wypisz;

    window.onscroll = function(){
        var menu = document.getElementById("test");
        
        if(window.pageYOffset > 30){
            menu.style.backgroundColor = "rgba(33,33,33,0.8)";
        }else{
            menu.style.backgroundColor = "rgba(33,33,33,0)";
        }
    };
}