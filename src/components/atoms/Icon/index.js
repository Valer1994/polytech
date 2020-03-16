import React from 'react';
import classnames from 'classnames';

const Icon = ({
    width,
    name,
    height,
    fill,
    className,
    ...restProps
}) => (
    <i
      className={classnames('Icon',{[className]: className})}
      {...restProps}
    />
);

export default Icon;
