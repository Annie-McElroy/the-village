import React, { useState, useEffect } from 'react';
import CreateReqButton from '../CreateReqButton';
import AllRequests from '../AllRequests/index.js';
import Skeleton from '@mui/material/Skeleton';
import AuthService from '../../utils/auth.js';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGE } from '../../utils/queries.js';


const VillageInfo = ({villageId}) => {

    const [villageData, setVillageData] = useState({});

    const { data, loading, error } = useQuery(
        QUERY_VILLAGE, {
        variables: {
            id: villageId[0]._id
        }
    },
        { onCompleted: setVillageData }
    );

    // useEffect(() => {
    //     if (data) {
    //         setVillageData(villageData)};
    // }, [villageData]);

    // console.log(villageData)

    let village = data?.village || {};
    // console.log(village._id);


    return (
        <div>
            {loading ? (
                <Skeleton />
            ) : (
                <div className="pageFrame patternbkg">

                    <h1>{village.name}</h1>
                    <CreateReqButton url={`/village/create-request`}
                    />
                    <AllRequests requests={village.requests} />

                </div>

            )}
        </div>
    )

};

export default VillageInfo;