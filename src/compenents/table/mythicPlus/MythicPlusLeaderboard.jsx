import React from 'react';
import MythicPlusRow from "./MythicPlusRow";

const MythicPlusLeaderboard = ({ leaderboard }) => {
    return (
        <table className="table-auto w-3/4">
            <thead>
            <tr>
                <th>Rank</th>
                <th>Character</th>
                <th>Score</th>

                <th>Haste</th>
                <th>Mastery</th>
                <th>Crit</th>
                <th>Poly</th>
            </tr>
            </thead>
            <tbody>
            {leaderboard.map( character => <MythicPlusRow key={character.rank} character={character} /> )}
            </tbody>
        </table>
    );
};

export default MythicPlusLeaderboard;