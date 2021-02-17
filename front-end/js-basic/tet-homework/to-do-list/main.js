// let add_btn = $('.content');
// add_btn.find("p")[0].innerHTML = "hello baby";
// console.log(add_btn);
// console.log(add_btn.find("p")[0]);

let job_list = $('.job_list');
let add_btn = $('.add_btn')[0];
let searchbox = $('.searchbox').find("input")[0];
let datebox = $('.datebox').find("input")[0];
let single_list = $('.single_list');
let edit_btn = $('.edit_btn');
let erase_btn = $('.erase_btn');
let check_btn = $('.checkbox')

let flag = false;

function render(){
    let content = searchbox.value;
    let deadline = datebox.value;
    if ((content == "") || (deadline == "")){
        alert("Bạn phải nhập đủ nội dung và deadline");
    }
    else{
        job_list.append(`
            <div class = "single_list">
                <div class = "ctrl_btn">
                    <img src = "img/pencil.svg" class = "edit_btn"">
                    <img src = "img/remove.svg" class = "erase_btn">
                </div>
                <div class = "checkbox_holder">
                    <input type="checkbox"  class = "checkbox">
                </div>
                <div class = "content" id = "content">
                    <p>${content}</p>
                </div>
                <div class = "deadline">
                    <p>${deadline}</p>
                </div>
            </div>
        `)
        single_list = $('.single_list');
        edit_btn = $('.edit_btn');
        erase_btn = $('.erase_btn');
        check_btn = $('.checkbox')

        edit_btn.each(function(index, item){
            item.addEventListener('click', function(){
                searchbox.value = single_list.find(".content").find("p")[index].innerHTML;
                datebox.value = single_list.find(".deadline").find("p")[index].innerHTML;
                console.log(single_list[index]);
                add_btn.innerHTML = "Sửa";
                add_btn.onclick = function(){
                    single_list.find(".content").find("p")[index].innerHTML = searchbox.value;
                    single_list.find(".deadline").find("p")[index].innerHTML = datebox.value;
                    add_btn.innerHTML = "Thêm";
                    searchbox.value = "";
                    datebox.value = "";
                }
            })
        })

        erase_btn.each(function(index, item){
            item.addEventListener('click', function(){
                single_list[index].style.display = "none";
            })
        })

        check_btn.each(function(index, item){
            item.addEventListener('click', function(){
                if (single_list.find(".content").find("p")[index].style.textDecoration == ""){
                    single_list.find(".content").find("p")[index].style.textDecoration = "line-through";
                    single_list.find(".deadline").find("p")[index].style.textDecoration = "line-through";
                }
                else{
                    single_list.find(".content").find("p")[index].style.textDecoration = "";
                    single_list.find(".deadline").find("p")[index].style.textDecoration = "";
                }                
            })
        })
        searchbox.value = "";
        datebox.value = "";
    }
}

console.log(job_list[0]);

add_btn.onclick = function(){
    render();
}

console.log(edit_btn);

