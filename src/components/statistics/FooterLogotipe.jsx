import React from 'react';
const FooterLogotipe = (props) => {
    const positionFooter = () => {
        if (props.move == 1) {
            return (
                {
                    top: '1340px'
                }
            )
        } else {
            return (
                {
                    top: '1851px'
                }
            )
        }
    }
    return (
        <div
            className='reserved'
            style={positionFooter()}
        >
            <h
                className='apco'
            >
                AppCo
            </h>
            <h
                className='rights'
            >
                All rights reserved by ThemeTags
            </h>
            <h
                className='copy'
            >
                Copyrights © 2019.
            </h>
        </div>
    )
}
export default FooterLogotipe;