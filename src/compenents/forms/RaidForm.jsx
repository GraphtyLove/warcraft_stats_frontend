import React from 'react';
import ClassSelection from "./common/ClassSelection";
import RaidSelection from "./raid/RaidSelection";

const RaidForm = ({
                      raid, setRaid,
                      boss, setBoss,
                      characterClass, setCharacterClass,
                      spec, setSpec,
                  }) => {
    return (
        <div>
            <ClassSelection
                characterClass={characterClass} setCharacterClass={setCharacterClass}
                spec={spec} setSpec={setSpec}
            />
            <RaidSelection
                raid={raid} setRaid={setRaid}
                boss={boss} setBoss={setBoss}
            />
            <h2 className='text-xl font-bold mt-20'>Raid is still under development, please be patient...</h2>
        </div>
    );
};

export default RaidForm;