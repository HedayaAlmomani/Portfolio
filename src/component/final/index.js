import Body from "../body";
import Contact from "../contact";
import Happy from "../happy";
import Project from "../projects";
import "./style.css";
const Final = () => {
  return (
    <>
      <div className="all">
        <Body />

        <div className="container">
          <div className="plate"></div>
          <div className="cup">
            <div className="top">
              <div className="mou">
                <ol>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ol>
              </div>
            </div>

            <div className="circle">
              <div className="tea"></div>
            </div>
          </div>
          <div className="handle"></div>
        </div>
      </div>

      <Happy />
      <Project />
      <h2>CONTACT</h2>
      <Contact />
    </>
  );
};
export default Final;
