import "../assets/scss/teams/teams.scss";
import { useEffect } from "react";
import { useState } from "react";
import Team from "../Classes/Team";
import TeamComponent from "../Components/Teams/TeamComponent";
import User from "../Classes/User";
const Teams = ({ user }: { user: User }) => {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(user.endpoint + "/teams/all");
      const teamData = await response.json();
      const teams: Team[] = [];
      for (let i = 0; i < teamData.length; i++) {
        const element = teamData[i];
        const response = await fetch(
          `${user.endpoint}/teams/${element.id}/members`
        );
        const data = await response.json();
        const owners = data.members
          .filter((item: any) => item.permissions & 16)
          .map((item: any) => item.user);
        teams.push(
          new Team({
            id: data.id,
            name: data.name,
            avatar: data.avatar,
            description: data.description,
            owners: owners,
          })
        );
      }
      setTeams(teams);
    };
    stuff();
  }, []);
  return (
    <div className="teams">
      {teams.map((team: Team) => {
        return (
          <TeamComponent
            id={team.id}
            name={team.name}
            owners={team.owners}
            avatar={team.avatar}
            description={team.description}
            currentUser={user}
            key={team.id}
          />
        );
      })}
    </div>
  );
};

export default Teams;
