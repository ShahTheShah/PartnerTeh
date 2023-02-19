import { $host, $authHost } from '.';
import jwtDecode from 'jwt-decode';

export const
    create = async parameters => {
        const {data} = await $authHost.post('direction/create', parameters);
        return data
    },
    checkAll = async () => {
        const { data } = await $host.get('direction/checkAll');
        return data;
    };
