"use client";
import { useGetLargeTeams } from "@/hooks/teams/useGetLargeTeams";
import "./largeSquads.scss";

const LargeSquads = () => {
  const { data: clubs } = useGetLargeTeams();
  return (
    <section className="large-squads">
      <div className="section-title">
        <h2>Large squads</h2>
        <span></span>
      </div>

      <div className="large-grid">
        {clubs?.map((item) => (
          <div className="large-card" key={item.id}>
            <div className="large-header">
              <div className="item-logo">
                {item.club_name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>

              <div>
                <h3>{item.club_name}</h3>
                <p>{item.country}</p>
              </div>
            </div>

            <div className="large-info">
              <div className="info-box">
                <h4>{item.count}</h4>
                <span>Players</span>
              </div>

              <div className="info-box">
                <h4>{Math.floor(item.avg)}</h4>
                <span>Avg age</span>
              </div>

              <div className="info-box">
                <h4>${item.sum}</h4>
                <span>Wages/wk</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LargeSquads;
