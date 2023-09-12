import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_REQUEST } from '../../utils/queries';


/** THIS IS TEMPORARY PLACE HOLDERS TO PREVENT PAGE FROM BREAKING  
 export default function VillageResquests() {
  
  return (
    <div>
      <Skeleton /> 
          <Card>
            <Typography>This will be a card</Typography>
            
          </Card>
            
    </div>
  );
}

VillageResquests.propTypes = {
  loading: PropTypes.bool,
};*/


/***** DO NOT DELETE!!!!! ****
 ***** WE WILL BE ABLE TO USE THIS CODE ONCE DB IS READY*/

export default function VillageRequests() {
  
  const { loading, data } = useQuery(QUERY_ALL_REQUEST);
  const requests = data?.requests; 
 console.log('this is the requests ' + requests);
 console.log('this is the data ' + data);
 console.log('the is QUERY_ALL_REQUEST ' + QUERY_ALL_REQUEST)
  return (
    <div>
      {loading ? (
        <Skeleton />
      ): (
        requests ? (
        requests.map((request) =>(
          <Card key={request.id}>
            <Typography>{request.authorId.username}</Typography>
            <Typography>{request.title}</Typography>
            <Typography>{request.body}</Typography>
            <Typography>{request.crayons}</Typography>
          </Card>
        ))
        ) :(
          <p>No requests found</p>
        )
      
      )}
      
    </div>
  );
}
/*
VillageRequests.propTypes = {
  loading: PropTypes.bool,
};
****************** DO NOT DELETE!!! *********************
*/