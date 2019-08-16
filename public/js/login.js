/* 
 * drag 1.0
 * create by tony@jentian.com
 * date 2015-08-18
 * 拖动滑块
 */
(function($){
  $.fn.drag = function(options){
      var x, drag = this, isMove = false, defaults = {
      };
      var options = $.extend(defaults, options);
      //添加背景，文字，滑块
      var html = '<div class="drag_bg"></div>'+
                  '<div class="drag_text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
                  '<div class="handler handler_bg"></div>';
      this.append(html);
      
      var handler = drag.find('.handler');
      var drag_bg = drag.find('.drag_bg');
      var text = drag.find('.drag_text');
      var maxWidth = drag.width() - handler.width();  //能滑动的最大间距
      
      //鼠标按下时候的x轴的位置
      handler.mousedown(function(e){
          isMove = true;
          x = e.pageX - parseInt(handler.css('left'), 10);
      });
      
      //鼠标指针在上下文移动时，移动距离大于0小于最大间距，滑块x轴位置等于鼠标移动距离
      $(document).mousemove(function(e){
          var _x = e.pageX - x;
          if(isMove){
              if(_x > 0 && _x <= maxWidth){
                  handler.css({'left': _x});
                  drag_bg.css({'width': _x});
              }else if(_x > maxWidth){  //鼠标指针移动距离达到最大时清空事件
                  dragOk();
              }
          }
      }).mouseup(function(e){
          isMove = false;
          var _x = e.pageX - x;
          if(_x < maxWidth){ //鼠标松开时，如果没有达到最大距离位置，滑块就返回初始位置
              handler.css({'left': 0});
              drag_bg.css({'width': 0});
          }
      });
      
      //清空事件
      function dragOk(){
          handler.removeClass('handler_bg').addClass('handler_ok_bg');
          text.text('验证通过');
          drag.css({'color': '#fff'});
          handler.unbind('mousedown');
          $(document).unbind('mousemove');
          $(document).unbind('mouseup');
      }
  };
})(jQuery);


(function(){
    // $("#static_login_btn").click(function(){
    //     var uname=$("#static_phoneNum").val();
    //     var upwd=$("#static_password").val();
    //     //发送请求
    //     $.ajax({
    //         url:"http://localhost:5500/user/login",
    //         type:"get",
    //         data:[uname,upwd],
    //         dataType:"json",
    //         success: function(result) {
    //             console.log(result)
    //             if(result.length>0){
    //                 window.location.reload()
    //                 sessionStorage.setItem("uname",uname);
    //             }else{
    //                 $(".test").addClass("test_block")
    //             }
    //         }
    //     })
    // })



    //登录
    $('#static_login_btn').on('click', function () {
        logosub()
    })
    $(".btn-dl").on("click", "#code_login_btn", function () {
        loginClick()
    })
    $('.forget').on('click', function () {
        window.location.href = "forgetpwd.html" + getParams();
    })
    var num = 0
    $('#style').on('click', function () {
        num++;
        if (num % 2 == 0) {
            $('#style').html('验证码登录')
            $('.forget').show()
            $('.information').removeClass('hide')
            $('.information').addClass('show')
            $('.code_login').removeClass('show')
            $('.code_login').addClass('hide')
            $('.login_button').show()
            $('.code_login_button').hide()
            $("#drag").slider("restore");
            $("#drag").slider()
            $(".psw_notice").html("");
            $(".loginmobile").val($.trim($("#static_phoneNum").val()))
        } else {
            $('#style').html('账号密码登录')
            $('.forget').hide()
            $('.information').removeClass('show')
            $('.information').addClass('hide')
            $('.code_login').removeClass('hide')
            $('.code_login').addClass('show')
            $('.login_button').hide()
            $('.code_login_button').show()
            $("#drag").slider("restore");
            $("#drag").slider()
            $(".psw_notice").html("");
            $(".loginmobile").val($.trim($("#phoneNum").val()))
        }
    })

     //  用户账号密码登录
     function logosub() {
        var loginName = $('#static_phoneNum').val();
        var loginPassword = $('#static_password').val();
        var mtel = /^1[0-9]{10}$/;
        var mreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (loginName == "" || loginName == null || (!mtel.test(loginName) && !mreg.test(loginName))) {
            $(".psw_notice").html("请输入正确的用户名");
            return false
        }else if (loginPassword.length < 6) {
            $(".psw_notice").html("请输入正确的密码");
            return false
        } else {
            $.ajax({
                type: "post",
                url: '/routers/user/login',
                data: {
                    "username": loginName,
                    "password": loginPassword
                },
                async: false,
                success: function (result) {
                    // console.log(result.code)
                    if (result.code == 200) {
                        redirectPage();
                        // console.log(result)
                    } else if (result.code == -1) {
                        $(".psw_notice").text("请求异常,请稍后尝试");
                    } else if (result.code == 1002) {
                        $(".psw_notice").html('您尚未注册会员，请先进行<a href="javascript:void(0);" onclick="window.location.href = \'/register.html\'" style="text-decoration:underline">注册</a>');
                    } else if(result.code == 1004){
                        $(".psw_notice").html('您已注册香榭之吻会员，请授权账号进行登录<a href="javascript:void(0);" class="shouquan" style="text-decoration:underline">授权</a>');
                    }else {
                        $(".psw_notice").text(result.desc);
                    }
                },
                error: function (err) {
                    $(".psw_notice").text("请求异常,请稍后尝试");
                }
            })
        }
    }
})()

