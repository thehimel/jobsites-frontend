type Region = { [key: string]: string; }
type Url = { base: string; region: Region }
type JobBoard = { name: string; url: Url; }
type JobBoardsProps = { [key: string]: JobBoard; }
type Country = { [key: string]: string; }


const countries: Country = {
  at: "Austria",
  au: "Australia",
  ca: "Canada",
  ch: "Switzerland",
  de: "Germany",
  dk: "Denmark",
  in: "India",
  nl: "Netherlands",
  no: "Norway",
  se: "Sweden",
  uk: "United Kingdom",
  us: "United States",
}

const countryCodes: string[] = Object.keys(countries);

function CountryUrls(domain: string, tld: string, countryCodes: string[]): Record<string, string> {
  const urls: Record<string, string> = {};
  countryCodes.forEach(code => {
    let subdomain: string = code === 'us' ? "www" : code;
    urls[code] = `https://${subdomain}.${domain}.${tld}/`;
  });
  return urls;
}


const jobBoards: JobBoardsProps = {
  indeed: {
    name: "Indeed",
    url: {
      base: "https://www.indeed.com/",
      region: CountryUrls("indeed", "com", countryCodes)
    },
  },
  linkedin: {
    name: "LinkedIn",
    url: {
      base: "https://www.linkedin.com/",
      region: CountryUrls("linkedin", "com", countryCodes)
    },
  },
}
