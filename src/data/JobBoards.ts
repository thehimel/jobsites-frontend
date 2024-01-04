import {countryCodes} from "./Countries.ts";
import {RegionalUrls} from "./scripts.ts";

export const jobBoards: JobBoards = {
  indeed: {
    name: "Indeed",
    urls: RegionalUrls("indeed", "com", countryCodes),
  },
  linkedin: {
    name: "LinkedIn",
    urls: RegionalUrls("linkedin", "com", countryCodes),
  },
  monster: {
    name: "Monster",
    urls: {
      AT: "https://www.monster.at/",
      CA: "https://www.monster.ca/",
      CH: "https://www.monster.ch/",
      DE: "https://www.monster.de/",
      SE: "https://www.monster.se/",
      UK: "https://www.monster.co.uk/",
      US: "https://www.monster.com/"
    }
  },
  glassdoor: {
    name: "Glassdoor",
    urls: {
      AT: "https://www.glassdoor.at/Job/",
      AU: "https://www.glassdoor.com.au/Job/",
      CA: "https://www.glassdoor.ca/Job/",
      CH: "https://de.glassdoor.ch/Job/",
      DE: "https://www.glassdoor.de/Job/",
      IN: "https://www.glassdoor.co.in/Job/",
      UK: "https://www.glassdoor.co.uk/Job/",
      US: "https://www.glassdoor.com/Job/",
    },
  },
  careerbuilder: {
    name: "CareerBuilder",
    urls: {
      CA: "https://www.careerbuilder.ca/",
      IN: "https://www.careerbuilder.co.in/",
      US: "https://www.careerbuilder.com/",
    },
  },
  ziprecruiter: {
    name: "ZipRecruiter",
    urls: {
      CA: "https://www.ziprecruiter.ca/",
      UK: "https://www.ziprecruiter.co.uk/",
      US: "https://www.ziprecruiter.com/",
    },
  },
  getwork: {
    name: "Getwork",
    urls: {
      CA: "https://canada.getwork.com/",
      UK: "https://uk.getwork.com/",
      US: "https://www.getwork.com/",
    },
  },
  flexjobs: {
    name: "Flexjobs",
    urls: {
      US: "https://www.flexjobs.com/",
    },
  },
};
