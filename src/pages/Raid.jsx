import React, { useState } from 'react';
import RaidForm from "../compenents/forms/RaidForm";


const Raid = () => {
    const [leaderboard, setLeaderboard] = useState(null);

    const [characterClass, setCharacterClass] = useState("Evoker");
    const [spec, setSpec] = useState("Preservation");
    const [raid, setRaid] = useState("Vault of the Incarnates");
    const [boss, setBoss] = useState("Eranog");


    return (
        <>
            <div>
                <RaidForm
                    raid={raid} setRaid={setRaid}
                    boss={boss} setBoss={setBoss}
                    characterClass={characterClass} setCharacterClass={setCharacterClass}
                    spec={spec} setSpec={setSpec}
                />
            </div>
            {leaderboard && <div>

            </div>}
        </>
    );
};

export default Raid;