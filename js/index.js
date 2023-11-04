const btn = document.querySelector('.btn');
const form = document.querySelector('#form');

//重置表单
btn.addEventListener('click', function () {
    form.reset();
})

//打印生成的订单内容
const getOrderText = (formVal) => {
    const text = `
    【您的订单已经生成】
        ------------------------
        奶茶口味：${formVal.type}
        数量：${formVal.num}
        杯型：${formVal.cup}
        甜度：${formVal.sugar}
        免费小料：${formVal["smallMate"] ? formVal["smallMate"] : "-"}
        加价小料：${formVal["payMate"] ? formVal["payMate"] : "-"}
        是否加冰：${formVal.isIce}
        是否去茶底：${formVal["isBottomTea"]}
        地址：${formVal.address}
        手机号：${formVal.phone}
        期待送达时间：${formVal.time}
        备注：${formVal.comment}
        支付方式：${formVal["payType"]}
    `;
    return text;
}

//创建对象，引入提交表单内容
const onSubmit = (e) => {
    // e.preventDefault();
    const formData = new FormData(form);
    const formVals = {};
    for (var pair of formData.entries()) {
        const propName = pair[0];
        const propVal = pair[1];
        console.log(propName, propVal)

        if (formVals[propName]) {
            //提交多选时把所有多选增加到同一个key
            formVals[propName] = [propVal].concat(formVals[propName]);
        } else {
            formVals[propName] = propVal;
        }
        console.log(formVals);
    }
    console.log(formVals);
    alert(getOrderText(formVals));
}

// form.addEventListener("submit", onSubmit);

form.addEventListener("submit", (e) => {
    const phone = document.querySelector('.phone').value;
    console.log(phone);

    //手机号码正则表达式校验
    const phoneExp = /^1[3-9]\d{9}$/;
    if (phoneExp.exec(phone)) {
        console.log('走了这里');
        onSubmit();
    } else {
        alert('请输入正确手机号');
        e.preventDefault();
    }
});

var scroll_top = document.querySelector('.scrolltop');
var bodyTop = window.pageYOffset;

//滚动条控制“回到首页”按钮是否展示
window.addEventListener('scroll', function () {
    // 获取滚动条距离
    let bodyTop = window.pageYOffset;
    // console.log(bodyTop);
    //判断滚动条距离是否大于200，是则展示，否则隐藏.
    if (bodyTop >= 200) {
        scroll_top.style.display = "block";
    } else {
        scroll_top.style.display = "none";
    }
})

//点击按钮回到首页事件
scroll_top.addEventListener('click', function () {
    scrollTo(0, 0);
})


