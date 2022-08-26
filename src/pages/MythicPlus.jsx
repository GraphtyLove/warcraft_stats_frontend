import React, {useCallback, useEffect, useState} from 'react';
import MythicPlusForm from "../compenents/forms/MythicPlusForm";
import {BACKEND_URL} from "../constants";
import {fetchApi} from "../utils";

const MythicPlus = () => {
    const [leaderboard, setLeaderboard] = useState(null);
    const [leaderboardLoading, setLeaderboardLoading] = useState(false);

    const [characterClass, setCharacterClass] = useState("Shaman");
    const [spec, setSpec] = useState("Restoration");

    const loadLeaderboard = async () => {
        console.log("Start fetching MM+...")
        setLeaderboardLoading(true)
        try {
            const response = await fetch(`${BACKEND_URL}/mythic-plus?class_name=${characterClass}&spec_name=${spec}&region=world&season=season-sl-4&max_characters=60`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "accept": "application/json"
                }
            })
            const responseJson = await response.json()
            setLeaderboard(responseJson)
            console.log(responseJson)
        } catch (err) {
            console.error(err)
        } finally {
            setLeaderboardLoading(false)
            console.log("Done fetching MM+ !")
        }

    };

    return (
        <>
            <div>
                <MythicPlusForm
                    characterClass={characterClass} setCharacterClass={setCharacterClass}
                    spec={spec} setSpec={setSpec}
                    loadLeaderboard={loadLeaderboard}
                />
            </div>
            {leaderboardLoading && <div>Loading...</div>}
            {leaderboard?.data && <div>
                Data loaded!
                {JSON.stringify(leaderboard)}
            </div>}
        </>
    );
};

export default MythicPlus;