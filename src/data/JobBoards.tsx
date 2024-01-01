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
  careerbuilder: {
    name: "CareerBuilder",
    urls: {
      base: "https://www.careerbuilder.com/",
      countries: {
        ca: "https://www.careerbuilder.ca/",
        in: "https://www.careerbuilder.co.in/",
        us: "https://www.careerbuilder.com/",
      },
    },
  },
  ziprecruiter: {
    name: "ZipRecruiter",
    urls: {
      base: "https://www.ziprecruiter.com/",
      countries: {
        ca: "https://www.ziprecruiter.ca/",
        uk: "https://www.ziprecruiter.co.uk/",
        us: "https://www.ziprecruiter.com/",
      },
    },
  },
};
