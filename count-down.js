/*
 * 功能说明：倒计时
 */

(function(w){
    var CountDown = function(options){
        /*
         startDate 开始时间 *
         endDate 结束时间 *
         domD 天数DOM
         domH 时钟数DOM
         domM 分钟数DOM
         domS 秒钟数DOM
         */
        this.interval = 1000;
        this.startDate = options.startDate;
        this.endDate = options.endDate;
        this.timer = 0;
        this.domD = document.getElementById(options.domD) || document.getElementById('count_day');
        this.domH = document.getElementById(options.domH) || document.getElementById('count_hour');
        this.domM = document.getElementById(options.domM) || document.getElementById('count_minute');
        this.domS = document.getElementById(options.domS) || document.getElementById('count_second');
        this.callBack = options.callBack || null;
        this.init();
        return this;
    };
    CountDown.prototype = {
        init: function(){
            var self = this;
            self.leftTime = self.endDate.getTime() - self.startDate.getTime();
            if(self.leftTime >= 0){ //判断未到结束时间
                self.count();
            }else{
                if(typeof self.callBack == 'function'){
                    self.callBack();
                }
            }
        },
        count : function(){
            var self = this;
            if(self.leftTime >= 0){
                self.day = Math.floor(self.leftTime/1000/60/60/24);
                self.hour = Math.floor(self.leftTime/1000/60/60%24);
                self.minute = Math.floor(self.leftTime/1000/60%60);
                self.second = Math.floor(self.leftTime/1000%60);
                self.domD.innerHTML = self.day;
                self.domH.innerHTML = self.fix(self.hour);
                self.domM.innerHTML = self.fix(self.minute);
                self.domS.innerHTML = self.fix(self.second);
                self.timer = window.setInterval(function(){
                    window.clearInterval(self.timer);
                    self.leftTime -= self.interval;
                    self.count();
                }, self.interval);
            }else{
                if(typeof self.callBack == 'function'){
                    self.callBack();
                }
            }
        },
        fix : function(num){//格式化1位时间，自动补0
            return ('' + num).length < 2 ? ((new Array(2 + 1)).join('0') + num).slice(-2) : '' + num;
        }
    };
    w.CountDown = CountDown;
    if (typeof(module) !== 'undefined')
    {
        module.exports = CountDown;
    }
}(window));