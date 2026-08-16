"use client";

import { useRouter } from "next/navigation";
import "./addClub.scss";
import { useForm } from "react-hook-form";
import { useAddTeams } from "@/hooks/teams/useAddTeams";

interface IForm {
  country: string;
  founded_year: number;
  club_name: string;
  stadium: string;
}

const AddClub = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<IForm>();
  const { mutate: createTeam } = useAddTeams();
  const handleData = (data: IForm) => {
    createTeam(data);
    reset();
  };

  return (
    <section className="add-club">
      <div className="club-container">
        <button className="back-btn" onClick={() => router.push("/")}>
          ← Back to Dashboard
        </button>

        <h1>Add New Club</h1>

        <p className="subtitle">Register a new football club</p>

        <form onSubmit={handleSubmit(handleData)} className="club-form">
          <div className="form-group">
            <label>
              Club name <span>*</span>
            </label>

            <input {...register("club_name")}  placeholder="club name" />
          </div>

          <div className="form-group">
            <label>
              Country <span>*</span>
            </label>

            <input {...register("country")}  placeholder="country" />
          </div>

          <div className="form-group">
            <label>
              Stadium <span>*</span>
            </label>

            <input {...register("stadium")}placeholder="e.g. Emirates Stadium" />
          </div>

          <div className="form-group">
            <label>
              Founded year <span>*</span>
            </label>

            <input {...register("founded_year")}  placeholder="e.g. 1886" />
          </div>

          <div className="buttons">
            <button className="save-btn" type="submit">
              Save Club
            </button>

            <button
              className="cancel-btn"
              type="button"
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

export default AddClub;
