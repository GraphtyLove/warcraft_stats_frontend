import React from 'react';

const MythicPlusRow = ({ character }) => {
    return (
        <tr>
            <td className="font-bold">{character.rank}</td>
            <td className="flex items-center">
                <div className="mr-3">
                    <img className="covenant-icon" src={character.covenant_icon_url} />
                </div>
                 <div className="flex flex-col items-start">
                     <div className="font-bold">{character.name}</div>
                     <div className="text-sm text-gray-500">{character.realm}</div>
                 </div>


            </td>
            <td style={{ color: character.score_color }}>{character.score}</td>
            <td className="font-bold haste">{character.stats?.haste}%</td>
            <td className="font-bold mastery">{character.stats?.mastery}%</td>
            <td className="font-bold crit">{character.stats?.crit}%</td>
            <td className="font-bold versa">{character.stats?.versatility}</td>
            <td className="flex justify-center">
                <a href={character.profiles.bnet_armory}>
                    <img className="covenant-icon mr-1" src="https://cdnassets.raider.io/assets/img/wow-icon-a718385c1d75ca9edbb3eed0a5546c30.png" alt="Wow armory" />
                </a>
                <a href={character.profiles.raider_io}>
                    <img className="covenant-icon" src="https://cdnassets.raider.io/images/brand/Icon_FullColor.png" alt="RaiderIo" />
                </a>
            </td>
        </tr>
    );
};

export default MythicPlusRow;