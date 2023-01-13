import React, {useMemo} from 'react';
import SelectionInput from "../inputs/SelectionInput";
import {CLASSES_AND_SPECS} from "../../../constants";

const ClassSelection = ({characterClass, setCharacterClass, characterSpec, setCharacterSpec}) => {

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
        characterClass && setCharacterSpec(specListTemp[0])
        return specListTemp
    }, [characterClass, setCharacterSpec]);

    return (
        <div className="flex w-full justify-center">
            <SelectionInput name="Class" options={classList} value={characterClass} setter={setCharacterClass} />
            <SelectionInput name="Spec"  options={specList}  value={characterSpec}  setter={setCharacterSpec} />
        </div>
    );
};

export default ClassSelection;