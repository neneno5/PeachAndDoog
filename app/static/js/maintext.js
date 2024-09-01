var id = ['a','b', 'c', 'd', 'e']; // 'f' を削除（存在しない要素のIDを削除）
var tx = [];
var txCount = [];
var txSp = 200; // テキストの表示速度
var dly = 1000; // 次の文章までの待ち時間（例として1秒に設定）

var count = 0;

window.onload = function(){
  kamikakushi();
  countSet();
  itimozi();
}

function countSet(){ // 文字数カウントの初期設定
  for(let n=0; n<id.length; n++){
    txCount[n] = 0;
  }
}

function kamikakushi(){ // 要素を取得して非表示（innerHTML を空にする）
  for(let i=0; i<id.length; i++){
    let element = document.getElementById(id[i]);
    tx[i] = element.textContent; // 初期の文字列
    element.innerHTML = ''; // テキストを非表示
  }
}

function itimozi(){ //　一文字ずつ表示
  let element = document.getElementById(id[count]);
  element.innerHTML = tx[count].substr(0, ++txCount[count]); // テキストの指定した数の間の要素を表示
  
  if(tx[count].length != txCount[count]){ // Count が初期の文字列の文字数と同じになるまでループ
    setTimeout(itimozi, txSp); // 次の文字へ進む
  }else{
    count++; // 次の段落に進む為のカウントアップ
    if(count < id.length){ // id数が最後なら終了
      setTimeout(itimozi, dly); // 次の段落へ進む
    }
  }
}
