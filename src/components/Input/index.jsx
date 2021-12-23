import React from 'react';
import {
  SearchContainer,
  SearchInput,
  SearchLabel,
} from './types/search.styles.js';

const CustomInput = (props) => {
  const getType = () => {
    const { inputType, label, id, ...rest } = props;

    switch (inputType) {
      case 'search':
        return (
          <SearchContainer>
            <SearchLabel>{label}</SearchLabel>
            <SearchInput {...rest} type={inputType} />
          </SearchContainer>
        );
      default:
        return <input {...rest} />;
    }
  };
  return <>{getType()}</>;
};

export default CustomInput;
