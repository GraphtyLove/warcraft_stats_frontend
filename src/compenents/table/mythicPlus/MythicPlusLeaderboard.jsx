import React from 'react';
import MythicPlusRow from "./MythicPlusRow";

const MythicPlusLeaderboard = ({ leaderboard }) => {
    return (
        <table className="table-auto w-3/4">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Character</th>
                    <th>Rio</th>

                    <th>Haste</th>
                    <th>Mastery</th>
                    <th>Crit</th>
                    <th>Poly</th>

                    <th>Profiles</th>
                </tr>
            </thead>
            <tbody>
                {leaderboard?.data?.map(character => <MythicPlusRow key={character.rank} character={character} />)}
            </tbody>
        </table>
    );
};

export default MythicPlusLeaderboard;