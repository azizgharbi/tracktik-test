export async function getData(link) {
  const data = await fetch(link);
  return await await data.json();
}
