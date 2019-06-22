$(function () {
    let leftBtn = $('.page-next-1'),
        rightBtn = $('.page-next-2'),
        list = $('.page_list > li'),
        imgs =$('.cold >li'),
        body_1 =$('.body-1');
        ul = $('.page_list')
    imgsWidth = imgs.width();
    let current = 0;
    let next =0;
    let flag =true;
    let li4 = document.querySelectorAll('.page_list li')
    let li3 = document.querySelectorAll('.cold li');
    rightBtn.click(function () {
        if(!flag){
            return;
        }
        flag = true;
        next++;
        if(next == imgs.length){
            next = 0;
        }
         $(imgs[current]).css({left: -imgsWidth})
         $(imgs[next]).css({left:0})

         $(list[current]).removeClass('hot6');

         $(list[next]).addClass('hot6');
        current = next;
    })

    leftBtn.click(function () {
        if(!flag){
            return;
        }
        flag = true;
        next--;
        if(next < 0){
            next = 3;
        }
        $(imgs[current]).css({left: imgsWidth})
        $(imgs[next]).css({left:0})

        $(list[current]).removeClass('hot6');

        $(list[next]).addClass('hot6');
        current = next;
    })

    /*for(let i=0;i<4;i++) {
        ul.on('click', 'li', function () {
            console.log(1);
            if(next===i){
                return;
            }
            next=i;
            if(next>current){
                $(imgs[next]).css({left:imgsWidth})
                animate($(imgs[current]).css({left:-imgsWidth}))
                animate( $(imgs[next]).css({left:0}))

            }else{
                $(imgs[next]).css({left:-imgsWidth})
                animate($(imgs[current]).css({left:imgsWidth}))
                animate( $(imgs[next]).css({left:0}))
            }

            li4[current].classList.remove('hot6');
            li4[next].classList.add('hot6');
            current=next;
        })
    }*/
    let t;
     $(body_1[0]).mouseenter(function () {
         clearInterval(t);
     })
    $(body_1[0]).mouseleave(function () {
        t=setInterval(function () {
            rightBtn.click()
        },1000)
    })


    //延迟加载
    $("img.lazy").lazyload({effect: "fadeIn"});
})