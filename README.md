# count-down
倒计时【天时分秒】

###项目中拆出来的功能:
1、可自定义开始结束时间
2、可自定义显示的DOM
3、可自定义回调方法

```javascript
var demo = new CountDown({
    startDate : startTime,
    endDate : endTime,
    domD : 'r_d',
    domH : 'r_h',
    domM : 'r_m',
    domS : 'r_s',
    callBack : function () {
        alert('到时间了!')
    }
});
```