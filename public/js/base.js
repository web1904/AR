/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		47: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://www.ido-love.com";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

/*
* @Author: pengxucan
* @Date:   2017-10-31 13:15:25
* @Last Modified by:   lijiao
* @Last Modified time: 2019-02-18 11:44:16
*/
__webpack_require__(16);
var ipad='';
$(function() {
	if(window.location.href=='https://www.ido-love.com' || window.location.href=='https://www.ido-love.com/index.html'){
		setTimeout(function(){
            ysf('open');
		},15000)
	}
    $('.footer_kf').click(function () {
        ysf('open');
    })
    //错误图片默认样式
    var windowHref = window.location.href
    if (windowHref.indexOf('/queryRecommendArts.html')>-1) {
        $('img').error(function(){
            $(this).attr('src', "https://img.ido-love.com/ido-logo1.jpg");
        });
    } else {
        $('img').error(function(){
            $(this).attr('src', "https://img.ido-love.com/ido-logo.png");
        });
    }
    //回到顶部
    $(".scrollTop").hide();
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scrollTop").fadeIn(1000);
        } else {
            $(".scrollTop").fadeOut(1000);
        }
    });
    $(".allgotop").click(function() {
        $('body,html').animate({
                scrollTop: 0
            },
            1000);
        return false;
    });
    $(".service_kf").click(function(){
        ysf('open');
    })
    //判断是否登录
    setTimeout(function(){
    	 $.ajax({
	        type : "get",
	        async:false,
	        url : ipad+"/api/v1/member-auth/auth/check-token",
	        success : function(json){
	        	// if(getCookie('token')!=null){
	        	// 	if( IE11()>10){
	        	// 		$("#loginOut").show()
	        	// 	}else{
	        	// 		$("#loginOut").show()
	        	// 	}
	        		
	        	// }else{
	        	// 	$("#loginOut").hide()
	        	// }
	        	
	            if(json.code==200){
	                $("#loginOut").css("display","block");
	            }else{
	                $("#loginOut").css("display","none");
	            }
	        },
	        error:function(err){
	        	var windowHrefLogin = window.location.href;
	            if(err.status==401){
	                $("#loginOut").css("display","none");
	                if($(".loginAuth").val()==1) {
	                	if (windowHrefLogin.indexOf('/login.html')=='-1'||windowHrefLogin.indexOf('/findpassword.html')=='-1'){
	                		window.location.href="/login.html";
	                	}
	                }
	            }
	        }
	    });
    },200)
   
    $(".shidai").on("click",function(){
        ysf('open');
    })
    function fn(classname){
        if(document.getElementsByClassName){
            return document.getElementsByClassName(classname);
        }else{
            var arr=[];
            var divs=document.getElementsByTagName("*");
            for(var i=0;i<divs.length;i++){
                if(divs[i].className==classname){
                    arr.push(divs[i]);
                }
            }
            return arr;
        }
    }
    var step = 0
    function iScroll(obj,upbtn,downbtn,i) {
        var scrollBox = fn(obj)[0];
        var upBtn = fn(upbtn)[i]
        var downBtn = fn(downbtn)[i]
        var  maxScroll = scrollBox.scrollHeight - $(scrollBox).height()
        step = $(scrollBox).scrollTop()
        if($(scrollBox).scrollTop() == 0){
            $(upBtn).hide()
            step = 0
        }else{
            $(upBtn).show()
        }
        if($(scrollBox).scrollTop() == maxScroll){
            $(downBtn).hide()
            step = maxScroll
        }else{
            $(downBtn).show()
        }
    }
    function iDown(obj,count) {
        var scrollBox = fn(obj)[0]
        step = $(scrollBox).scrollTop()
        var  maxScroll = scrollBox.scrollHeight - $(scrollBox).height()
        step += count
        $(scrollBox).scrollTop(step)
        if($(scrollBox).scrollTop() == maxScroll){
            step = maxScroll
        }
    }
    function iUp(obj, count) {
        var scrollBox = fn(obj)[0];
        step = $(scrollBox).scrollTop()
        step -= count
        $(scrollBox).scrollTop(step)
        if($('.mainbox').scrollTop() == 0){
            step = 0
        }
    }
    //导航
    $(".menu").click(function(){
        $('.nav_box').show();
        $('.nav_left').on('click',function (e) {
            e.stopPropagation();
        })
        $('.searchall').hide();
        $('.nav_box .nav_left .nav_close').on('click',function () {
            $('.nav_box').hide()
        })
        $('.nav_box').on('click',function () {
            $('.nav_box').hide()
        })
        $('.ring').on('click',function () {
        	$(this).find("._img").css("background-image","url(https://img.ido-love.com/icon/ring_hover.png)")
        	$(".gift").find("._img").css("background-image","url(https://img.ido-love.com/icon/gift.png)")
        	$(".series").find("._img").css("background-image","url(https://img.ido-love.com/icon/series.png)")
            var className = 'ring_product'
            $('.nav_middle>div').hide()
            $('.rightlist').hide()
            $('#ring_nav').show()
            $('.nav_middle').on('click',function (e) {
                e.stopPropagation();
            })
            $('#ring_nav').children('.nav_one').children('a').css('background','#f0f0f0')
            $('.ring_list').show()
            $('.nav_right').on('click',function (e) {
                e.stopPropagation();
            })
            $('.jiehun .g_r_img img').each(function () {
                if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                    if ($(this).attr('data-src'))
                        $(this).attr('src', $(this).attr('data-src'))
                }
            });
            $('.ring_child>a').on('mouseover',function () {
                className = $(this).parents('.ring_child').data('id')
                var that = fn(className)[0]
                $('.ring_child').children('a').css('background','#fff')
                $(this).css('background','#f0f0f0')
                $('.upbtn').hide()
                $(that).siblings('.ring_product').scrollTop(0).hide()
                $(that).show()
                if(fn(className)[0].scrollHeight > $('.'+className).height()){
                    $('.downbtn').show()
                }else{
                    $('.downbtn').hide()
                }
                $('.' + className + ' .g_r_img img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
            })
            $('.ring_child>a').on('mouseout',function () {
                $('.ring_child').children('a').css('background','#fff')
            })
            $('.ring_list .ring_product').scroll(function () {
                $(this).find('img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
            })
            $('.' + className).on('scroll',function () {
                iScroll(className,'upbtn','downbtn',1)
            })
            $('.ring_list').on('click','.right_up',function () {
                iUp(className,150)
            })
            $('.ring_list').on('click','.right_down',function () {
                iDown(className,150)
            })
            if(fn(className)[0].scrollHeight > $('.'+className).height()){
                $('.downbtn').show()
            }else{
                $('.downbtn').hide()
            }
        })
        $('.gift').on('click',function () {
        	$(".ring").find("._img").css("background-image","url(https://img.ido-love.com/icon/ring.png)")
        	$(this).find("._img").css("background-image","url(https://img.ido-love.com/icon/gift_hover.png)")
        	$(".series").find("._img").css("background-image","url(https://img.ido-love.com/icon/series.png)")
            var className = 'gift_product'
            $('.nav_middle>div').hide()
            $('.rightlist').hide()
            $('#gift_nav').show()
            $('.nav_middle').on('click',function (e) {
                e.stopPropagation();
            })
            $('#gift_nav').children('.nav_one').children('a').css('background','#f0f0f0')
            $('.gift_list').show()
            $('.nav_right').on('click',function (e) {
                e.stopPropagation();
            })
            $('.jinian .g_r_img img').each(function () {
                if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                    if ($(this).attr('data-src'))
                        $(this).attr('src', $(this).attr('data-src'))
                }
            })
            $('.gift_child>a').on('mouseover',function () {
                className = $(this).parents('.gift_child').data('id')
                var that = fn(className)[0]
                $('.gift_child').children('a').css('background','#fff')
                $(this).css('background','#f0f0f0')
                $('.upbtn').hide()
                $(that).siblings('.gift_product').scrollTop(0).hide()
                $(that).show()
                if(fn(className)[0].scrollHeight > $('.'+className).height()){
                    $('.downbtn').show()
                }else{
                    $('.downbtn').hide()
                }
                $('.' + className + ' .g_r_img img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
            })
            $('.gift_child>a').on('mouseout',function () {
                $('.gift_child').children('a').css('background','#fff')
            })
            $('.gift_list .gift_product').scroll(function () {
                $(this).find('img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1500) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
            })
            if(fn(className)[0].scrollHeight > $('.'+className).height()){
                $('.downbtn').show()
            }else{
                $('.downbtn').hide()
            }
            $('.' + className).on('scroll',function () {
                iScroll(className,'upbtn','downbtn',2)
            })
            $('.gift_list').on('click','.right_up',function () {
                iUp(className,150)
            })
            $('.gift_list').on('click','.right_down',function () {
                iDown(className,150)
            })
        })
        $('.series').on('click',function () {
        	$(".ring").find("._img").css("background-image","url(https://img.ido-love.com/icon/ring.png)")
        	$(".gift").find("._img").css("background-image","url(https://img.ido-love.com/icon/gift.png)")
        	$(this).find("._img").css("background-image","url(https://img.ido-love.com/icon/series_hover.png)")
            var className = 'product'
            $('.nav_middle>div').hide()
            $('.rightlist').hide()
            $('#series_nav .arrow_up .up').hide()
            $('#series_nav').show()
            $('.nav_middle').on('click',function (e) {
                e.stopPropagation();
            })
            if(fn('childbox')[0].scrollHeight > $('.childbox').height()){
                $('#series_nav .arrow_down .down').show()
            }else{
                $('#series_nav .arrow_down .down').hide()
            }
            $('.childbox').children('.nav_one').children('.series_title').css('background','#f0f0f0')
            $('.series_list').show()
            $('.nav_right').on('click',function (e) {
                e.stopPropagation();
            })
            className = $('.childbox').children('.nav_one').children('a').data('id');
            if(fn(className)[0].scrollHeight > $('.'+className).height()){
                $('.downbtn').show()
            }else{
                $('.downbtn').hide()
            }
            $('.' + className + ' .series_img img').each(function () {
                if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1000) {
                    if ($(this).attr('data-src'))
                        $(this).attr('src', $(this).attr('data-src'))
                }
            });
            $('.series_title').on('mouseover',function () {
                className = $(this).data('id')
                var that = fn(className)[0]
                $('.series_title').css('background','#fff')
                $(this).css('background','#f0f0f0')
                $('.upbtn').hide()
                $(that).siblings('.product').scrollTop(0).hide()
                $(that).show()
                if(fn(className)[0].scrollHeight > $('.'+className).height()){
                    $('.downbtn').show()
                }else{
                    $('.downbtn').hide()
                }
                $('.' + className + ' .series_img img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1000) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
                $('.' + className ).on('scroll',function () {
                    iScroll(className,'upbtn','downbtn',0)
                })
            })
            $('.series_title').on('mouseout',function () {
                $('.series_title').css('background','#fff')
            })
            $('.series_list .product').scroll(function () {
                $(this).find('img').each(function () {
                    if ($(this).offset().top > window.scrollY && $(this).offset().top < window.scrollY + 1000) {
                        if ($(this).attr('data-src'))
                            $(this).attr('src', $(this).attr('data-src'))
                    }
                })
            })
            if(fn(className)[0].scrollHeight > $('.'+className).height()){
                $('.downbtn').show()
            }else{
                $('.downbtn').hide()
            }
            $('.' + className ).on('scroll',function () {
                iScroll(className,'upbtn','downbtn',0)
            })
            $('.series_list').on('click','.right_up',function () {
                iUp(className,200)
            })
            $('.series_list').on('click','.right_down',function () {
                iDown(className,200)
            })
            $('#series_nav').on('click','.arrow_down',function () {
                iDown('childbox',60)
            })
            $('#series_nav').on('click','.arrow_up',function () {
                iUp('childbox',60)
            })
            $('.childbox').on('scroll',function () {
                iScroll('childbox','up','down',0)
            })
        })


    })
    searchWinscroll();
    $(document).on('click','.search_pro',function(){
    	$('.product_d_d_detail').hide();
        $('.searchall img').each(function () {
            $(this).attr('src', $(this).attr("data-src"))
        })
        if($(".searchall").is(":hidden")){
        	$(".searchall").css("display","block");
        	$(".search_mask").show();
        }
        if(parseInt($(window).scrollTop())>=parseInt(document.body.clientHeight)){
            $(window).unbind();
            $('body,html').animate({scrollTop: 0},1000);
            $(".searchall").show();
            var h = $(document).height();
            $(".search_mask").css({ "height": h });
            $(".search_mask").show();
            setTimeout(searchWinscroll,1500);
        }
    })
//  $(".search_pro").click(function(){})
    $(".search_close").click(function(){
        search_close();
    })
    $(".search_mask").click(function(){
        search_close();
    })
    //登录
    $(".logoin").hover(function(){
    	$(".loginMask").show();
    	if($("#loginOut").css("display")=="block"){
    		$(".login-off").show();
    	}else{
    		$(".login-off").hide();
    	}
        
	},function(){
		$(".loginMask").hide();
	});
    $(".logoin").click(function(){
        // setTimeout(function () {
            $.ajax({
                type : "get",
                async:false,
                url :"/api/v1/member-auth/auth/check-token",
                success : function(json){
                    if(json.code == 200){
                        window.location.href='/order-list.html'
                    }else{
                        window.location.href = '/login.html'  
                    }
                },
                error:function(err){
                    if(err.code==401){
                        window.location.href = '/login.html'
                    }
                }
            });
        // }, 200)
    })
    
    $(document).on('click','.login-off',function(){
    	$.ajax({
            type : "get",
            async:false,
            url : ipad+"/api/v1/member-auth/auth/logout",
            success : function(json){
                if(json.code==200){
                    if(IE11()>10){
                        removeCookie('token');
                        alert("退出成功！");
                        window.location.reload()
                    }else{
                        removeCookie('token');
                        window.location.href = '/login.html'
                    }
                }
            },
            error:function(err){
                if(err.code==401){
			    	window.location.href = '/login.html'
			    }
            }
        });
    	
    })
    //搜索框搜索
    $(".entry_text input").bind('keypress',function(event){
        if(event.keyCode == "13"){
            var a = $(".search_go").get(0);
            if (isIE(8)) {
                a.click()
            } else {
                var e = document.createEvent('MouseEvents');
                e.initEvent( 'click', true, true );
                a.dispatchEvent(e);
            }
        }
    });
    $(".search_go").click(function(){
        var input = $(this).siblings("input");
        var query = $.trim(input.val());
        if (query === "") {
            input.val("");
            return
        }
        var encoded = encodeURI(query);
        var href = "/search/" + encoded + ".htm";
        var a = $("<a href='" + href + "' target='_blank'>" + query + "</a>").get(0);
        if (isIE(8)) {
            a.click()
        } else {
            var e = document.createEvent('MouseEvents');
            e.initEvent( 'click', true, true );
            a.dispatchEvent(e);
        }
    })
    $(".you").click(function(){
        nextscroll();
    });
    function nextscroll(){
        var vcon = $(".v_cont");
        var offset = ($(".v_cont li").width())*-1;
        vcon.stop().animate({marginLeft:offset},"slow",function(){
            var firstItem = $(".v_cont ul li").first();
            vcon.find(".flder").append(firstItem);
            $(this).css("margin-left","0px");
        });
    };
    $(".zuo").click(function(){
        var vcon = $(".v_cont");
        var offset = ($(".v_cont li").width()*-1);
        var lastItem = $(".v_cont ul li").last();
        vcon.find(".flder").prepend(lastItem);
        vcon.css("margin-left",offset);
        vcon.animate({marginLeft:"0px"},"slow")
    });
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if(r != null) {
            return r[2];
        }
        return null;
    }

    function getJson(str) {
        if(typeof str == "string") {
            return JSON.parse(str);
        } else {
            return str;
        }
    }
});
//存cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//读取cookies
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if(arr = document.cookie.match(reg)) {
        return unescape(arr[2]);
    }
    else {
        return null;
    }
}
//删除cookies
function removeCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    if(cval != null){
        document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString() + ";domain=.ido-love.com";
    }
}
function searchWinscroll(){
    $(window).bind("scroll", function () {
        if($(".searchall").css("display")=="block"){
            var sTop = $(window).scrollTop();
            var sTop = parseInt(sTop);
            var clientH=parseInt(document.body.clientHeight);
            if (sTop >= parseInt(clientH)) {
                $(".searchall").hide();
                $(".search_mask").hide();
            }else{
                $(".searchall").show();
                var h = $(document).height();
                $(".search_mask").css({ "height": h });
                $(".search_mask").show();
            }
        }
    })
}
function search_close(){
    $(".searchall").hide();
    $(".search_mask").hide();
}
//弹窗
jQuery.fn.center = function(loaded) {
    var obj = this;
    body_width = parseInt($(window).width());
    body_height = parseInt($(window).height());
    block_width = parseInt(obj.width());
    block_height = parseInt(obj.height());
    left_position = parseInt((body_width/2) - (block_width/2)  + $(window).scrollLeft()-10);
    if (body_width<block_width) { left_position = 0 + $(window).scrollLeft(); };
    top_position = parseInt((body_height/2) - (block_height/2) + $(window).scrollTop());
    if (body_height<block_height) { top_position = 0 + $(window).scrollTop(); };
    if(!loaded) {

        obj.css({'position': 'absolute'});
        obj.css({ 'top': top_position, 'left': left_position });
        $(window).bind('resize', function() {
            obj.center(!loaded);
        });
        $(window).bind('scroll', function() {
            obj.center(!loaded);
        });

    } else {
        obj.stop();
        obj.css({'position': 'absolute'});
        obj.animate({ 'top': top_position }, 200, 'linear');
    }
}

function isIE(ver) {
    var b = document.createElement('b');
    b.innerHTML = '<!--[if IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
}
function IE11(){
	var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? Sys.ie = s[1] :
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    
    if (Sys.ie) return (Sys.ie);
}


/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/imgs/pc.png";

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });