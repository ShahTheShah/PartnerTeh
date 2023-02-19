import { useContext } from 'react';
import { Context } from '../..';
import './Customers.scss';

const Customers = () => {
    const { customers } = useContext(Context);
    return <ul className="customers">
        {customers.customers.map(({id, name}) =>
            <li className='customer' key={id}>
                {name}
            </li>
        )}
    </ul>;
};

export default Customers;
