import React from 'react';
import ClassSelection from "./common/ClassSelection";
import RaidSelection from "./raid/RaidSelection";

const RaidForm = () => {
    return (
        <div>
            <ClassSelection />
            <RaidSelection />
        </div>
    );
};

export default RaidForm;