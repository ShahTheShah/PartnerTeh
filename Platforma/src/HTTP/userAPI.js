import { $host, $authHost } from '.';
import jwtDecode from 'jwt-decode';

export const
    create = async parameters => {
        parameters.specialization = JSON.stringify(parameters.specialization);
        console.log(parameters)
        const {data} = await $authHost.post('worker/create', parameters);
        return data
    },
    login = async parameters => {
        const {data} = await $host.post('worker/login', parameters);
        localStorage.setItem('WorkerToken', data.WorkerToken)
        return jwtDecode(data.WorkerToken);
    },
    check = async () => {
        const { data } = await $authHost.get('worker/check');
        localStorage.setItem('WorkerToken', data.WorkerToken);
        return jwtDecode(data.WorkerToken);
    },
    getWorkers = async () => {
        const data = await $authHost.get('worker/getWorkers');
        // localStorage.setItem('WorkerToken', data.WorkerToken);
        return data;
    }
// DOPZdW2U
// iwdjbupu
