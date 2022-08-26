import React, {useState} from 'react';
import MythicPlusForm from "../compenents/forms/MythicPlusForm";

const MythicPlus = () => {
    const [leaderboard, setLeaderboard] = useState(null);

    const [characterClass, setCharacterClass] = useState("Shaman");
    const [spec, setSpec] = useState("Restoration");

    return (
        <div>
            <MythicPlusForm
                characterClass={characterClass} setCharacterClass={setCharacterClass}
                spec={spec} setSpec={setSpec}
            />
        </div>
    );
};

export default MythicPlus;