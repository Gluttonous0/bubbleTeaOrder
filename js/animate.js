function animate(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //Math.ceil进一法取整数,Math.floor,退一法取小值.
        var spend = (target - obj.offsetLeft) / 30;
        spend = spend > 0 ? Math.ceil(spend) : Math.floor(spend);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                //调用函数
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + spend + 'px';
    }, 30)
}