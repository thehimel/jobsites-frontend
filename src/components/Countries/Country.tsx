import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {CountryActions} from "../../store/CountrySlice.ts";

interface CountryProps {
  code: string,
  name: string;
}

const Country = ({code, name}: CountryProps) => {
  const dispatch: Dispatch = useDispatch()

  const handleClick = (code: string) => dispatch(CountryActions.updateSelectedCode(code));

  return (
    <div className="col g-2">
      <button className="text-bg-dark rounded-3 w-100 h-100 p-5" type="button" onClick={() => handleClick(code)}>
        <h3>{name}</h3>
      </button>
    </div>
  );
};

export default Country;
