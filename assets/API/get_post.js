import { fake_api_post } from './list_post.js';
;(function(){
    
    // console.log(fake_api)
    const getApi_post = () => {
        return new Promise((resolve) => {
            setTimeout(()=>{
                return resolve(fake_api_post);
            },250);
        });
    }
    
    getApi_post()
        .then(function(data){       
            data.forEach(function(value, index){ 
                document.querySelector('.list_post').innerHTML += 
                '<div name="Bài đăng" class="body_block shadown1"><div class="flex_between_center pd16"><div class="messenger"><img src="'+ value.avatar +'" alt="information_avatar" class="img img40 circle shadown1"><div class="mg_l8"><p class="font15 fontw500 color_black hover_a">Bùi Phương Thảo</p><div class="messenger"><p class="font15 fontw500 color_link hover_a">'+ value.mood +'</p><span class="font12 color_black mg_l8 hover_a">'+ value.time_public +'<span class="material-symbols-outlined icon12 color_link">public</span></span></div></div></div><span class="material-symbols-outlined icon_center36 hw36 fontw500 icon28 bg3 hv circle">more_horiz</span></div>'
                      
                      + '<div class="pd_4_16 pd_bt16"><p class="font15 color_black">'+ value.text +'</p></div>'
                
                      +'<a href="#" class="w100p"><img class="img img100p" src="'+ value.main_img +'" alt="bai dang"></a>'
                       
                      +'<div class="pd_lr16"><div class="flex_between_center boder_bottom_no_padding pd_4_0"><div class="messenger"><span class="material-symbols-outlined icon_center36 hw36 fontw500 icon28 color_i" style="--i: rgb(237, 20, 20);">favorite</span><span class="material-symbols-outlined icon_center36 hw36 fontw500 icon28 color_i mg_lr-16" style="--i: rgb(63, 20, 237);">thumb_up</span><span class="color_link font15 mg_lr16">'+ value.like_quantity +'</span></div>'
            
                      +'<div class="messenger"><p class="color_link font15">'+ value.comment_quantity +'<span class="mg_l4">bình luận</span></p><p class="color_link font15 mg_l8">'+ value.share_quantity +'<span class="mg_l4">chia sẻ</span></p></div></div>'
            
                      +'<div class="flex_between_center boder_bottom_no_padding boder_bottom_nopadding pd_4_0"><div class="flex_center_center br1r hv pd_4_16 m_pd_4_2 mg_t4"><div class="messenger color_link"><span class="material-symbols-outlined icon28 m_icon18">thumb_up</span><span class="mg_l8 font15 fontw500">Thích</span></div></div><div class="flex_center_center br1r hv pd_4_16 m_pd_4_2"><div class="messenger color_link"><span class="material-symbols-outlined icon28 m_icon18">chat_bubble</span><span class="mg_l8 font15 fontw500">Bình luận</span></div></div><div class="flex_center_center br1r hv pd_4_16 m_pd_4_2"><div class="messenger color_link"><span class="material-symbols-outlined icon28 m_icon18">share</span><span class="mg_l8 font15 fontw500">Chia sẻ</span></div></div></div></div>'
        
                      +'<div class="flex_end_center pd_lr16 pd_t4"><p class="font15 color_link fontw500 messenger hv br1r">Bình luận liên quan nhất <span class="material-symbols-outlined">arrow_drop_down</span></p></div><div class="flex_between_center pd_4_16"><a href="#"><img src="./assets/img/avatar.jpg" alt="avatar" class="img img36 circle"></a><input type="text" class="chat_search mg_l8 color_link" placeholder="Viết bình luận..."></div></div>';
               });  
           })
    
          .catch(function(){
           console.log("Không tải được dữ liệu");
       })

})()
// post end ===================================

import { fake_api_room } from './list_post.js';
;(function(){
    const getApi_room = () => {
        return new Promise((resolve, reject) => {
            setTimeout( ()=>{
                return resolve(fake_api_room);
            },250);
        })
    }
    var widthx;
    getApi_room()
        .then(function(data){
            data.forEach(function(value,index){
                var x = document.createElement("li");
                x.innerHTML = '<li><div><a class="br1r mg_lr8" href="#"><div class="img-status"><img src="'+ value.avatar +'" alt="girl" class="img img_bd img40 circle"><div class="circle hw10 bg2 status"></div></div></a></div></li>'
                document.querySelector('.room_list').appendChild(x);
           
            });
            return document.querySelector('.js-list_room').clientWidth;
        })
        .then(function(width_room){
            var btn_room_right = document.querySelector('.js_transfer_room_right');
            var btn_room_left = document.querySelector('.js_transfer_room_left');
    
            var list_room = document.querySelector('.js-list_room');
            var transform = 0;
            var width_box_room = document.querySelector('.js-box_room').clientWidth;
            
            btn_room_right.addEventListener('click',function(){
            transform +=  width_box_room/10 *0.8;
            list_room.style.transform = "translateX(-"+ transform +"rem)";
    
            if(list_room.style.transform == ""){
                btn_room_left.style.display = "none";
            }
            else{
                btn_room_left.style.display = "block";
            }
    
            if(transform >= width_room/10){
                btn_room_right.style.display = "none";
            }
            });
    
            btn_room_left.addEventListener('click',function(){
            transform -=  width_box_room/10 *0.8;
            list_room.style.transform = "translateX(-"+ transform +"rem)";
    
            if(list_room.style.transform == "translateX(0rem)"){
                btn_room_left.style.display = "none";
            }
            if(transform < width_room/10){
                btn_room_right.style.display = "block";
            }
            });
    
        })
        .catch(function(){
            console.log("Lỗi dữ liệu ở danh sách room");
        })
})()
// room end ===================================

import { fake_api_ad } from './list_post.js';
(function(){
    const getApi_ad = ()=>{
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                return resolve(fake_api_ad);
            },250);
        })
    }
    
    getApi_ad()
        .then(function(data){
            var items = data.length;
            var list_ad = document.querySelectorAll('.js-ad li a');
            var count = 0;
    
            // setInterval(()=>{
            //     count++; console.log(count);
            //     for(var i=0;i < list_ad.length;i++){
            //         list_ad[i].querySelector('img').src = data[count % items].img;
            //         if(count == items) count = -1;
            //     }
            // },1000)
        })
        .catch(function(){
            console.log("lỗi ở quảng cáo right sidebar")
        })
})()
// ads end ===================================