import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { expenses, currency, dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}
    return (
        <div className='alert alert-secondary'>
            Currency {
                <select name="Currency" id="Currency" defaultValue={currency} onChange={event=>changeCurrency(event.target.value)} className="list-group-item-info">
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