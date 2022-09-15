import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from 'slice/filterSlice';

import css from './Filter.module.css'

const Filter = () => {
    const filter = useSelector(store => { return store.filter.value });
    
    const dispatch = useDispatch();

    const onChange = e => {
        dispatch(changeFilter(e.target.value))
    };

    return (
        <div className={css.filter__container}>
            <label className={css.filter__label}>
                <p className={css.filter__title}>Find contacts by name</p>
                <input
                    type="text" value={filter}
                    onChange={onChange}
                    className={css.filter__input} />
            </label>
        </div>    
    )    
};

export default Filter;