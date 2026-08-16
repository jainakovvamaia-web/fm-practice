"use client";
import { useRouter } from "next/navigation";
import "./header.scss";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="logo">
        <h2>Football Manager</h2>
        <span>Team Analytics</span>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search players..." />

        <button
          className="player-btn"
          onClick={() => router.push("/addPlayer")}
        >
          + Add Player
        </button>

        <button className="club-btn" onClick={() => router.push("/addClub")}>
          + Add Club
        </button>
      </div>
    </header>
  );
};

export default Header;
