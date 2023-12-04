import React from "react";
import { Button } from "@mui/material";
import { useMutation } from "@apollo/client";
import { JOIN_VILLAGE } from "../../utils/mutations";
import { useNavigate } from 'react-router-dom';
import AuthService from '../../utils/auth';

const JoinVillageBtn = ({village_id}) => {

    const navigate = useNavigate();
    // const refreshPage = () => {
    //     navigate(0);
    // }

    // const findVillageId = () => {
    //     let villageId = AuthService.getProfile().data.village[0];
    //     console.log(villageId)

    //     return villageId;
    // }

    const [joinVillageMutation, { data, loading, error }] = useMutation(JOIN_VILLAGE);
    
    if (loading) return 'Joining...';
    if (error) return `Joining error! ${error.message}`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(villageId)

        try {
            await joinVillageMutation({
                variables: {
                    village: village_id
                },
            });

            // await findVillageId()
        }

        catch(error) {
            console.error('Mutation error:', error.message);
        }
    };

    return (
        <Button variant="contained" onClick={handleSubmit}>Join Village!</Button>
    );

}

export default JoinVillageBtn;