import { $host, $authHost } from '.';
export const
    create = async parameters => {
        const {data} = await $authHost.post('specialization/create', parameters);
        return data
    },
    checkAll = async () => {
        const { data } = await $host.get('specialization/checkAll');
        return data;
    };
