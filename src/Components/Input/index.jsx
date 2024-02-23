import React from 'react'
import { Controller, } from "react-hook-form"

import {
    InputText,
    IconContainer,
    InputContainer,
    ErrorText
  } 
from './styles'

const Input = ({leftIcon, name,control, errorMessage, ...rest}) => {
  return (
    <>
    <InputContainer>
    {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
    <Controller
      name={name}
      control={control}
      render={({ field }) =>  <InputText {...field} {...rest} />}
      />
   
    </InputContainer>
    {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
      </>
  )
}
export  {Input}