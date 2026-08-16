"use client";
import { useGetHighestSalaries } from "@/hooks/players/useGetHighestSalaries";
import "./highestSalaries.scss";

const HighestSalaries = () => {
  const { data: players } = useGetHighestSalaries();
  return (
    <section className="highest">
      <div className="highest-title">
        <h2>Highest salaries</h2>
        <span></span>
      </div>

      <div className="highest-card">
        {players?.map((item,idx) => (
          <div className="highest-item" key={idx}>
            <div className="highest-left">
              <h3>{idx + 1}</h3>

              <img src={item.image} alt={item.full_name} />

              <div className="highest-info">
                <h4>{item.full_name}</h4>
                <p>{item.club_name}</p>
              </div>
            </div>

            <h5>${item.salary}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HighestSalaries;
