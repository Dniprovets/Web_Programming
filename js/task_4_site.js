let paintings,index=0;function click_on_menu(n){$("li.nav-item").removeClass("active");let a=$(n);switch(a.addClass("active"),a.attr("id")){case"menu_home":setTimeout((()=>{document.location.href="../index.html"}),500);break;case"menu_painting":$("#div_task").attr("hidden",""),$("#div_galery").removeAttr("hidden");break;case"menu_task":$("#div_task").removeAttr("hidden"),$("#div_galery").attr("hidden","");break;case"menu_random":click_on_painting(-1)}}function click_on_painting(n){let a;a=-1===n?paintings[Math.floor(Math.random()*paintings.length)]:$(n).attr("data"),$.get(`../data/text/${a}.txt`,(n=>{let a=n.split("\n"),t=`<div class="modal-header border-secondary">\n            <div class="d-flex flex-column ms-3">\n               <h3 class="m-0">${a[0]}</h3>\n               <span>Автор: ${a[1]}</span>\n            </div>\n            <button type="button" class="btn-close bg-primary me-3" data-bs-dismiss="modal" aria-label="Close"></button>\n         </div>\n         \n         <div class="modal-body">\n            <img src="../data/img/${a[2]}.jpg" class="w-100" alt="painting">\n         </div>\n         \n         <div class="modal-footer border-secondary">\n            <h5>${a[3]}</h5>\n         </div>`;$("#modal_content").html(t),$("#modal").modal("show")}))}function load_more_paintings(n){let a=0;for(;a<n;){if(index>=paintings.length)return void disable_load_button();$.get(`../data/text/${paintings[index]}.txt`,(n=>{let a=n.split("\n"),t=`<div class="col-md-6 col-lg-4">\n               <div class="p-2 painting" onclick="click_on_painting(this)" data="${a[2]}">\n                  <img src="../data/img/${a[2]}.jpg" class="w-100" alt="painting">\n                  <div class="bg-primary text-center">${a[0]}</div>\n               </div>\n            </div>`;$("#paintings").append(t)})),a++,index++}}function disable_load_button(){$("#load").addClass("disabled")}$("#modal").on("hidden.bs.modal",(()=>{$("li.nav-item").removeClass("active"),$("#menu_painting").addClass("active"),$("#div_task").attr("hidden",""),$("#div_galery").removeAttr("hidden")})),$(document).ready((()=>{setTimeout((()=>{$.get("../data/data.txt",(n=>{paintings=n.split("\n"),paintings.splice(paintings.length-1,1),load_more_paintings(6)}))}),300)}));