window.onload = function () {
    new fullpage('#fullpage', {
        //options here
        sectionsColor: ['#0da5d6', '#2ab561', '#de8910', '#16ba9d', '#0da5d6'],
        verticalCentered: false,
        afterLoad: function (origin, destination, direction) {
            /*
            afterLoad: 是滚动结束之后调用的一个回调函数
            origin: 保存了滚动出去那一屏相关的信息
            destination: 保存了滚入的那一屏相关的信息
            direction: 保存了当前滚动的方向 down/up
            注意点:
            第一次进入网页也会调用afterLoad方法
            只不过第一次进入网页调用的时候,第一个参数和最后一个参数是null
            * */
            if(origin !== null){
                origin.item.className = origin.item.className.replace("current", "");
            }
            // console.log(origin, destination, direction);
            destination.item.className = destination.item.className + " current";
        }
    });
}