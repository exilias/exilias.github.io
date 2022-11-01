window.addEventListener('load', function () {
    var $button = document.querySelector('.toggle-menu-button');
    var $menu = document.querySelector('.header-site-menu');
    var $logo = document.querySelector('.nav-logo');

    var updateClass = function(element) {
        if (element.classList.contains('is-show')) {
            element.classList.remove('is-show');
        }
        else {
            element.classList.add('is-show');
        }
    };

    $button.addEventListener('click', function () {
      updateClass($menu);  
      updateClass($logo);
    });
});
