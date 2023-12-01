// APIキーやトークンを取得する関数
async function getCredentials() {
  try {
    const result = await browser.storage.local.get(['consumerKey', 'accessToken']);
    return {
      consumerKey: result.consumerKey,
      accessToken: result.accessToken
    };
  } catch (error) {
    console.error('Error getting credentials:', error);
    return {
      consumerKey: '',
      accessToken: ''
    };
  }
}

browser.runtime.onMessage.addListener((message) => {
  if (message.type === "saveToPocket") {
    saveToPocket(message.messageId, message.url);
  }
});

async function saveToPocket(messageId, url) {
  const credentials = await getCredentials();
  const consumerKey = credentials.consumerKey;
  const accessToken = credentials.accessToken;

  const response = await fetch("https://getpocket.com/v3/add", {

    // POSTリクエストのオプション
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Accept": "application/json"
    },
    body: JSON.stringify({
      consumer_key: consumerKey,
      access_token: accessToken,
      url: url
    })
  });

  const result = await response.json();

  // レスポンスチェック  
  if (!result.status || result.status !== 1) {
    throw new Error("Failed to save url");
  }

  try {
    await browser.messages.archive([messageId]);
  } catch (error) {
    console.error('Error updating message:', error);
  }
}