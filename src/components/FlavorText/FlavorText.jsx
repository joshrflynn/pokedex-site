import { useEffect, useState } from "react";
import axios from "axios";

import "./FlavorText.css";

const FlavorText = ({ url }) => {
  const [speciesData, setSpeciesData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(url);
      setSpeciesData(response.data);
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {speciesData !== null && (
        <div>
          <div className="flavor-text">
            <div className="genera">
              {
                speciesData.genera.filter((generaElement) => {
                  return generaElement.language.name === "en";
                })[0].genus
              }
            </div>
            {speciesData.flavor_text_entries[0].flavor_text}
          </div>
        </div>
      )}
    </>
  );
};

export default FlavorText;
