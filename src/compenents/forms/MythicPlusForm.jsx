import React from 'react';
import ClassSelection from "./common/ClassSelection";

const MythicPlusForm = ({ characterClass, setCharacterClass, spec, setSpec, loadLoadLeaderboard }) => {
    return (
        <div>
            <ClassSelection
                characterClass={characterClass} setCharacterClass={setCharacterClass}
                spec={spec} setSpec={setSpec}
            />
            <button className="py-2 px-4 bg-amber-300 mt-5" onClick={loadLoadLeaderboard}>Search</button>
        </div>
    );
};

export default MythicPlusForm;