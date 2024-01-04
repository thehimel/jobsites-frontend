interface CountryProps {
  title: string;
}

const Country = ({title}: CountryProps) => {
  return (
    <div className="col g-2">
      <button className="text-bg-dark rounded-3 w-100 h-100 p-5" type="button">
        <h3>{title}</h3>
      </button>
    </div>
  );
};

export default Country;
