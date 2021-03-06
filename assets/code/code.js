import removeVietnameseTones from "./convertVie.js"; // chuyển chữ sang tiếng việt

var main = document.querySelector('#main');

var btn_menu_downbar = document.querySelector('.js-menu_control');
var menu_downbar = document.querySelector('.menu_downbar');



btn_menu_downbar.addEventListener('click',function(event){
    event.preventDefault();
    var list_downbar = document.querySelectorAll('.js-downbar');
        for(var item of list_downbar){
            item.classList.remove('open_downbar');        
        }
    menu_downbar.classList.toggle('open_downbar');
})

var btn_list_downbar = document.querySelectorAll('.js-items_control');

for(var btn of btn_list_downbar){
    btn.addEventListener('click',function(event){
        event.preventDefault();

        menu_downbar.classList.remove('open_downbar');

        var downbar = this.querySelector('.js-downbar');
        
        downbar.classList.toggle('open_downbar');
        
        var list_downbar = document.querySelectorAll('.js-downbar');
        for(var item of list_downbar){
            if(downbar !== item){
                item.classList.remove('open_downbar');
            }    
        }
    })
}

var list_color = document.querySelectorAll('.js-color');
var list_a_color = document.querySelectorAll('.js-color > a');

for(var btn_color of list_color){   // chuyển màu của các nút nhấn
    btn_color.addEventListener('click',function(event){

        event.stopPropagation();

        var a_color = this.querySelector('a');
        a_color.classList.toggle('color_black');
        a_color.classList.toggle('color_link-blue');

        a_color.classList.toggle('bg1');
        a_color.classList.toggle('bg4');

        for(btn_color of list_a_color){
            if(btn_color !== a_color){
                btn_color.classList.remove('color_link-blue');
                btn_color.classList.add('color_black');

                btn_color.classList.remove('bg4');
                btn_color.classList.add('bg1');
            }
        }
    })
}

main.addEventListener('click',function(){ // Toàn bộ trang trở thành nút tắt
    menu_downbar.classList.remove('open_downbar');
    var list_downbar = document.querySelectorAll('.js-downbar');
        for(var item of list_downbar){
                item.classList.remove('open_downbar');
        }

        for(btn_color of list_a_color){
                btn_color.classList.remove('color_link-blue');
                btn_color.classList.add('color_black');

                btn_color.classList.remove('bg4');
                btn_color.classList.add('bg1');
        }
})


function stopPropagation(event){
    event.stopPropagation();
    event.preventDefault();
}

var input_menu = btn_menu_downbar.querySelector('.menu_downbar');
input_menu.addEventListener('click',stopPropagation)

var input_list = document.querySelectorAll('.downbar');
for(var input0 of input_list){
    input0.addEventListener('click',stopPropagation);
}


var btn_down = document.querySelector('.js-btn-ul_leftbar-child');
var down_list = document.querySelector('.js-ul_leftbar');
var height_list = down_list.clientHeight;
var text_toggle = document.querySelector('.text_toggle');
var icon_toggle = document.querySelector('.icon_toggle');

var text_toggle_modal = document.querySelector('.text_toggle').innerText;
var icon_toggle_modal = document.querySelector('.icon_toggle').innerHTML;



btn_down.addEventListener('click',function(event){
    event.preventDefault();
    if(down_list.clientHeight == height_list){
        down_list.style.height = 'auto';
        text_toggle.innerText = "Ẩn bớt";
        icon_toggle.innerHTML = '<span class="material-symbols-outlined">expand_less</span>';
    }
    else{
        down_list.style.height = null;
        text_toggle.innerText = text_toggle_modal;
        icon_toggle.innerHTML = icon_toggle_modal;
    }

});

var btn_open_sidebar_left = document.querySelector('.js-open_sidebar');
var sidebar_left = document.querySelector('.js-sidebar_left');

    btn_open_sidebar_left.addEventListener('click',function(event){
        event.preventDefault();
        sidebar_left.classList.toggle('left0');
    })

//  menu search START ================================================================================================
;( function(){
var menu_bar_search = document.querySelector('.js-menubar_search');
var menu_bar_input = menu_bar_search.querySelector('.js-menu_search')
var menu_bar_blocks = menu_bar_search.querySelectorAll('.search_block');


var list_blocks_search = [];

menu_bar_blocks.forEach(function(value,index){
    var modal = [];
    var items = value.querySelectorAll(".search_item");
    items.forEach(function(item_value,item_index){
        modal.push(removeVietnameseTones(item_value.querySelector('.mypage_content p').innerText.toLowerCase()));
    })
    list_blocks_search.push(modal);
})

menu_bar_input.addEventListener('keyup',function(){
    var val_input = removeVietnameseTones(menu_bar_input.value.toLowerCase());  

    list_blocks_search.forEach(function(value,index){ 

        menu_bar_blocks[index].classList.add("ds0");
        var list_items = menu_bar_blocks[index].querySelectorAll(".search_item");
        
        value.forEach(function(text_value,text_index){
            list_items[text_index].classList.remove("ds0");

            if(text_value.indexOf(val_input) !== -1){
                menu_bar_blocks[index].classList.remove("ds0");                
            }
            else{
                list_items[text_index].classList.add("ds0"); 
            }
        })
    });    
});
})();
//  menu search END ================================================================================================

//  chat search START ================================================================================================
;(function(){     

        var menu_chat = document.querySelector('.js-list_chat');
        var list_chat_items = menu_chat.querySelectorAll('.messenger');
        var chat_input = menu_chat.querySelector('.js-chat_search')

        var list_chat_item_search = [];

        list_chat_items.forEach(function(value,index){
        list_chat_item_search.push(removeVietnameseTones(value.querySelector('.messenger_content p').innerText.toLowerCase()));
        });

        chat_input.addEventListener('keyup',function(){
         var val_input = removeVietnameseTones(chat_input.value.toLowerCase());

        list_chat_item_search.forEach(function(value,index){

            list_chat_items[index].parentNode.classList.add('ds0');

            if(value.indexOf(val_input) !== -1){
            list_chat_items[index].parentNode.classList.remove('ds0');
            }
        });   
        
    });
    
    })();
//  chat search END ================================================================================================

// open-close modal-post..... START ========================================
;(function(){
     var modal_update = document.querySelector(".js-creat_post");
     var modal_content = modal_update.querySelector(".upload_content");
     var btn_close_modal = modal_update.querySelector(".js-close_modal");
     var btn_open_modal = document.querySelectorAll(".js-open_modal_update");

    function open(){
        modal_update.classList.add("ds1");
    }
    function close(){
        modal_update.classList.remove("ds1");
    }

    btn_open_modal.forEach(function(value,index){
        value.addEventListener('click',open);
    });
    btn_close_modal.addEventListener('click',close);
    modal_update.addEventListener('click',close);

    modal_content.addEventListener('click',function(event){
        event.stopPropagation();
    })
})();
// open-close modal-post..... END ==========================================

// open-close modal-room..... START ========================================
;(function(){
    var modal_update = document.querySelector(".js-creat_room");
    var modal_content = modal_update.querySelector(".upload_content");
    var btn_close_modal = modal_update.querySelector(".js-close_modal");
    var btn_open_modal = document.querySelector(".js-open_room");

   function open(){
       modal_update.classList.add("ds1");
   }
   function close(){
       modal_update.classList.remove("ds1");
   }

   
    btn_open_modal.addEventListener('click',open);
    btn_close_modal.addEventListener('click',close);
    modal_update.addEventListener('click',close);

    modal_content.addEventListener('click',function(event){
       event.stopPropagation();
   })
})();
// open-close modal-room..... END ==========================================
