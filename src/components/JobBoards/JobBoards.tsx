import {topJobBoards} from "../../data/TopJobBoards.ts";
import JobBoard from "./JobBoard.tsx";
import {rowClasses} from "../Styles.ts";
import {useSelector} from "react-redux";
import {CountriesState} from "../../constants/core.tsx";

export default function JobBoards() {
  const code: string = useSelector((state: CountriesState) => state.country.selectedCode);
  const jobBoards = topJobBoards[code].map(
    (element: JobBoard) => <JobBoard key={element.name} name={element.name}
                                     url={element.urls[code]}></JobBoard>
  );

  return (
    <>
      <div className={rowClasses}>
        {jobBoards}
      </div>
    </>
  );
}
