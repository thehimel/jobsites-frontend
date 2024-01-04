type Countries = { [key: string]: { name: string }; }
type RegionalUrl = { [key: string]: string; }
type JobBoard = { name: string; urls: RegionalUrl; }
type JobBoards = { [key: string]: JobBoard; }
type TopJobBoards = { [key: string]: JobBoard[]; }
