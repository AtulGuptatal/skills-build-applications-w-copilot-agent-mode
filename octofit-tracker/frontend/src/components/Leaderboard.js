import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    console.log('Fetching leaderboard from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const items = data.results ? data.results : data;
        console.log('Fetched leaderboard:', items);
        setLeaderboard(items);
      });
  }, [endpoint]);

  return (
    <div>
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaderboard.map((entry, idx) => (
          <li key={idx} className="list-group-item">
            {entry.team && entry.team.name ? entry.team.name : 'Unknown Team'}: {entry.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
