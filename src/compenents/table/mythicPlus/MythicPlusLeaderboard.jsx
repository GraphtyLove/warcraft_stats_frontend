import React from 'react';
import MythicPlusRow from "./MythicPlusRow";

const MythicPlusLeaderboard = ({ leaderboard, characterClass, characterSpec }) => {
    console.log("spec: ", characterSpec)
    return (
        <table className="table-auto w-3/4">
            <thead>
                <tr className="text-xl">
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
                {leaderboard?.data?.filter(charactere => charactere.spec === characterSpec)?.map(character => <MythicPlusRow key={character.rank} character={character} characterClass={characterClass} />)}
            </tbody>
        </table>
    );
};

export default MythicPlusLeaderboard;