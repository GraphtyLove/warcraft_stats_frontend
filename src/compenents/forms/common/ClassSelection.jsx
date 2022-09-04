import React, {useMemo, useState} from 'react';
import SelectionInput from "../inputs/SelectionInput";
import {CLASSES_AND_SPECS} from "../../../constants";

const ClassSelection = ({characterClass, setCharacterClass, spec, setSpec}) => {

    const classList = useMemo(() => {
        console.log("Compute class list")
        const filteredList = []
        for (const classMap of Object.entries(CLASSES_AND_SPECS)) {
            filteredList.push(classMap[0])
        }
        return filteredList
    }, []);

    const specList = useMemo(() => {
        const specListTemp = CLASSES_AND_SPECS[characterClass]
        characterClass && setSpec(specListTemp[0])
        return specListTemp
    }, [characterClass, setSpec]);

    return (
        <div className="flex w-full justify-center">
            <SelectionInput name="Class" options={classList} value={characterClass} setter={setCharacterClass} />
            <SelectionInput name="Spec"  options={specList}  value={spec}           setter={setSpec} />
        </div>
    );
};

export default ClassSelection;