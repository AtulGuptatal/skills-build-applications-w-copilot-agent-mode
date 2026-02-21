import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  useEffect(() => {
    console.log('Fetching teams from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results ? data.results : data;
        console.log('Fetched teams:', items);
        setTeams(items);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team, idx) => (
          <li key={idx} className="list-group-item">
            {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
