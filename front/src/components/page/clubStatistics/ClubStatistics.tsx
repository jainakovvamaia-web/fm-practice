"use client";
import { useGetClubStatistics } from "@/hooks/teams/useGetClubStatistics";
import "./clubStatistics.scss";

const ClubStatistics = () => {
  const { data: clubs } = useGetClubStatistics();
  return (
    <section className="club">
      <div className="club-title">
        <h2>Club statistics</h2>
        <div className="line"></div>
      </div>

      <div className="club-grid">
        {clubs?.map((item, idx) => (
          <div className="club-card" key={idx}>
            <div className="club-header">
              <div>
                <h3>{item.club_name}</h3>
                <p>{item.country}</p>
              </div>

              <div className="club-logo">
                {item.club_name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
            </div>

            <div className="divider"></div>

            <div className="club-info">
              <div>
                <span>Stadium</span>
                <h4>{item.stadium}</h4>
              </div>

              <div>
                <span>Players</span>
                <h4>{item.count_players}</h4>
              </div>

              <div>
                <span>Total wages</span>
                <h4>${item.total_salary}</h4>
              </div>

              <div>
                <span>Avg salary</span>
                <h4>${Math.floor(item.avg_salary)}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClubStatistics;
