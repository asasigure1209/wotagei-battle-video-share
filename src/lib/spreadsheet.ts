import { GoogleApis, google } from "googleapis";
import { cache } from "react";

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

export const getNames = cache(async () => {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const rows = response.data.values;
  let names: string[] = [];

  if (rows) {
    // 1行目はヘッダーなのでスキップして、各行を調査
    for (let i = 1; i < rows.length; i++) {
      const [_, name] = rows[i];

      !names.includes(name) && names.push(name);
    }
  }

  return names;
});

let rows_data: any[][] | null | undefined = null;

export const getFileNamesForName = async (name: string) => {
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
      const [fileName, name_data] = rows_data[i];

      name_data === name && fileNames.push(fileName);
    }
  }

  return fileNames;
};
