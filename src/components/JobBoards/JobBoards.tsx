import {topJobBoards} from "../../data/TopJobBoards.ts";
import JobBoard from "./JobBoard.tsx";

interface JobBoardsProps {
  countryCode: string;
}

export default function JobBoards({countryCode}: JobBoardsProps) {
  const jobBoards = topJobBoards[countryCode].map(
    (element: JobBoard) => <JobBoard name={element.name} url={element.urls.countries[countryCode]}></JobBoard>
  );

  return (
    <>
      <div className="row align-items-md-stretch text-center g-0 p-2">
        {jobBoards}
      </div>
    </>
  );
}
