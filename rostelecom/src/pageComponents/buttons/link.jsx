import React from 'react';
import {Link} from 'react-router-dom';
import Style from './buttons.module.css';

const LinkTo = ({src, children, style}) => {
    return (
        <Link to={src} className={Style.link} style={style}>{children}</Link>
    );
};

export default LinkTo;