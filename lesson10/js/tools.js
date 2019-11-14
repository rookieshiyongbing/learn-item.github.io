(function () {
    /*获取网页宽高的兼容性代码*/
    function getScreen() {
        let width, height;
        if(window.innerWidth){
            width = window.innerWidth;
            height = window.innerHeight;
        }else if(document.compatMode === "BackCompat"){
            width = document.body.clientWidth;
            height = document.body.clientHeight;
        }else{
            width = document.documentElement.clientWidth;
            height = document.documentElement.clientHeight;
        }
        return {
            width: width,
            height: height
        }
    }
    /*获取网页滚动距离的兼容性代码*/
    function getPageScroll() {
        let x, y;
        if(window.pageXOffset){
            x = window.pageXOffset;
            y = window.pageYOffset;
        }else if(document.compatMode === "BackCompat"){
            x = document.body.scrollLeft;
            y = document.body.scrollTop;
        }else{
            x = document.documentElement.scrollLeft;
            y = document.documentElement.scrollTop;
        }
        return {
            x: x,
            y: y
        }
    }
    /*添加事件的兼容性代码*/
    function addEvent(ele, name, fn) {
        if(ele.attachEvent){
            ele.attachEvent("on"+name, fn);
        }else{
            ele.addEventListener(name, fn);
        }
    }
    /*获取样式名称的兼容性代码*/
    function getStyleAttr(obj, name) {
        if(obj.currentStyle){
            return obj.currentStyle[name];
        }else{
            return getComputedStyle(obj)[name];
        }
    }
    /*绑定防抖函数*/
    function debounce(fn, delay) { // fn = test
        let timerId = null;
        return function () {
            let self = this;
            let args = arguments;
            timerId && clearTimeout(timerId);
            timerId = setTimeout(function () {
                fn.apply(self, args);
            }, delay || 1000);
        }
    }
    /*绑定函数节流 */
    function throttle(fn, delay) { // fn = test
        let timerId = null;
        let flag = true;
        return function () {
            if(!flag) return;
            flag = false;
            let self = this;
            let args = arguments;
            timerId && clearTimeout(timerId);
            timerId = setTimeout(function () {
                flag = true;
                fn.apply(self, args);
            }, delay || 1000);
        }
    }

    window.getScreen = getScreen;
    window.getPageScroll = getPageScroll;
    window.addEvent = addEvent;
    window.getStyleAttr = getStyleAttr;
    window.debounce = debounce;
    window.throttle = throttle;
})();