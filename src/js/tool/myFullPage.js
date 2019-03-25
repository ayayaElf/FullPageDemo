//实例方法
$.fn.extend({
    myFullPage: function(config){
        // config.colorArray
        //初始化变量
        var colorArray = config.colorArray;
        var $W = $(this);
        var $Section = $W.find('.section');
        var commonStyle = {
            width: '100%',
            height: '100%'
        };
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();
        //索引 0 ==> 第一个
        var curIndex = 0;
        var lock = true;

        // 初始化样式
        $('html')
            .add('body')
                .css({
                    position: 'relative',
                    overflow: 'hidden',
                    margin: 0
                })
                    .add($W)
                        .add($Section)
                            .css(commonStyle);
        $W.css({position: 'absolute', left: 0, top: 0})
            .find('.section')
                .each(function (index, ele){
                    $(ele).css({
                        background: colorArray[index],
                        position: 'relative'
                    }).find('.slide')
                        .css({float: 'left', width: clientWidth, height: clientHeight, position: 'relative'})
                            .wrapAll('<div class="sliderWrapper"></div>')
                });

        $Section.find('.sliderWrapper').each(function(index, ele){
            $(ele).css({width: $(ele).find('.slide').size() * clientWidth, height: clientHeight})
        });

        //js控制移动
        $Section.eq(0)
            .addClass('active')
                .end().find('.sliderWrapper')
                    .css({position: 'absolute', left: 0, top: 0})
                        .each(function(index, ele){
                            $(ele).find('.slide').eq(0).addClass('innerActive')
                        });

        //控制移动
        $(document).on('keydown', function(e){
            if(e.which == 38 || e.which == 40){
                //垂直移动 $W
                if(lock){
                    lock = false;
                    var newTop = $W.offset().top;
                    var direction = '';

                    if(e.which == 38 && curIndex != 0){
                        direction = 'top';
                        config.onLeave(curIndex,direction);
                        curIndex--;
                        newTop += clientHeight;

                    }else if(e.which == 40 && curIndex != $Section.size() - 1){
                        direction = 'bottom';
                        config.onLeave(curIndex, direction)
                        curIndex++;
                        newTop -= clientHeight;
                    }

                    $W.animate({
                        top: newTop
                    }, 350, 'swing', function(){
                        lock = true;
                        $Section.eq(curIndex).addClass('active');
                        if(direction == 'top'){
                            $Section.eq(curIndex + 1).removeClass('active');
                        }else{
                            $Section.eq(curIndex - 1).removeClass('active');
                        }
                        config.afterLoad(curIndex, direction);
                    });
                }
            }
            if(e.which == 37 || e.which == 39){
                //水平移动 .active .sliderWrapper
                if(lock){
                    lock = false;
                    var $SW = $('.active').find('.sliderWrapper');
                    if($SW.length != 0){
                        var curShowDom = $SW.find('.innerActive');
                        var newLeft = $SW.offset().left;
                        var direction = null;
                        if(e.which == 37 && curShowDom.index() != 0){
                            newLeft += clientWidth;
                            direction = 'left';
                        }else if(e.which == 39 && curShowDom.index() != $SW.find('.slide').size() - 1){
                            newLeft -= clientWidth;
                            direction = 'right';
                        }
                        $SW.animate({
                            left: newLeft
                        }, 200, 'swing', function(){
                            lock = true;
                            direction != null ? curShowDom.removeClass('innerActive') : '';
                            if(direction == 'left'){
                                curShowDom.prev().addClass('innerActive');
                            }else{
                                curShowDom.next().addClass('innerActive');
                            }
                            config.afterLoad(direction);
                        })
                    }else{
                        lock = true;
                    }

                }
            }
        })
    }
});
