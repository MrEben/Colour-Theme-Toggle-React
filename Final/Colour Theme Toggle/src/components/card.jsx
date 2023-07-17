import { useState, useEffect } from "react";
import { data, colours } from "./data";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useGlobalContext } from "./context";
const Card = () => {
  const { state, dispatch, toggleModal, isModalOpen } = useGlobalContext();
  const [current, setCurrent] = useState("blue");
  useEffect(() => {
    const currentThemeColour = localStorage.getItem("theme-colour");
    if (currentThemeColour) {
      setCurrent(currentThemeColour);
    }
  }, []);
  const handleThemeToggle = (item) => {
    setCurrent(item);
    dispatch({ type: "TOGGLE-THEME", payload: item });
    localStorage.setItem("theme-colour", item);
  };

  return (
    <>
      {isModalOpen ? (
        <div className="modal">
          <div className="colour-btns">
            {colours.map((item, index) => {
              return (
                <button
                  key={index}
                  className="btn"
                  style={{ background: `${item.colour}` }}
                  onClick={() => handleThemeToggle(item.colour)}
                >
                  <div
                    className={
                      current === item.colour ? "selected" : "not-selected"
                    }
                  >
                    <AiOutlineCheck />
                  </div>
                  {item.name}
                </button>
              );
            })}
            <div className="close-btn" onClick={toggleModal}>
              <AiOutlineClose />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

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
