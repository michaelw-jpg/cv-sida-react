import { useEffect, useState } from "react";

export default function CvDataparser() {
  const [cvData, setCvData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/cv-sida-react/data/cvdata.json")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setCvData(data);
          setLoading(false);
        }, 500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <section className="cv-section">
      <div className="education">
        <h2>
          <b>Utbildning</b>
        </h2>
        {console.log(cvData)}
        {cvData.education.map((CV) => {
          return (
            <div className="item" key={CV.title}>
              <h3>
                {CV.title}, {CV.institution}, {CV.years}
              </h3>
              <p>{CV.description}</p>
            </div>
          );
        })}
      </div>
      <div className="work">
        <h2> Arbetslivserfarenhet</h2>
        {cvData.workExperience.map((CV) => {
          return (
            <div className="item" key={CV.title}>
              <h3>
                {CV.title}, {CV.company}, {CV.years}
              </h3>
              <p>{CV.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
