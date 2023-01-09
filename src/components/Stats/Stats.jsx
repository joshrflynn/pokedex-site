import {
  BaseStat,
  BaseStatBar,
  BaseStatTotal,
  StatLine,
  StatName,
  StatContainer,
} from "./Stats.styles";

const Stats = ({ stats, name }) => {
  const statArr = ["HP", "Atk", "Def", "SpA", "SpD", "Spd"];
  let baseStatTotal = 0;
  return (
    <StatContainer>
      {stats.map((stat, index) => {
        baseStatTotal += stat.base_stat;
        return (
          <StatLine key={`${name}-${statArr[index]}`}>
            <StatName>{statArr[index]}:</StatName>
            <BaseStat>{stat.base_stat}</BaseStat>

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
      <BaseStatTotal>
        Base Stat Total: <div>{baseStatTotal}</div>
      </BaseStatTotal>
    </StatContainer>
  );
};

export default Stats;
