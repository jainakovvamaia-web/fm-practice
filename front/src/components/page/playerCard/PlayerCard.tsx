import "./playerCard.scss";

interface IPlayerCardProps {
  player: IPlayer;
}

interface IPlayer {
  image: string;
  full_name: string;
  position: string;
  age: number;
  club_name: string;
  country: string;
  salary: number;
}

const PlayerCard = ({ player }: IPlayerCardProps) => {

  return (
    <div className="player-card">
      <img src={player.image} alt={player.full_name} />

      <h3>{player.full_name}</h3>

      <span className={`badge ${player.position.toLowerCase()}`}>{player.position}</span>

      <p>Age {player.age}</p>

      <p>{player.club_name}</p>

      <small>{player.country}</small>

      <h2>${player.salary}</h2>

      <div className="buttons">
        <button className="view">View</button>
        <button className="transfer">Transfer</button>
      </div>
    </div>
  );
};

export default PlayerCard;
