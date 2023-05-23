import {actions} from "./AppProvider";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import React from 'react'

import {RanksTableTestRename} from 'components/RanksTableTestRename'
import { RanksTableChildren } from "components/RanksTableChildren";

/**
 * Komponenta, která poskytuje data a funkce pro práci s hodnostmi.
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
      <RanksTableChildren rank={rank} actions={actions} />
    );
  } else {
    return (
      <div>Loading... {id}, {rank}</div>
    );
  }
};


