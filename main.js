const menuIcon = document.getElementById('menu-icon');
const slideOutMenu = document.getElementById('slideout-menu');
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('searchbox');

searchIcon.addEventListener('click', () =>{
    if(searchBox.style.top == '72px'){
        searchBox.style.top = '24px';
        searchBox.style.pointerEvents = 'none';

    }else{
        searchBox.style.top = '72px';
        searchBox.style.pointerEvents = 'auto';
    }
    
})


menuIcon.addEventListener('click', function(){
    // alert(slideOutMenu);

    if(slideOutMenu.style.opacity == '1'){
        alert(slideOutMenu);
        slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';

    }else{
        slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
    }


})

