"use client";
import { useRouter } from "next/navigation";
import "./addPlayer.scss";
import { useGetTeams } from "@/hooks/teams/useGetTeams";
import { useForm } from "react-hook-form";
import { useAddPlayers } from "@/hooks/players/useAddPlayers";

interface IForm {
  image: string;
  full_name: string;
  age: number;
  salary: number;
  team_id: number | null;
  position: string;
}

const AddPlayer = () => {
  const router = useRouter();
  const { data: teams } = useGetTeams();
  const { register, handleSubmit, reset } = useForm<IForm>();
  const { mutate: createPlayer } = useAddPlayers();
  const handleData = (data: IForm) => {
    createPlayer({
      ...data,
      team_id: data.team_id ? Number(data.team_id) : null,
    });
    reset();
  };
  return (
    <section className="add-player">
      <div className="player-container">
        <button className="back-btn" onClick={() => router.push("/")}>
          ← Back to Dashboard
        </button>

        <h1>Add New Player</h1>
        <p className="subtitle">Fill in the player details below</p>

        <form onSubmit={handleSubmit(handleData)} className="player-form">
          <div className="form-group">
            <label>
              Full name <span>*</span>
            </label>

            <input
              {...register("full_name")}
              placeholder="e.g. Marcus Rashford"
            />
          </div>
          <div className="form-group">
            <label>
              Avatar <span>*</span>
            </label>

            <input {...register("image")} placeholder="image" />
          </div>

          <div className="row">
            <div className="form-group">
              <label>
                Age <span>*</span>
              </label>

              <input
                {...register("age", { valueAsNumber: true })}
                placeholder="e.g. 25"
              />
            </div>

            <div className="form-group">
              <label>
                Salary (£/week) <span>*</span>
              </label>

              <input
                {...register("salary", { valueAsNumber: true })}
                placeholder="e.g. 150000"
              />
            </div>
          </div>

          <div className="form-group">
            <label>
              Position <span>*</span>
            </label>

            <select {...register("position")}>
              <option>Select position...</option>
              <option>Goalkeeper</option>
              <option>Defender</option>
              <option>Midfielder</option>
              <option>Forward</option>
            </select>
          </div>

          <div className="form-group">
            <label>Team</label>

            <select {...register("team_id")}>
              <option value="">No team</option>
              {teams?.map((item, idx) => (
                <option key={idx} value={item.id}>
                  {item.club_name}
                </option>
              ))}
            </select>
          </div>

          <div className="buttons">
            <button className="save-btn" type="submit">
              Save Player
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => router.push("/")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPlayer;
