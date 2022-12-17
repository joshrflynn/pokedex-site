import "./Stats.css";

const Stats = ({ stats, name }) => {
  const statArr = ["HP", "Attack", "Defense", "Sp Atk", "Sp Def", "Speed"];

  return (
    <>
      {stats.map((stat, index) => {
        let color;
        if (stat.base_stat >= 30) {
          color = { color: "white", textShadow: "1px 1px black" };
        } else {
          color = { color: "black" };
        }
        return (
          <div className="stat-line" key={`${name}-${statArr[index]}`}>
            <div className="stat-name">{statArr[index]}</div>

            <div
              className="base-stat"
              style={{
                background: `linear-gradient(to left, white
        ${(200 - stat.base_stat) / 2}%, var(--dark) 0%`,
                ...color,
              }}
            >
              {stat.base_stat}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Stats;
