const modal = document.getElementById("intro_modal");
const btnClose = document.querySelector(".intro_close");
const btnOk = document.querySelector(".intro_ok");

// 閉じる
function hideModal() {
    modal.style.display = "none";
}

btnClose.addEventListener("click", hideModal);
btnOk.addEventListener("click", hideModal);




const charaData = {
1:{
    name:"キャラクター１",
    img:"image/chara/chara_1.png",
    birth:"1月15日",
    food:"ショートケーキ",
    hobby:"ピアノ",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
2:{
    name:"キャラクター２",
    img:"image/chara/chara_2.png",
    birth:"6月2日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
3:{
    name:"キャラクター３",
    img:"image/chara/chara_3.png",
    birth:"12月6日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
4:{
    name:"キャラクター４",
    img:"image/chara/chara_4.png",
    birth:"3月6日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
5:{
    name:"キャラクター５",
    img:"image/chara/chara_5.png",
    birth:"7月18日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
6:{
    name:"キャラクター６",
    img:"image/chara/chara_6.png",
    birth:"8月25日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
7:{
    name:"キャラクター７",
    img:"image/chara/chara_7.png",
    birth:"2月7日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
},
8:{
    name:"キャラクター８",
    img:"image/chara/chara_8.png",
    birth:"4月8日",
    food:"カレーライス",
    hobby:"読書",
    desc:"ここにキャラクターの詳細説明が入ります。"
}
};

function openChara(id){
const c = charaData[id];

document.getElementById("modal_img").src = c.img;
document.getElementById("modal_name").textContent = c.name;
document.getElementById("modal_birth").textContent = "誕生日 : " + c.birth;
document.getElementById("modal_food").textContent = "好きな食べ物 : " + c.food;
document.getElementById("modal_hobby").textContent = "趣味 : " + c.hobby;
document.getElementById("modal_desc").textContent = c.desc;

document.getElementById("chara_modal").style.display = "flex";
}

document.querySelector(".chara_modal_close").onclick = () =>{
document.getElementById("chara_modal").style.display = "none";
};

document.getElementById("chara_modal").onclick = (e)=>{
if(e.target === e.currentTarget){
    e.currentTarget.style.display = "none";
}
};

