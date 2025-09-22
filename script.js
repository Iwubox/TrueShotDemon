
let bobby = true;

let hamburger = () => {
        let menu = document.getElementsByClassName("hidden")[0];

    if(bobby === true){
    menu.style.display = "block";
    bobby = false;
    }
    else{
        let menu = document.getElementsByClassName("hidden")[0];
        menu.style.display = "none";
        bobby = true;
    }
}

let ourClubsDrop = () => {
    let drop = document.getElementsByClassName("ourClubsDrop")[0];
}

