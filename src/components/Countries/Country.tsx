interface CountryProps {
  title: string;
}

const Country = ({title}: CountryProps) => {
  function handleClick(country: string): void {
    console.log(country);
  }

  return (
    <div className="col g-2">
      <button className="text-bg-dark rounded-3 w-100 h-100 p-5" type="button" onClick={() => handleClick(title)}>
        <h3>{title}</h3>
      </button>
    </div>
  );
};

export default Country;
