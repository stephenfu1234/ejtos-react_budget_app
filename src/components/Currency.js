import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses, currency } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            Currency {
                <select name="Currency" id="Currency" defaultValue={currency}
                className="list-group-item-info">
                    <option value="$">($) Dollar</option>                   
                    <option value="£">(£) Pound</option>                   
                    <option value="€">(€) Euro</option>
                    <option value="₹">(₹) Ruppee</option>
                </select>
            }
        </div>
    );
};
export default Currency;