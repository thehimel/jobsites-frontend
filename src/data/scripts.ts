export const RegionalUrls = (domain: string, tld: string, countryCodes: string[]): Record<string, string> => {
  const urls: Record<string, string> = {};
  countryCodes.forEach(code => {
    let subdomain: string = code === 'us' ? "www" : code;
    urls[code] = `https://${subdomain}.${domain}.${tld}/`;
  });
  return urls;
}
