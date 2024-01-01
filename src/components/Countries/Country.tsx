interface CountryProps {
  title: string;
}

const Country = ({title}: CountryProps) => {
  return (
    <div className="col-md-4 text-center p-5">
      <button className="text-bg-dark rounded-3 w-100 h-100 p-5" type="button">
        <h2>{title}</h2>
      </button>
    </div>
  );
};

export default Country;
