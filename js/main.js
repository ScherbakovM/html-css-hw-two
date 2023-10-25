window.onload = function () {
    var menu = document.querySelector('.menu');
    var links = menu.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].href == document.URL) {
            links[i].style.color = 'Black';
            links[i].style.textDecoration = 'underline';
            links[i].style.textUnderlineOffset = '6px';
            links[i].style.textDecorationThickness = '4px';
            links[i].style.textDecorationColor = '#28eca5'
        }
    }
}

window.addEventListener('load', function () {
    let url = window.location.href;
    if (url.includes('/index.html')) {
        console.log('Главная страница загружена');
    } else if (url.includes('/about/about.html')) {
        console.log('Страница "Обо мне" загружена');
    } else if (url.includes('/form/form.html')) {
        console.log('Страница "Оставить заявку" загружена');
    }
});


window.addEventListener('load', function () {
    if (window.location.href.includes('/about/about.html')) {
        let name = document.getElementById('name');
        let dev = document.getElementById('dev');
        let bio = document.getElementById('bio');
        let safari = document.getElementById('safari');
        let viteIcon = this.document.getElementById('vite_icon');
        let reactIcon = this.document.getElementById('react_icon');

        setTimeout(function () {
            name.style.opacity = '1';
        }, 500); // изменить прозрачность через 0.5секунду

        setTimeout(function () {
            dev.style.opacity = '1';
        }, 1100); // изменить прозрачность через 1.1 секунды

        setTimeout(function () {
            bio.style.opacity = '1';
        }, 1600); // изменить прозрачность через 1.6 секунды 

        setTimeout(function () {
            reactIcon.style.opacity = '1';
            viteIcon.style.opacity = '1';
        }, 2300);

        setTimeout(function () {
            safari.style.opacity = '1';
            safari.style.transform = 'translateY(0)';
            safari.style.transform = 'rotate(10deg)';
        }, 2700);
        setTimeout(function () {
            setDragable();
        }, 3100);

        setTimeout(function () {
            rotateIcon();
        }, 5000);

    }

    else if (window.location.href.includes('/index.html')) {
        let mainContainer = document.getElementById('main_container');
        setTimeout(function () {
            mainContainer.style.opacity = '1';
        }, 500); // изменить прозрачность через 0.5 секунды

        let logo = document.getElementById('logo');
        setTimeout(function () {
            logo.style.opacity = '1';
            logo.style.transform = 'translateX(0)';
        }, 500); // изменить прозрачность через 0.5 секунды
    }

    else if (window.location.href.includes('/form/form.html')) {
        let form = this.document.getElementById('form');
        let formDescription = document.getElementById('form_description');
        setTimeout(function () {
            formDescription.style.opacity = '1';
            formDescription.style.transform = 'translateX(0)';
            form.style.transform = 'translateY(0)';
            form.style.opacity = 1;
        }, 500); // изменить прозрачность через 0.5 секунды
    }
});


function rotateIcon() {
    let reactIcon = this.document.getElementById('react_icon');
    reactIcon.style.animation = 'spin 3s linear infinite';
    let styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
            @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
            }`,
        styleSheet.cssRules.length);
}



function setDragable() {
    let draggableElement = document.getElementById('safari');
    let offsetX, offsetY, isDown = false;
    draggableElement.style.transition = 'none';
    // Обработчик события mousedown
    draggableElement.addEventListener('mousedown', function (event) {
        
        offsetX = event.clientX - draggableElement.getBoundingClientRect().left;
        offsetY = event.clientY - draggableElement.getBoundingClientRect().top;
        isDown = true;
        draggableElement.style.border = '3px solid #228dff84';
    });

    
    // Обработчик события mousemove
    document.addEventListener('mousemove', function (event) {
        if (isDown) {
            
            draggableElement.style.position = 'absolute';
            draggableElement.style.left = (event.clientX - offsetX) + 'px';
            draggableElement.style.top = (event.clientY - offsetY - 60) + 'px';
            
        }
    });

    // Обработчик события mouseup
    draggableElement.addEventListener('mouseup', function () {
        isDown = false;
        draggableElement.style.border = 'none';
    });
}
