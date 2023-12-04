import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGES } from '../../utils/queries';
import FindVillageList from '../FindVillageList';
import Skeleton from '@mui/material/Skeleton';


const FindVillage = () => {

    const { data, loading, error } = useQuery(QUERY_VILLAGES);

    const villages = data?.villages || {};
    // console.log(villages)

    return (
        <div>
            {loading ? (
                <Skeleton />
            ) : (
            <div className="pageFrame patternbkg">
                <h2>Select a Village!</h2>
                <FindVillageList villages={villages}/>
            </div>
            )}
        </div>
    )
}

export default FindVillage;