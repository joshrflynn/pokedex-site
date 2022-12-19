import "./Stats.css";

const Stats = ({ stats, name }) => {
  const statArr = ["HP", "Atk", "Def", "SpA", "SpD", "Spd"];

  return (
    <>
      {stats.map((stat, index) => {
        let color;
        if (stat.base_stat >= 30) {
          color = { color: "white" };
        } else {
          color = { color: "black" };
        }
        return (
          <div className="stat-line" key={`${name}-${statArr[index]}`}>
            <div className="stat-name">{statArr[index]}:</div>
            <div className="base-stat">{stat.base_stat}</div>
            <div
              className="base-stat-graph"
              style={{
                background: `linear-gradient(to left, white
                      ${(200 - stat.base_stat) / 2}%, var(--dark) 0%`,
                ...color,
              }}
            >
              &nbsp;
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
