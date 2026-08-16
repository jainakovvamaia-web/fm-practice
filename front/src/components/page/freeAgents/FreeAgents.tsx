'use client'
import "./freeAgents.scss";
import FreeAgentRow from "../freeAgentRow/FreeAgentRow";
import { useGetFreeAgents } from "@/hooks/players/useGetFreeAgents";


const FreeAgents = () => {
  const { data: freeAgents } = useGetFreeAgents();
  return (
    <section className="freeAgents">
      <div className="freeAgents-title">
        <h2>Free agents</h2>
        <div className="line"></div>
      </div>

      <div className="list">
        {freeAgents?.map((item) => (
          <FreeAgentRow key={item.id} player={item} />
        ))}
      </div>
    </section>
  );
};

export default FreeAgents;
