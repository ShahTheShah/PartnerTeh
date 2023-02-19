import { $host, $authHost } from '.';

export const
    create = async parameters => {
        const {data} = await $authHost.post('customer/create', parameters);
        return data
    },
    checkAll = async () => {
        const { data } = await $host.get('customer/checkAll');
        return data;
    };
