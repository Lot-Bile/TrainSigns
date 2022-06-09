
let toggleNavStatus = false;

let toggleNav = function() {

    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if(toggleNavStatus == false) { // muze byt zkraceno na if (!toggleNavStatus)
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = 1;
        }

        toggleNavStatus = true;
    }
    else if(toggleNavStatus == true) { // muze byt zkraceno na else if (toggleNavStatus) nebo jen else, vicemene je to jedno
        getSidebar.style.width = "50px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = 0;
        }
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}
