import React from 'react';

const MythicPlusRow = ({ character, characterClass }) => {
    return (
        <tr className="even:bg-gray-100">
            <td className="font-bold">{character.rank}</td>
            <td className="flex items-center">
                <div className="mr-3">
                    <div className="class-icon-wrapper mt-0.5">
                        <img
                            className="class-icon"
                            src={`/wow_icons/spec/${characterClass.toLocaleLowerCase()}_${character.spec?.toLocaleLowerCase()}.jpg`}
                            alt={characterClass}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-start">
                    <div className="font-bold">{character.name}</div>
                    <div className="text-sm text-gray-500">{character.realm}</div>
                </div>


            </td>
            <td style={{ color: character.score_color }}>{character.score}</td>
            <td className="haste">
                <div className="flex flex-col">
                    <div className="font-bold">
                        {character.stats?.haste.percentage}%
                    </div>
                    <div>
                        {character.stats?.haste.value}
                    </div>
                </div>
            </td>
            <td className="mastery">
                <div className="flex flex-col">
                    <div className="font-bold">
                        {character.stats?.mastery.percentage}%
                    </div>
                    <div>
                        {character.stats?.mastery.value}
                    </div>
                </div>
            </td>
            <td className="crit">
                <div className="flex flex-col">
                    <div className="font-bold">
                        {character.stats?.crit.percentage}%
                    </div>
                    <div>
                        {character.stats?.crit.value}
                    </div>
                </div>

            </td>
            <td className="font-bold versa">{character.stats?.versatility.value}</td>
            <td className="flex justify-center">
                <a href={character.profiles.bnet_armory}>
                    <img className="profile-icon mr-1" src="https://cdnassets.raider.io/assets/img/wow-icon-a718385c1d75ca9edbb3eed0a5546c30.png" alt="Wow armory" />
                </a>
                <a href={character.profiles.raider_io}>
                    <img className="profile-icon" src="https://cdnassets.raider.io/images/brand/Icon_FullColor.png" alt="RaiderIo" />
                </a>
            </td>
        </tr>
    );
};

export default MythicPlusRow;