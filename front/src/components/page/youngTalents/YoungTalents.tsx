"use client";
import { useGetYoungPlayers } from "@/hooks/players/useGetYoungPlayers";
import "./youngTalents.scss";

const YoungTalents = () => {
  const { data: players } = useGetYoungPlayers();
  return (
    <section className="young-talents">
      <div className="section-title">
        <h2>Young talents</h2>
        <span></span>
      </div>

      <div className="young-grid">
        {players?.map((item, idx) => (
          <div className="young-card" key={idx}>
            <img src={item.image} alt={item.full_name} />

            <h1>{item.age}</h1>

            <h3>{item.full_name}</h3>

            <p>{item.club_name}</p>

            <div className={`badge position ${item.position.toLowerCase()}`}>{item.position}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default YoungTalents;
