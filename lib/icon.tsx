import React from 'react';
import './importIcons'

interface IconProps {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <span>
      <svg>
        <use xlinkhref={`#${props.name}`}/>
      </svg>
    </span>
  );
};

export default Icon;