import React, {useState} from 'react';
import RaidForm from "../compenents/forms/RaidForm";
import useFetch from "react-fetch-hook";


const Raid = () => {
    const [leaderboard, setLeaderboard] = useState(null);

    const [characterClass, setCharacterClass] = useState("Shaman");
    const [spec, setSpec] = useState("Restoration");
    const [raid, setRaid] = useState("Sanctum Of Domination");
    const [boss, setBoss] = useState("The Tarragrue");


    return (
        <>
            <div>
                <RaidForm
                    raid={raid}
                    setRaid={setRaid}
                    boss={boss}
                    setBoss={setBoss}
                    characterClass={characterClass}
                    setCharacterClass={setCharacterClass}
                    spec={spec}
                    setSpec={setSpec}
                />
            </div>
            {leaderboard && <div>

            </div>}
        </>
    );
};

export default Raid;