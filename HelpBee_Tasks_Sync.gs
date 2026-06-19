// Help Bee タスク同期 — GAS Web App
// doGet: 現在のチェック状態を返す
// doPost: チェック状態を保存する

function doGet() {
  const data = PropertiesService.getScriptProperties().getProperty('tasks') || '[]';
  return ContentService.createTextOutput(data)
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    PropertiesService.getScriptProperties().setProperty('tasks', e.postData.contents);
  } catch(err) {}
  return ContentService.createTextOutput('ok')
    .setMimeType(ContentService.MimeType.TEXT);
}
