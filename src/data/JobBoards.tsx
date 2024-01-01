type Countries = { [key: string]: string; }
type Urls = { default: string; countries: Countries }
type JobBoard = { name: string; urls: Urls; }
type JobBoardsProps = { [key: string]: JobBoard; }

export const jobBoards: JobBoardsProps = {
  indeed: {
    name: "Indeed",
    urls: {
      default: "https://www.indeed.com/",
      countries: {
        at: "https://at.indeed.com/",
        au: "https://au.indeed.com/",
        ca: "https://ca.indeed.com/",
        ch: "https://ch.indeed.com/",
        de: "https://de.indeed.com/",
        dk: "https://dk.indeed.com/",
        nl: "https://nl.indeed.com/",
        no: "https://no.indeed.com/",
        se: "https://se.indeed.com/",
        uk: "https://uk.indeed.com/",
        us: "https://www.indeed.com/",
      },
    },
  },
}
