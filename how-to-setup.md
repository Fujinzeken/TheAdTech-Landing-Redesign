In your Google Sheet, go to Extensions > Apps Script and paste this code:

```javascript
function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("AdTech Quotes");

    if (!sheet) {
      throw new Error("Could not find sheet named 'AdTech Quotes'");
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date(),
      data.name,
      data.email,
      data.phone,
      data.company,
      data.projectType,
      data.message,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({
        result: "error",
        message: error.toString(),
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

### ⚠️ How to update the script (2 ways)

**Option A: Keep the same URL (Recommended)**

1. Click **Deploy** > **Manage Deployments**.
2. Click the **Pencil icon** (Edit).
3. Under the "Version" dropdown, select **"New Version"**.
4. Click **Deploy**. (This is the only way to push new code to an existing URL).

**Option B: Get a fresh URL**

1. Click **Deploy** > **New Deployment**.
2. Select Type: **Web App**.
3. **Execute as**: Me.
4. **Who has access**: Anyone.
5. Click **Deploy** and copy the NEW URL.

### Final Step

Update `GOOGLE_SHEETS_WEBAPP_URL` in your `.env.local` and **restart your dev server**.
