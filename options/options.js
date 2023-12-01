document.addEventListener('DOMContentLoaded', () => {
    const saveButton = document.getElementById('saveButton');
    const consumerKeyInput = document.getElementById('consumerKeyInput');
    const accessTokenInput = document.getElementById('accessTokenInput');

    // 保存ボタンのクリックイベントリスナー
    saveButton.addEventListener('click', () => {
        // 入力された値を取得
        const consumerKey = consumerKeyInput.value.trim();
        const accessToken = accessTokenInput.value.trim();

        // APIキーやトークンを保存
        browser.storage.local.set({
            'consumerKey': consumerKey,
            'accessToken': accessToken
        }).then(() => {
            alert('Settings saved!');
        }).catch(error => {
            console.error('Error saving settings:', error);
            alert('Failed to save settings.');
        });
    });
});
