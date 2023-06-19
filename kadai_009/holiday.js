const holiDays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"];

// 0～15までの数値を順番に出力する
for (let i = 0; i <= 15; i++) {
  console.log(holiDays[i]);
}

// 変数numに0～15までのランダムな整数を代入する
 let num = Math.floor(Math.random() * 16);
 
 // 変数numの最初の値を出力する（確認用）
 console.log('最初の値は' + num + 'です');
 
 // 変数numの値が0~15である間、変数numの値を出力し続ける
 while (num) {
   // 変数numに0～15までのランダムな整数を再代入する
   num = Math.floor(Math.random() * 16);
 
   // 次の条件式で比較される、変数numの現在の値を出力
    console.log('現在の値は' + num + 'です');
    console.log(holiDays[num]);
 }