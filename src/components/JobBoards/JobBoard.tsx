interface JobBoardProps {
  name: string;
  url: string
}

const JobBoard = ({name, url}: JobBoardProps) => {
  return (
    <div className="col g-2">
      <a className="text-bg-dark rounded-3 w-100 h-100 p-5 text-decoration-none" type="button" href={url}
         target="_blank">
        <h3>{name}</h3>
      </a>
    </div>
  );
};

export default JobBoard;
