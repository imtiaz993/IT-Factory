const dev = process.env.NODE_ENV !== "production";
export function getStrapiMedia(url) {
  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  }
  return `${
    dev ? "http://localhost:1337" : process.env.NEXT_PUBLIC_BASE_URL
  }${url}`;
}

export const baseURL = process.env.NEXT_PUBLIC_BASE_URL
  ? process.env.NEXT_PUBLIC_BASE_URL
  : "http://strapi:1337";
