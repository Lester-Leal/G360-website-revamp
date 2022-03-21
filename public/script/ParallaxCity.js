(function () {
    'use strict';
    
    function $(id) {
        return document.getElementById(id);
    }
    
    var wrapper = $('wrapper_'),
        firstBox = $('box-1'),
        mouseX = false,
        mouseY = false;
    
    wrapper_.onmousemove = function (e) {
        mouseX = e.pageX;
        
        firstBox.style.backgroundPosition = '-' + mouseX * 0.5 + 'px 0';
        
        wrapper_.style.backgroundPosition = '-' + mouseX * 0.3 + 'px 0';
    };
}());