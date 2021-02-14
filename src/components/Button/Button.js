import React from 'react';
import classNames from 'classnames';

import './Button.scss';
const Button = ({ children, className }) => <button className={classNames('button', className)}>{children}</button>;

export default Button;
