import "./freeAgentRow.scss";

interface IPlayerCardProps {
  player: IPlayer;
}

interface IPlayer {
  image: string;
  full_name: string;
  position: string;
  age: number;
  salary: string;
}
const FreeAgentRow = ({ player }: IPlayerCardProps) => {
  return (
    <div className="free-agent">
      <div className="left">
        <img src={player.image} alt={player.full_name} />

        <div>
          <h3>{player.full_name}</h3>

          <p>
            {player.position} • Age {player.age}
          </p>
        </div>
      </div>

      <div className="right">
        <h2>${player.salary}</h2>

        <span className="status">Available</span>

        <button>Sign player</button>
      </div>
    </div>
  );
};

export default FreeAgentRow;
