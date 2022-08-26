import delve from "dlv";
import {  baseURL } from "../../util/common";
export const headerAPI=async()=>{
    const res1 = await fetch(
        delve(
          {
            data: `${baseURL}/api/headers?populate=header.links,header.button,header.logo&authorization=Barear ${process.env.token}`,
          },
          "data"
        )
      );
      const headerLinks = await res1.json();
      return headerLinks
}
export const footerAPI=async()=>{
    const res5 = await fetch(
        delve(
          {
            data: `${baseURL}/api/footers?populate=footer.footerLinks,footer.logo&authorization=Barear ${process.env.token}`,
          },
          "data"
        )
      );
      const footerLinks = await res5.json();
      return footerLinks
}