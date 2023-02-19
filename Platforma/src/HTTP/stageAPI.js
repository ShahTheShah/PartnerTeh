import { $host, $authHost } from '.';

export const
    create = async parameters => {
        const {data} = await $authHost.post('stage/create', parameters);
        return data
    },
    checkAll = async () => {
        const { data } = await $host.get('stage/checkAll');
        return data;
    };
