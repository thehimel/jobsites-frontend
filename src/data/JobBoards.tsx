import {countryCodes} from "./Countries.tsx";
import {RegionalUrls} from "./scripts.tsx";

export const jobBoards: JobBoards = {
  indeed: {
    name: "Indeed",
    urls: {base: "https://www.indeed.com/", countries: RegionalUrls("indeed", "com", countryCodes)},
  },
  linkedin: {
    name: "LinkedIn",
    urls: {base: "https://www.linkedin.com/", countries: RegionalUrls("linkedin", "com", countryCodes)},
  },
}
