import ClubStatistics from "../clubStatistics/ClubStatistics";
import FreeAgents from "../freeAgents/FreeAgents";
import HighestSalaries from "../highestSalaries/HighestSalaries";
import LargeSquads from "../largeSquads/LargeSquads";
import Players from "../players/Players";
import YoungTalents from "../youngTalents/YoungTalents";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Players />
      <FreeAgents />
      <ClubStatistics />

      <HighestSalaries />
      <LargeSquads />
      <YoungTalents />
    </div>
  );
};

export default Home;
