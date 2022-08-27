import React from 'react';

const MythicPlusRow = ({ character }) => {
    return (
        <tr>
            <td>{character.rank}</td>
            <td> {character.covenant} {character.name}</td>
            <td style={{ color: character.score_color }}>{character.score}</td>
            <td>{character.stats?.haste}%</td>
            <td>{character.stats?.mastery}%</td>
            <td>{character.stats?.crit}%</td>
            <td>{character.stats?.versatility}</td>
        </tr>
    );
};

export default MythicPlusRow;