import AuthService from './auth';
import { useQuery } from '@apollo/client';
import { QUERY_VILLAGER } from './queries';

const useGetVillager = (villagerId) => {

    return useQuery(
        QUERY_VILLAGER, {
        variables: {
            id: villagerId
        }
    });

};

export default useGetVillager;