type Countries = { [key: string]: string; }
type Urls = { base: string; countries: Countries }
type JobBoard = { name: string; urls: Urls; }
type JobBoards = { [key: string]: JobBoard; }

