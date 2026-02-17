In your Google Sheet, go to Extensions > Apps Script.
Delete any code there and paste this:

function doPost(e) {
var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("AdTech Quotes");
var data = JSON.parse(e.postData.contents);

sheet.appendRow([
new Date(),
data.name,
data.email,
data.phone,
data.company,
data.projectType,
data.message
]);

// Only turn on wrapping and top-alignment for the new row
// This won't change your column widths!
var lastRow = sheet.getLastRow();
var range = sheet.getRange(lastRow, 1, 1, 7);

range.setWrap(true);
range.setVerticalAlignment("top");

return ContentService.createTextOutput(JSON.stringify({"result": "success"}))
.setMimeType(ContentService.MimeType.JSON);
}

Click Deploy (top right) > New Deployment.
Select Type: Web App.
Description: Form API.
Execute as: Me.
Who has access: Anyone (this is important for the API to work).
Click Deploy, authorize permissions, and copy the "Web App URL".

Don't worry about that warning! It's Google's way of saying: "This script hasn't been audited by us." Since you wrote it (using my code) on your account, it's 100% safe.

To bypass it:

Click "Advanced" on that warning screen.
Click "Go to [Your App Name] (unsafe)" at the bottom.
Click Allow.
Once you have that Web App URL, here is what to do:

Create a file named .env.local in the root of the project (if it's not there).
Add this line: GOOGLE_SHEETS_WEBAPP_URL=YOUR_COPIED_URL_HERE
