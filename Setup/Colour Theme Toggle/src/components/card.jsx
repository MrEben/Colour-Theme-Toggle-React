import { data } from "./data";

const Card = () => {
  return (
    <>
      <div className="card-container">
        {data.map((item, index) => {
          const { logo, text, background } = item;
          return (
            <div className={`card ${background}`} key={index}>
              <div className="icon">{logo}</div>
              <div className="info">{text} </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
