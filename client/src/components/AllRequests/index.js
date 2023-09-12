import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Card from '@mui/material/Card';
/*import { useQuery } from '@apollo/client';
import { QUERY_ALL_REQUEST } from '../../utils/queries';*/


/** THIS IS TEMPORARY PLACE HOLDERS TO PREVENT PAGE FROM BREAKING  */
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
};


/**** DO NOT DELETE!!!!! ****
 ***** WE WILL BE ABLE TO USE THIS CODE ONCE DB IS READY

export default function VillageResquests() {
  
  const { loading, data } = useQuery(QUERY_ALL_REQUEST);
  const requests = data?.requests; 
 

  return (
    <div>
      {loading ? (
        <div> <Skeleton /> </div>
      ): (
        requests.map((requests) =>{
          <Card>
            <Typography>{requests.authorId}</Typography>
            <Typography>{requests.title}</Typography>
            <Typography>{requests.body}</Typography>
            <Typography>{requests.crayons}</Typography>
          </Card>
        })
      )
      }
      
    </div>
  );
}

VillageResquests.propTypes = {
  loading: PropTypes.bool,
};
******************* DO NOT DELETE!!! *********************
*/