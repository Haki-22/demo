import {actions} from "./AppProvider";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import React from 'react'
import Card from "react-bootstrap/Card";

import {RanksTableTestRename} from 'components/RanksTableTestRename'
import { RanksTableChildren } from "components/RanksTableChildren";

/**
 * Komponenta, která poskytuje data a funkce pro práci s rolemi.
 * @param {*} param0
 * @returns
 */


export const RanksPageProvider = ({ id }) => {
  const ranks = useSelector(state => state.ranks);
  const selectedId = useSelector(state => state.ranks.selectedId);
  const rank = ranks[id];

  useEffect(() => {
    console.log('RankPageProvider refetch ' + id);
    actions.rankFetch(id)

  }, [id, selectedId]);

  if (rank) {
    return (
      <Card>
        <Card.Title className='p-3 text-start'>Role</Card.Title>
        <Card.Body>
            <RanksTableChildren rank={rank} actions={actions} />
        </Card.Body>
    </Card>
      
    );
  } else {
    return (
      <div>Loading... {id}, {rank}</div>
    );
  }
};


