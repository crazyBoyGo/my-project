function fadeTo(element, target, time, callback) {
    clearInterval(element.timer);

    target *= 100;

    var init = getStyle(element, 'opacity') * 100;
    if(init == target) {
        return ;
    }
    var speed = target > init ? 10 : -10
    var _time =time / ((target - init) / speed);

    element.timer = setInterval(function() {
        var opacity = getStyle(element, 'opacity') * 100;
        if( opacity == target) {
            clearInterval(element.timer);
            if(callback) {
                callback(element);
            }
        } else {
            element.style.opacity = (opacity + speed) / 100 
        }
    }, _time)
}

function fadeOut(element, time, callback) {
    fadeTo(element, 0, time, callback);
}

function fadeIn(element, time, callback) {
    fadeTo(element, 1, time, callback);
}

function getStyle(ele, attr) {
    return window.getComputedStyle ? window.getComputedStyle(ele, null)[attr] : ele.currentStyle[attr];
}
