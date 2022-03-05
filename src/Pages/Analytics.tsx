import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AnalyticsInputs } from "../types/interfaces";
import { useNavigate } from "react-router-dom";
import "../assets/scss/teams/manage/analytics.scss";

const Analytics = ({ user }: AnalyticsInputs) => {
  const { id } = useParams();
  const [team, setTeam] = useState<{ [key: string]: any }>({});
  const [matches, setMatches] = useState<{ [key: string]: any }>([]);
  const [categories, setCategories] = useState<{ [key: string]: any }[]>([]);
  const [properties, setProperties] = useState<{ [key: string]: any }[]>([]);
  const [answers, setAnswers] = useState<{ [key: string]: any }[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const navigate = useNavigate();
  useEffect(() => {
    const stuff = async () => {
      const response = await fetch(`${user.endpoint}/teams/${id}`);
      if (response.status !== 200) return navigate("/teams");
      const data = await response.json();

      const matchesResponse = await fetch(
        `${user.endpoint}/matches/team/${data.id}`
      );
      const matchesData = await matchesResponse.json();

      const categoriesResponse = await fetch(`${user.endpoint}/categories/all`);
      const categoriesData = await categoriesResponse.json();
      const tmpProperties: any = [];
      const tmpAnswersParent: any = [];
      for (let i = 0; i < categoriesData.length; i++) {
        const response = await fetch(
          `${user.endpoint}/properties/category/${categoriesData[i].id}`
        );
        const data = await response.json();
        tmpProperties.push(data);
      }
      for (let i = 0; i < matchesData.length; i++) {
        const tmpAnswers: any = [];
        for (let k = 0; k < tmpProperties.flat().length; k++) {
          const response = await fetch(
            `${user.endpoint}/answers/match/${matchesData[i].id}/property/${
              tmpProperties.flat()[k].id
            }`
          );
          const data = await response.json();
          tmpAnswers.push(data);
        }
        tmpAnswersParent.push(tmpAnswers);
      }

      setTeam(data);
      setMatches(matchesData);
      setCategories(categoriesData);
      setProperties(tmpProperties);
      setAnswers(tmpAnswersParent);
      setLoading(false);
    };
    stuff();
  }, []);
  const scouters: any = [];
  const tmpAnswers = answers
    .flat()
    .map((item) => item.property.title.includes("Scouter"));
  for (let i = 0; i < tmpAnswers.length; i++) {
    const answer = tmpAnswers[i];
    if (!scouters.includes(answer.content)) {
      scouters.push(answer.content);
    }
  }
  const averages: any = [];
  answers.forEach((matchAnswers) => {
    let index = 0;
    matchAnswers.forEach((answer: any) => {
      if (answer.property.type == 2) return;
      if (!averages[index]) {
        averages.push([0, answer.property]);
      }
      if (answer.property.type == 3) {
        const options: Array<any> = answer.property.title.split(",");
        options.shift();
        averages[index][0] += options.indexOf(answer.content);
      } else {
        averages[index][0] += parseInt(answer.content);
      }
      index++;
    });
  });
  return (
    <div className="analytics">
      {loading && (
        <div className="loading">
          <h1>Fetching data...</h1>
        </div>
      )}
      {averages.map((item: any, index: number) => (
        <div className="average" key={index}>
          <h1>
            {item[1].type === 3 ? item[1].title.split(",")[0] : item[1].title}
          </h1>
          <p>
            {item[1].type === 3
              ? item[1].title
                  .split(",")
                  .filter((item: any, index: number) => index !== 0)[
                  Math.round(item[0] / matches.length)
                ]
              : item[0] / matches.length}
          </p>
        </div>
      ))}
    </div>
  );
};
export default Analytics;
