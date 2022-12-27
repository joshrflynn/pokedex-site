import { BaseStatBar, StatLine } from "./Stats.styles";
import "./Stats.css";

const Stats = ({ stats, name }) => {
  const statArr = ["HP", "Atk", "Def", "SpA", "SpD", "Spd"];
  let baseStatTotal = 0;
  return (
    <>
      {stats.map((stat, index) => {
        baseStatTotal += stat.base_stat;
        return (
          <StatLine key={`${name}-${statArr[index]}`}>
            <div className="stat-name">{statArr[index]}:</div>
            <div className="base-stat">{stat.base_stat}</div>

            <BaseStatBar
              style={{
                "--barFill": `${(200 - stat.base_stat) / 2}%`,
              }}
            >
              &nbsp;
            </BaseStatBar>
          </StatLine>
        );
      })}
      <div className="base-stat-total-container">
        Base Stat Total: <div className="base-stat-total">{baseStatTotal}</div>
      </div>
    </>
  );
};

export default Stats;
