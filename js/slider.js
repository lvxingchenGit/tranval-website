// var nowIndex = 0;
// var boxWidth = 520; 
// var len = 4;
// var flag = true;
// var timer;
// var noOverFlag = true;
// function init(){
//         bindEvent();
//         sliderAuto();
// }
// init();
// function bindEvent(){
//                 $('.bottom li').add($('.prev')).add($('.next')).on ('click',function(){
//                         if($(this).attr('class') == 'prev'){
//                                 console.log(this);
//                                 move('prev');
//                                 console.log('prev');
//                         }else if($(this).attr('class') == 'next'){
//                                 move('next');
//                                 console.log(this);
//                         }else{
//                                 move($(this).index());
//                         }
//                         changeIndex()
//                 })
//                 $('.wrapper').on('mouseenter',function(){
//                         noOverFlag = false;
//                         clearTimeout(timer);
//                         $('.btn').show();
//                 }).on('mouseleave',function(){
//                         noOverFlag = true;
//                         $('.btn').hide();
//                         sliderAuto();
//                  })
// }
// function move(dir){
//         if(flag){
//                 flag = false;
//                 if(dir == 'prev' || dir == 'next'){
//                         if(dir == 'prev'){
//                                  if(nowIndex == 0){
//                                         $('.box').css('left' , -(len * boxWidth) + 'px')
//                                         nowIndex = len - 1;
//                                 }else{
//                                         nowIndex --;
//                                 }
//                         }else{
//                                 if(nowIndex == len-1){
//                                         $('.box').animate({'left' : -(len * boxWidth) + 'px'},function(){
//                                                 $(this).css('left', '0');
//                                                 sliderAuto();
//                                                 flag = true;
//                                         }) 
//                                         nowIndex = 0;     
//                                 }else{
//                                         nowIndex ++;
//                                 }
//                         }
//                 }else{
//                         nowIndex = dir;
//                 }
//         }
//         slider();
// }
// function slider(){
//         $('.box').animate({'left' : -(nowIndex * boxWidth) +'px'},function(){
//                 flag = true;
//                 sliderAuto();
//         })
// }
// function changeIndex(){
//         $('.active').removeClass('active');
//         $('.bottom li').eq(nowIndex).addClass('active');
// }
// function sliderAuto(){
//         if(noOverFlag){
//                 clearTimeout(timer); 
//                 timer = setTimeout(function(){
//                         move('next');
//                         changeIndex();
//                 },1500)
//         }
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++——+轮播图插件封装
(function ($) {
        function Swiper(objectArr) {
                // 实现轮播图功能
                //传进来的persons：是一个对象或是空对象
                this.obj = objectArr || {};//this.obj----->传进来的对象
                this.wrapperWidth = this.obj.father;//轮播图的父级#swiper
                this.init();//入口函数
                // console.log(this.wrapperWidth)
                this.bindEvent();
                this.sliderAuto();
        }
        //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 整个插件的入口
        Swiper.prototype.init = function () {
                // this.imageObj = this.obj.image;//得到所有的图片对象（包含无缝连接的那一张）
                this.nowIndex = 0;
                this.flag = true;
                this.timer = null;
                this.noOverFlag = true;
                this.len = this.obj.image.length - 1;//当前的图片长度length
                this.itemWidth = parseInt(this.wrapperWidth.css('width'));//父级的宽度
                this.itemHeight = parseInt(this.wrapperWidth.css('height'));//父级的高度
                this.creatDom();//首先要生成dom结构
        };
        //生成dom结构—————————————————————————————————————— ------>father   image.length
        Swiper.prototype.creatDom = function () {
                var len = this.len;
                var str = '';
                var imgBox = $('<ul class="img-box"></ul>');//轮播图li的父级ul
                var bottom = $('<div class="bottom"></div>');//小圆点ul的父级
                var list = $('<ul></ul>');//小圆点的父级ul
                var listStr = '';
                var btn = '<div class="btn"><div class="prev"><span></span></div><div class="next"><span></span></div></div>'
                console.log(len)
                for (var i = 0; i < len; i++) {//通过for循环生成li，插入到到ul里边
                        str += '<li><a href="javaScript:void(0)"><img src="' + this.obj.image[i] + '" alt="#"></a></li>';//轮播图

                        listStr += '<li></li>';//下边小圆点
                }
                str += '<li><a href="javaScript:void(0)"><img src="' + this.obj.image[0] + '" alt="#"></a></li>';//无缝连接的最后一张
                $(listStr).appendTo(list);//把小圆点li插入到list（ul中）
                this.wrapperWidth.append(imgBox.html(str))//把imgBox(ul)和ul里边的li插入到轮播图父级里边
                        .append($(btn))
                        .append(bottom.append(list));
                $('buttom li').eq(0).addClass('active');
                $('.img-box').css({
                        width:this.itemWidth*(this.len + 1) + 'px',
                        heigth:this.itemHeight + 'px',
                });
                $('img-box li').css({
                        width:this.itemWidth + 'px', 
                        height:this.itemHeight + 'px',
                });
        };
        Swiper.prototype.bindEvent = function () {
                var self = this;
                var noOverFlag = this.noOverFlag;
                $('.bottom li').add($('.prev')).add($('.next')).on('click', function () {
                        if ($(this).attr('class') == 'prev') {
                                console.log(this);
                                self.move('prev');
                                console.log('prev');
                        } else if ($(this).attr('class') == 'next') {
                                self.move('next');
                                console.log(this);
                        } else {
                                self.move($(this).index());
                        }
                        self.changeIndex()
                })
                self.wrapperWidth.on('mouseenter', function () {
                        self.noOverFlag = false;//改变全局上边的变量，如果你还想用var noOverFlag = this.noOverFlag;那么它只是改变了局部的变量，而没改变全局变量
                        clearTimeout(self.timer);
                        $('.btn').show();
                        console.log('clear')
                }).on('mouseleave', function () {
                        self.noOverFlag = true;
                        $('.btn').hide();
                        self.sliderAuto();
                })
        }
        Swiper.prototype.move = function (dir) {
                var flag = this.flag;
                var self = this;
                // var nowIndex = self.nowIndex;
                var len = self.len;
                var boxWidth = self.itemWidth;
                if (flag) {
                        flag = false;
                        if (dir == 'prev' || dir == 'next') {
                                if (dir == 'prev') {
                                        if (self.nowIndex == 0) {
                                                $('.img-box').css('left', -(len * boxWidth) + 'px')
                                                self.nowIndex = len - 1;
                                        } else {
                                                self.nowIndex--;
                                        }
                                } else {
                                        if (self.nowIndex == len - 1) {
                                                $('.img-box').animate({ 'left': -(len * boxWidth) + 'px' }, function () {
                                                        $(this).css('left', '0');
                                                        self.sliderAuto();
                                                        flag = true;
                                                })
                                                self.nowIndex = 0;
                                        } else {
                                                self.nowIndex++;
                                        }
                                }
                        } else {
                                self.nowIndex = dir;
                        }
                }
                self.slider();
        }
        Swiper.prototype.slider = function () {
                var nowIndex = this.nowIndex;
                var boxWidth = this.itemWidth;
                var self = this;
                var flag = this.flag;
                $('.img-box').animate({ 'left': -(nowIndex * boxWidth) + 'px' }, function () {
                        flag = true;
                        self.sliderAuto();
                })
        }
        Swiper.prototype.changeIndex = function () {
                var nowIndex = this.nowIndex;
                $('.active').removeClass('active');
                $('.bottom li').eq(nowIndex).addClass('active');
        }
        Swiper.prototype.sliderAuto = function () {
                var self = this;
                // var noOverFlag = this.noOverFlag;
                if (self.noOverFlag) {
                        clearTimeout(self.timer);
                        self.timer = setTimeout(function () {
                                self.move('next');
                                self.changeIndex();
                        }, 1500)
                }
        }

        //把插件扩展到jQuery上边 
        $.fn.extend({
                sliderImg: function (objectArr) {
                        objectArr.father = this || $('body');//轮播图的父级
                        new Swiper(objectArr);
                }
        })
})(jQuery)























