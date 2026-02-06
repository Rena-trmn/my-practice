


//onClickAdd関数
const onClickAdd = () => {
    

//入力内容を取得
const inputText = document.getElementById("add-text").value;
if (inputText.trim()===""){
    return;
}

//入力欄の初期化
document.getElementById("add-text").value = ""

//li生成
const li = document.createElement("li");

//div生成・class付与
const div = document.createElement("div");
div.className = "list-low";

//p生成・class付与・テキスト内容を取得
const p = document.createElement("p");
p.className = "todo-item";
p.innerText = inputText;

//完了ボタンタグ生成・実装
const completeButton = document.createElement("button");
completeButton.innerText = "完了";
completeButton.addEventListener("click",()=>{

});



//削除ボタンタグ生成・実装
const deleteButton = document.createElement("button");
deleteButton.innerText = "削除";
deleteButton.addEventListener("click",()=>{
    const deleteTaget = deleteButton.closest("li");
    document.getElementById("incomplete-list").removeChild(deleteTaget)
});


//liタグの子要素に各要素を設定
div.appendChild(p);
li.appendChild(div);
li.appendChild(completeButton);
li.appendChild(deleteButton);

//リストを未完了リストに追加
document.getElementById("incomplete-list").appendChild(li);

};


//ボタンidを取得してクリックされるとonClickを実行
document.getElementById("add-button").addEventListener("click",onClickAdd);