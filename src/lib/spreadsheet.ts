import { GoogleApis, google } from "googleapis";

const getSheets = () => {
  const googleapis = new GoogleApis();
  const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
  const jwt = new googleapis.auth.JWT(
    process.env.GCP_SERVICEACCOUNT_EMAIL,
    undefined,
    (process.env.GCP_SERVICEACCOUNT_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes
  );
  return google.sheets({ version: "v4", auth: jwt });
};

const sheets = getSheets();

const spreadsheetId = process.env.SPREAD_SHEET_ID;
const range = `動画ファイル紐づけ!A:B`;

export const getEmails = async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values;
  let emails: string[] = [];

  if (rows) {
    // 1行目はヘッダーなのでスキップして、各行を調査
    for (let i = 1; i < rows.length; i++) {
      const [_, email] = rows[i];

      !emails.includes(email) && emails.push(email);
    }
  }

  return emails;
};

let rows_data: any[][] | null | undefined = null;

export const getFileNamesForEmail = async (email: string) => {
  if (!rows_data) {
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    rows_data = response.data.values;
  }

  let fileNames: string[] = [];

  if (rows_data) {
    // 1行目はヘッダーなのでスキップして、各行を調査
    for (let i = 1; i < rows_data.length; i++) {
      const [fileName, emailAddress] = rows_data[i];

      emailAddress === email && fileNames.push(fileName);
    }
  }

  return fileNames;
};
