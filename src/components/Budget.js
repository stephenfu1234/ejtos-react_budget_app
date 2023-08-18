import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);

    const updateBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}
                <input
                    required='required'
                    type='number'
                    id='budget'
                    value={budget}                    
                    step='10'
                    style={{ size: 10 }}
                    onChange={(event) => updateBudget(event.target.value)}>
                </input>
            </span>
        </div>
    );
};
export default Budget;
