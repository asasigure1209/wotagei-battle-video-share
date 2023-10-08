import { getEmails, getFileNamesForEmail } from "@/lib/spreadsheet";

export default async function Videos({
  params,
}: {
  params: { email: string };
}) {
  const fileNames = await getFileNamesForEmail(
    decodeURIComponent(params.email)
  );

  return (
    <div>
      My Post: {params.email} {fileNames}
      <ul>
        {fileNames.map((fileName) => {
          const downloadUrl = `${process.env.WORKER_API}/${fileName}?action=get`;

          return (
            <li key={fileName}>
              <a href={downloadUrl} download={fileName}>
                {fileName}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export async function generateStaticParams() {
  const emails = await getEmails();
  return emails.map((email) => ({
    email,
  }));
}
