// btnというidを持つHTML要素を取得し、定数に代入する
const addBtn = document.getElementById('btn');
// textというidを持つHTML要素を取得し、定数に代入する
const addText = document.getElementById('text');

// HTML要素がクリックされたときにイベント処理を実行する
addBtn.addEventListener('click', () => {
// 2秒後の待ち時間を設定し非同期処理を実行する
setTimeout (() => {
  // textに「ボタンをクリックしました」というテキストを追加する
  addText.textContent = 'ボタンをクリックしました';    

  },2000);

});