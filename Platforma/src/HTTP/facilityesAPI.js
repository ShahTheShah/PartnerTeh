import { $host, $authHost } from '.';

export const
    create = async parameters => {
        parameters.stages = JSON.stringify(parameters.stages);
        parameters.price = Number(parameters.price);
        const {data} = await $authHost.post('facility/create', parameters);
        return data
    },
    checkAll = async () => {
        let { data } = await $host.get('facility/checkAll');
        data = data.map(item => {
            item.stages = JSON.parse(item.stages)
            return item
        });
        return data;
    };
