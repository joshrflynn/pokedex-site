import { useEffect, useState } from "react";
import { SpeciesInfoContainer, Genera, FlavorText } from "./SpeciesInfo.styles";
import axios from "axios";

const SpeciesInfo = ({ url }) => {
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
        <SpeciesInfoContainer>
          <Genera>
            {
              speciesData.genera.filter((generaElement) => {
                return generaElement.language.name === "en";
              })[0].genus
            }
          </Genera>
          <FlavorText>
            {
              speciesData.flavor_text_entries.filter((textElement) => {
                return textElement.language.name === "en";
              })[0].flavor_text
            }
          </FlavorText>
        </SpeciesInfoContainer>
      )}
    </>
  );
};

export default SpeciesInfo;
