1. mixin 与函数的区别
    mixin 是一段样式的封装，可以在引用的地方复用

2. stylus 内置的函数库
    floor math(0,'random') 
    unit(,'px')
3. 200个元素 stylus for
    for num in 1..200
        .g-ball:nth-child({num})
            $width=random(0,40)
            width unit($width,'px')

4.