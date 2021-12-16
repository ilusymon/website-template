// 头部二维码切换
$('.has-child').hover(function(){
    $(this).addClass('open')
  },function(){
    $(this).removeClass('open')
  })

$("#nav li").hover(function(){
  $(this).addClass('on')
},function(){
  $(this).removeClass('on')
})

$("#slidetoggle li").click(function(){
  if(!$(this).hasClass('on')){
    $("#slidetoggle li").removeClass('on')
    $(this).addClass('on')
  }
})

// 关闭弹出层
$('.close,.mask').click(function(){
  $("#dialog").fadeOut()
})

// 返回顶部
$("#backtop").click(function(){
  $('html,body').animate({scrollTop:0},500);
})
