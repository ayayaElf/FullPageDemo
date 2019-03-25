pageEngine.init('.box', ['#ffc', '#cff', '#fcc'])
    .addSection('oneSection')
        .addComponent({
            type: 'base',
            className: 'duyi',
            width: 522,
            height: 336,
            text: '1.png',
            center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/1.png)',
                backgroundSize: '100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px',
                color: '#fff'
            },
            animateIn: {
                opacity: 1,
                top: 240,
            },
            animateOut: {
                opacity: 0,
                top: 0
            },
            delay: 1000,
            event: {
                click: function () {
                    alert($(this).text());
                },
                mouseenter: function(){

                }
            }
        })
    .addSection('towSection')
        .addComponent({
            type: 'base',
            className: 'duyi',
            width: 522,
            height: 336,
            text: '2.png',
            center: true,
            css: {
                position: 'absolute',
                opacity: 0,
                top: 0,
                backgroundImage: 'url(./src/img/2.png)',
                backgroundSize: '100% 100%',
                padding: '10px 15px 10px 15px',
                textAlign: 'justify',
                fontSize: '18px',
                fontWeight: '900',
                lineHeight: '25px',
                color: '#fff'
            },
            animateIn: {
                opacity: 1,
                top: 240,
            },
            animateOut: {
                opacity: 0,
                top: 0
            },
            delay: 1000,
            event: {
                click: function () {
                    alert($(this).text());
                },
                mouseenter: function(){

                }
            }
        })
    .addSection('threeSection')
        .addSlide('3-slide-1')
            .addComponent({
                type: 'base',
                className: 'duyi',
                width: 522,
                height: 336,
                text: '3.png',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/3.png)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 240,
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 1000,
                event: {
                    click: function () {
                        alert($(this).text());
                    },
                    mouseenter: function(){

                    }
                }
            })
        .addSlide('3-slide-2')
            .addComponent({
                type: 'base',
                className: 'duyi',
                width: 522,
                height: 336,
                text: '3.png',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/3.png)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 240,
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 1000,
                event: {
                    click: function () {
                        alert($(this).text());
                    },
                    mouseenter: function(){

                    }
                }
            })
        .addSlide('3-slide-3')
            .addComponent({
                type: 'base',
                className: 'duyi',
                width: 522,
                height: 336,
                text: '3.png',
                center: true,
                css: {
                    position: 'absolute',
                    opacity: 0,
                    top: 0,
                    backgroundImage: 'url(./src/img/3.png)',
                    backgroundSize: '100% 100%',
                    padding: '10px 15px 10px 15px',
                    textAlign: 'justify',
                    fontSize: '18px',
                    fontWeight: '900',
                    lineHeight: '25px',
                    color: '#fff'
                },
                animateIn: {
                    opacity: 1,
                    top: 240,
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 1000,
                event: {
                    click: function () {
                        alert($(this).text());
                    },
                    mouseenter: function(){

                    }
                }
            })
    .load();
