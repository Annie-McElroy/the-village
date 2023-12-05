import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import JoinVillageBtn from "../JoinVillageBtn";


const FindVillageList = ({villages}) => {


    return (
        <div>
            {(
                villages.map((village) => (
                    <Card className='request-card' key={village._id}>
                        <div className='req-info'>
                            <Typography className='request-card-title'>{village.name}</Typography>
                            <Typography className='requested-by'>Managed by: {village.admin.username}</Typography>
                            <Typography className='request-card-description'>Zipcode: {village.zipcode}</Typography>
                            <JoinVillageBtn village_id={village._id}/>
                        </div>
                    </Card>
                ))
            )} 
        </div>
    );
}

export default FindVillageList;