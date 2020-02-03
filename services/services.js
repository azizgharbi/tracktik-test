import { getData } from "./helper";

export async function getSites(counter) {
  const data = await getData(`https://tracktik-challenge.staffr.com/sites`);
  return data.slice(0, counter).map(({ title, images, id }) => ({
    title,
    images,
    id
  }));
}

export function getSiteWithId(id) {
  return getData(`https://tracktik-challenge.staffr.com/sites/${id}`);
}
