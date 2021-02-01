import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import $ from 'jquery';
import DatePickers from './StatsPageDate';
import Button from './StatsPageButtons';
const StatsPageFilterDate = () => {
    $(document).ready(function () {
        $('body').on('click', '.filter_form .filter:nth-child(1)', function () {
            $('.users .filter_form')
                .css({
                    animation: 'form_filter_hide 1s 1 forwards'
                })
        });
    });
    return (
        <div
            className='filter_form'
        >
            <button
                className='close'
            >
                <CloseIcon
                    style={{
                        color: '#ffffff'
                    }}
                />
            </button>
            <div
                className='date'
            >
                <DatePickers />
            </div>
            <div
                className='butts'
            >
                <Button />
            </div>
        </div>
    )
}
export default StatsPageFilterDate;