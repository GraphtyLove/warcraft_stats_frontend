import React, {useMemo, useState} from 'react';
import SelectionInput from "../inputs/SelectionInput";
import {RAIDS_AND_BOSSES} from "../../../constants";

const RaidSelection = () => {

    const [raid, setRaid] = useState("Sanctum Of Domination");
    const [boss, setBoss] = useState("The Tarragrue");

    const raidList = useMemo(() => {
        const filteredList = []
        for (const classMap of Object.entries(RAIDS_AND_BOSSES)) {
            filteredList.push(classMap[0])
        }
        return filteredList
    }, []);

    const bossList = useMemo(() => {
        return RAIDS_AND_BOSSES[raid]
    }, [raid]);

    return (
        <div className="flex w-full justify-center">
            <SelectionInput name="Raid" options={raidList} value={raid} setter={setRaid} />
            <SelectionInput name="Boss" options={bossList} value={boss} setter={setBoss} />
        </div>
    );
};

export default RaidSelection;