import {topJobBoards} from "../../data/TopJobBoards.ts";
import JobBoard from "./JobBoard.tsx";
import {rowClasses} from "../Styles.ts";

interface JobBoardsProps {
  countryCode: string;
}

export default function JobBoards({countryCode}: JobBoardsProps) {
  countryCode = countryCode.toUpperCase();
  const jobBoards = topJobBoards[countryCode].map(
    (element: JobBoard) => <JobBoard key={element.name} name={element.name}
                                     url={element.urls[countryCode]}></JobBoard>
  );

  return (
    <>
      <div className={rowClasses}>
        {jobBoards}
      </div>
    </>
  );
}
