import {topJobBoards} from "../../data/TopJobBoards.ts";
import JobBoard from "./JobBoard.tsx";
import {rowClasses} from "../Styles.ts";
import {useSelector} from "react-redux";
import {CountriesState} from "../../constants/core.tsx";
import {getCountryNameFromCode} from "../../data/Countries.ts";

export default function JobBoards() {
  const code: string = useSelector((state: CountriesState) => state.country.selectedCode);
  const jobBoards = topJobBoards[code].map(
    (element: JobBoard) => <JobBoard key={element.name} name={element.name}
                                     url={element.urls[code]}></JobBoard>
  );
  const title: string = `Top Job Boards in ${getCountryNameFromCode(code)}`;

  return (
    <>
      <div className="text-center pt-4">
        <h4 className="d-inline-block text-bg-dark rounded px-4 py-2">
          {title}
          <a href="/" className="ps-2"><span className="badge text-bg-secondary">Go Back</span></a>
        </h4>
      </div>
      <div className={rowClasses}>
        {jobBoards}
      </div>
    </>
  );
}
