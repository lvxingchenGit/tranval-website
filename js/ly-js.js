// 轮播图插件入口
$(function () {
        $('#swiper').sliderImg({
                image: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/1.jpg']
        });
        //目的地下拉菜单 
        $('.des').on('mouseenter', function () {
                $('.down-list').css({ 
                        opacity: '0.9',
                        display: 'block',
                });
        })
        $('.down-list').on('mouseleave', function () {
                $('.down-list').css({ opacity: '0', display: 'none' });
        })
        // 服务标准上移动画
        var $itemWrap = $('.item-wrapper').offset().top + 200;
        var $win = $(window).height();
        // console.log($win)
        // console.log($(window).scrollTop())
        $(window).scroll(function () {
                if ($(window).scrollTop() + $win > 1000 && $(window).scrollTop() + $win < 2100) {
                        $('.item-box:nth-of-type(1)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.35s linear'
                        });
                        $('.item-box:nth-of-type(2)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.45s linear'
                        });
                        $('.item-box:nth-of-type(3)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.55s linear'
                        });
                        $('.item-box:nth-of-type(4)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.65s linear'
                        });
                        $('.item-box:nth-of-type(5)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.75s linear'
                        });
                        $('.item-box:nth-of-type(6)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.85s linear'
                        });
                        $('.item-box:nth-of-type(7)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 0.95s linear'
                        });
                        $('.item-box:nth-of-type(8)').css({
                                transform: 'translateY(0)',
                                transition: 'transform 1.05s linear'
                        });
                } else if ($(window).scrollTop() + $win > 2100 && $(window).scrollTop() + $win < 2800) {
                        $('.item-box').css({
                                transform: 'translateY(300%)'
                        });
                        $('.hot-des-item:nth-of-type(1)').css({
                                transform: 'translateX(0)',
                                transition: 'transform 0.5s linear'
                        });
                        $('.hot-des-item:nth-of-type(2)').css({
                                transform: 'translateX(0)',
                                transition: 'transform 0.5s linear'
                        });
                        $('.hot-des-item:nth-of-type(3)').css({
                                opacity: '1',
                                transform: 'rotateY(0deg)',
                                transition: 'opacity 2s linear,transform 1s linear'
                        });
                        $('.hot-des-item:nth-of-type(4)').css({
                                opacity: '1',
                                transform: 'rotateY(0deg)',
                                transition: 'opacity 2.5s linear,transform 1.5s linear'
                        });
                        $('.hot-des-item:nth-of-type(5)').css({
                                opacity: '1',
                                transform: 'rotateY(0deg)',
                                transition: 'opacity 3s linear,transform 2s linear'
                        })
                } else if ($(window).scrollTop() + $win > 3000) {
                        $('.hot-line-item:nth-of-type(1),.hot-line-item:nth-of-type(2),.hot-line-item:nth-of-type(3)')
                                .css({
                                        transform: 'translateX(0)',
                                        transition: 'transform 1s linear'
                                });
                        $('.hot-line-item:nth-of-type(4),.hot-line-item:nth-of-type(5),.hot-line-item:nth-of-type(6)')
                                .css({
                                        transform: 'translateX(0)',
                                        transition: 'transform 1s linear'
                                })
                }

        })
        // 服务-类似轮播图动画
        $('.left-btn').on('click', function () {
                $('.ser-waiter-item-box').css({
                        transform: 'translateX(0px)',
                        transition: 'transform 0.5s linear'
                })
        })
        $('.right-btn').on('click', function () {
                $('.ser-waiter-item-box').css({
                        transform: 'translateX(-317px)',
                        transition: 'transform 0.5s linear'
                })
        })
        // 返回顶部
        $('.o-top').bind('click',function(){
                var myHeight = 0;
                $('html,body').animate({
                        scrollTop:myHeight,
                },500)
        })


















}())






