export const RegionalUrls = (domain: string, tld: string, countryCodes: string[]): Record<string, string> => {
  const urls: Record<string, string> = {};
  countryCodes.forEach(code => {
    let subdomain: string = code === 'US' ? 'www' : code.toLowerCase();
    urls[code] = `https://${subdomain}.${domain}.${tld}/`;
  });
  return urls;
}
