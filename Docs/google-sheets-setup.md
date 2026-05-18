# Google Sheets — Booking Backend Setup

Follow these steps to wire up the Google Sheets booking backend.

---

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name it **MLC Bookings**.
3. In **Row 1**, add these column headers exactly (one per cell, A–Q):

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Timestamp | Name | Email | Phone | Tenant Phone | Street Address | City | Postcode | Property Type | Property Sub-Type | Services (JSON) | Services (Readable) | Additional Charges | Appointment Date | Time Slot | Total Price | Status |

---

## 2. Create the Apps Script Web App

1. In your Google Sheet, go to **Extensions → Apps Script**.
2. Delete all existing code and paste the following:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      new Date().toISOString(),
      data.customer?.name || '',
      data.customer?.email || '',
      data.customer?.phone || '',
      data.customer?.tenantPhone || '',
      data.property?.streetAddress || '',
      data.property?.city || '',
      data.property?.postcode || '',
      data.propertyType || '',
      data.propertySubType || '',
      JSON.stringify(data.services || []),
      (data.services || []).map(function(s) {
        return s.type + ' - ' + s.variant + ' (£' + s.price + ')';
      }).join(', '),
      [
        data.additionalCharges?.congestionCharge ? 'Congestion (£18)' : '',
        data.additionalCharges?.parkingCharge ? 'Parking (£5)' : ''
      ].filter(Boolean).join(', ') || 'None',
      data.appointment?.date || '',
      data.appointment?.timeSlot || '',
      data.totalPrice || 0,
      'New'
    ]);

    // Email notification — replace with your business email
    MailApp.sendEmail({
      to: 'fahad.aslam4500@gmail.com',
      subject: 'New MLC Booking: ' + (data.customer?.name || 'Unknown'),
      body: 'New booking received!\n\n' +
        'Customer: ' + (data.customer?.name || '') + '\n' +
        'Email: ' + (data.customer?.email || '') + '\n' +
        'Phone: ' + (data.customer?.phone || '') + '\n' +
        'Property: ' + (data.property?.streetAddress || '') + ', ' +
          (data.property?.postcode || '') + '\n' +
        'Services: ' + (data.services || []).map(function(s) {
          return s.type + ' - ' + s.variant + ' (£' + s.price + ')';
        }).join(', ') + '\n' +
        'Date: ' + (data.appointment?.date || '') + '\n' +
        'Time: ' + (data.appointment?.timeSlot || '') + '\n' +
        'Total: £' + (data.totalPrice || 0) + '\n\n' +
        'Action required: Contact customer within 2 hours.'
    });

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.message
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (name the project anything, e.g. "MLC Bookings").

---

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Type" and select **Web app**.
3. Set these options:
   - **Description:** MLC Bookings API
   - **Execute as:** Me
   - **Who has access:** Anyone
4. Click **Deploy**.
5. Click **Authorize access** and follow the OAuth prompt (allow access to Sheets and Gmail).
6. Copy the **Web App URL** — it looks like:
   `https://script.google.com/macros/s/AKfycbxXXXXXXXXXXX/exec`

---

## 4. Add the URL to your environment

Add this line to `.env.local` (create the file at the project root if it doesn't exist):

```
NEXT_PUBLIC_GOOGLE_SHEET_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

Replace `YOUR_SCRIPT_ID` with the actual ID from the URL you copied.

> **Important:** Do not commit `.env.local` to git. It is already listed in `.gitignore`.

For production (Vercel), add the same variable in:
**Project → Settings → Environment Variables**

---

## 5. Test the integration

Once the app is running locally, submit a test booking through `/book`. Then:
- Check the Google Sheet for a new row.
- Check your email for the notification.

If the row doesn't appear, open **Apps Script → Executions** to see any error logs.

---

## 6. Optional: Customer confirmation email

To also send a confirmation to the customer, add this block after the business notification email in the Apps Script (inside the `try` block, before the `return`):

```javascript
// Customer confirmation
if (data.customer?.email) {
  MailApp.sendEmail({
    to: data.customer.email,
    subject: 'Your booking request — My Landlord Certificate',
    body: 'Hi ' + (data.customer?.name || '') + ',\n\n' +
      'We\'ve received your booking request and our team will call you within 2 hours to confirm.\n\n' +
      'Booking summary:\n' +
      'Services: ' + (data.services || []).map(function(s) {
        return s.type + ' (£' + s.price + ')';
      }).join(', ') + '\n' +
      'Date: ' + (data.appointment?.date || '') + '\n' +
      'Time: ' + (data.appointment?.timeSlot || '') + '\n' +
      'Total: £' + (data.totalPrice || 0) + '\n\n' +
      'If you have any questions, call us on 0330 133 0066.\n\n' +
      'My Landlord Certificate\n' +
      'mylandlordcertificate.co.uk'
  });
}
```

After any changes to the Apps Script, you must **redeploy** (Deploy → Manage deployments → Edit → Update) for the changes to take effect.
