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
  }, [url]);

  return (
    <div className="flavor-text">
      {speciesData !== null && speciesData.flavor_text_entries[0].flavor_text}
    </div>
  );
};

export default FlavorText;
