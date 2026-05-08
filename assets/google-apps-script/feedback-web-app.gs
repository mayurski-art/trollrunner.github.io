const SHEET_ID = '1rT4mlBtaJyTA4pXqDlIo5dn7mPcv8MLAGolVtSi8oNE';
const SHEET_GID = 999458339;

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = spreadsheet.getSheets().find(tab => tab.getSheetId() === SHEET_GID) || spreadsheet.getActiveSheet();
  if (!sheet) {
    return ContentService.createTextOutput('Missing sheet').setMimeType(ContentService.MimeType.TEXT);
  }

  const params = e && e.parameter ? e.parameter : {};
  const username = String(params.username || '').trim();
  const dateTime = String(params.dateTime || new Date().toISOString()).trim();
  const message = String(params.message || '').trim();
  const aiTopic = String(params.aiTopic || '').trim();
  const aiPriority = String(params.aiPriority || '').trim();

  if (!message) {
    return ContentService.createTextOutput('Missing message').setMimeType(ContentService.MimeType.TEXT);
  }

  sheet.appendRow([
    username,
    dateTime,
    message,
    aiTopic,
    aiPriority,
  ]);

  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}
