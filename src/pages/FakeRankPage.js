import { useState, useEffect } from 'react';

import { fakeQueryRank, fakeQueryRanks } from 'queries/fakequeryrank';
import {RanksTableTestRename} from "components/RanksTableTestRename"
import { RanksTableChildren } from 'components/RanksTableChildren'

/**
 * Renders a page with fake query rank.
 * @param id
 * @returns {JSX.Element}
 * @constructor
 */

export const FakeRankPage = ({id}) => {
    const [rank, setRank] = useState(null)

    useEffect(
        () => {
            fakeQueryRank(id)
                .then(response => response.json())
                .then((json) => setRank(json))
        }, [id]
    )

    return (
        <RanksTableChildren rank={rank}/>
    )
}