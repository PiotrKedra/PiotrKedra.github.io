window.onload = function(){
    window.onscroll = function(){
        var menu = document.getElementById("menu");

        var menu_h1_a = this.document.querySelector(".menu h1 a");

        var intro_h1 = document.querySelector(".intro .h1");
        
        if(window.pageYOffset > 30){

            menu.style.backgroundColor = "rgba(51,51,51,0.8)";
            menu.style.transition = "500ms";

            menu_h1_a.style.opacity = "1";
            menu_h1_a.style.transition = "1s";

            intro_h1.style.opacity = "0";
            intro_h1.style.transition = "500ms";
        }else{
            menu_h1_a.style.opacity = "0";
            menu_h1_a.style.transition = "1s";

            intro_h1.style.opacity = "1";
            intro_h1.style.transition = "500ms";

            if(window.innerWidth > 850){
                menu.style.backgroundColor = "rgba(51,51,51,0)";
                menu.style.transition = "500ms";
            }else{
                menu.style.backgroundColor = "rgba(51,51,51,1)";
                menu.style.transition = "500ms";
            }

        }
    };
};