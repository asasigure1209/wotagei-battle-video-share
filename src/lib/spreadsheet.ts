import { GoogleApis, google } from "googleapis";

const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000));

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

export const getFileNamesForEmail = async (email: string) => {
  await sleep(0.1);

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values;
  let fileNames: string[] = [];

  if (rows) {
    // 1行目はヘッダーなのでスキップして、各行を調査
    for (let i = 1; i < rows.length; i++) {
      const [fileName, emailAddress] = rows[i];

      emailAddress === email && fileNames.push(fileName);
    }
  }

  return fileNames;
};
