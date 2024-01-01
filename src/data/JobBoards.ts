import {countryCodes} from "./Countries.ts";
import {RegionalUrls} from "./scripts.ts";

export const jobBoards: JobBoards = {
  indeed: {
    name: "Indeed",
    urls: {base: "https://www.indeed.com/", countries: RegionalUrls("indeed", "com", countryCodes)},
  },
  linkedin: {
    name: "LinkedIn",
    urls: {base: "https://www.linkedin.com/", countries: RegionalUrls("linkedin", "com", countryCodes)},
  },
  monster: {
    name: "Monster",
    urls: {
      base: "https://www.monster.com/",
      countries: {
        at: "https://www.monster.at/",
        ca: "https://www.monster.ca/",
        ch: "https://www.monster.ch/",
        de: "https://www.monster.de/",
        se: "https://www.monster.se/",
        uk: "https://www.monster.co.uk/",
        us: "https://www.monster.com/"
      }
    },
  },
  glassdoor: {
    name: "Glassdoor",
    urls: {
      base: "https://www.glassdoor.com/Job/",
      countries: {
        at: "https://www.glassdoor.at/Job/",
        au: "https://www.glassdoor.com.au/Job/",
        ca: "https://www.glassdoor.ca/Job/",
        ch: "https://de.glassdoor.ch/Job/",
        de: "https://www.glassdoor.de/Job/",
        in: "https://www.glassdoor.co.in/Job/",
        uk: "https://www.glassdoor.co.uk/Job/",
        us: "https://www.glassdoor.com/Job/",
      },
    },
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
  getwork: {
    name: "Getwork",
    urls: {
      base: "https://www.getwork.com/",
      countries: {
        ca: "https://canada.getwork.com/",
        uk: "https://uk.getwork.com/",
        us: "https://www.getwork.com/",
      },
    },
  },
  flexjobs: {
    name: "Flexjobs",
    urls: {
      base: "https://www.flexjobs.com/",
      countries: {
        us: "https://www.flexjobs.com/",
      },
    },
  },
};
