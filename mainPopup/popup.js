browser.tabs.query({
  active: true,
  currentWindow: true
}).then(tabs => {
  const tab = tabs[0];
  browser.messageDisplay.getDisplayedMessage(tab.id).then(message => {

    // ヘッダーからURLを取得
    const url = message.headerMessageId.split("@")[0];
    console.log(url)

    // backgroundスクリプトへメッセージ送信 
    if (url) {
      browser.runtime.sendMessage({
        type: "saveToPocket",
        messageId: message.id,
        url: url
      });
    }
  });
});

// タグの一覧を取得してコンソールに表示する
browser.messages.listTags().then(tags => {
  console.log('Tag list:', tags);
}).catch(error => {
  console.error('Error fetching tags:', error);
});