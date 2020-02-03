import { getData } from "./helper";

// Get list of sites based on specific length

export async function getSites(counter) {
  const data = await getData(`https://tracktik-challenge.staffr.com/sites`);
  return data.slice(0, counter).map(({ title, images, id }) => ({
    title,
    images,
    id
  }));
}

// Get site details

export function getSiteWithId(id) {
  return getData(`https://tracktik-challenge.staffr.com/sites/${id}`);
}

// seach for sites

export async function searchForSite(text, counter) {
  const data = await getData(`https://tracktik-challenge.staffr.com/sites`);
  return data
    .slice(0, counter)
    .map(({ title, images, id }) => ({
      title,
      images,
      id
    }))
    .filter(({ title }) => title.toLowerCase().indexOf(text.toLowerCase()) > -1);
}
