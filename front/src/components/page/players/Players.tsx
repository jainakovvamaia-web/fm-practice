"use client";
import "./players.scss";
import PlayerCard from "../playerCard/PlayerCard";
import { useGetPlayersWithTeam } from "@/hooks/players/useGetPlayersWithTeam";

const Players = () => {
  const { data: players } = useGetPlayersWithTeam();

  return (
    <section className="players">
      <div className="title">
        <h2>Players in clubs</h2>
        <div className="line"></div>
      </div>

      <div className="grid">
        {players?.map((item) => (
          <PlayerCard key={item.id} player={item} />
        ))}
      </div>
    </section>
  );
};

export default Players;
