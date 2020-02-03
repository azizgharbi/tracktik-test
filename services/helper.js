// get data from url based on fetch

export async function getData(url) {
  const data = await fetch(url);
  return await await data.json();
}
