export const epochToJsDate=(ts) =>{
  const d = new Date(ts * 1000);
  const formattedDate = `${d.getUTCDate()}-${d.getUTCMonth() + 1}-${d.getUTCFullYear()}`;
  return formattedDate;
}
