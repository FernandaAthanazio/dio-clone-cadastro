import React from 'react';

import {InputContainer, InputText, IconContainer, ErrorText } from './styles';
import { Controller } from "react-hook-form";
import { IInput } from './types';

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: IInput) => {
  return (
    <>
      <InputContainer>
          {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
          <Controller
            name={name}
            control={control}
            rules={{required: true}}
            render={({ field: { value, onChange } }) => {
              return <InputText value={value} onChange={onChange} {...rest} />;
          }}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };