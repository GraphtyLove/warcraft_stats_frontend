import React from 'react';
import ClassSelection from "./common/ClassSelection";

const MythicPlusForm = ({characterClass, setCharacterClass, spec, setSpec}) => {
    return (
        <div>
            <ClassSelection
                characterClass={characterClass} setCharacterClass={setCharacterClass}
                spec={spec} setSpec={setSpec}
            />
        </div>
    );
};

export default MythicPlusForm;