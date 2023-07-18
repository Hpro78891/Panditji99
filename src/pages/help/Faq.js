import React from "react";

const Faq = () => {
  const unhide = () => {
    const faqs = document.querySelectorAll(".faq");
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      });
    });
  };

  return (
    <div className="faq-section">
      <h3>Frequently Asked Questions</h3>
      <div className="faq" onClick={unhide}>
        <div className="question">
          <h3>Why i need you pandit Ji</h3>
          <svg width={15} height={10} viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              stroke-width={"7"}
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique molestiae sint deleniti repellendus illo excepturi
            doloremque nobis iste animi?
          </p>
        </div>
      </div>

      {/* second */}
      <div className="faq" onClick={unhide}>
        <div className="question">
          <h3>Anything happen from pooja ?</h3>
          <svg width={15} height={10} viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              stroke-width={"7"}
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique molestiae sint deleniti repellendus illo excepturi
            doloremque nobis iste animi?
          </p>
        </div>
      </div>

      {/* third */}
      <div className="faq" onClick={unhide}>
        <div className="question">
          <h3>Why i need you pandit Ji</h3>
          <svg width={15} height={10} viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              stroke-width={"7"}
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique molestiae sint deleniti repellendus illo excepturi
            doloremque nobis iste animi?
          </p>
        </div>
      </div>
      {/* fourth */}
      <div className="faq" onClick={unhide}>
        <div className="question">
          <h3>Why i need you pandit Ji</h3>
          <svg width={15} height={10} viewBox="0 0 42 25">
            <path
              d="M3 3L21 21L39 3"
              stroke="white"
              stroke-width={"7"}
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="answer">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            similique molestiae sint deleniti repellendus illo excepturi
            doloremque nobis iste animi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;
