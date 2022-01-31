import { Box, Flex, ButtonMenuItem, ButtonMenu, BaseButtonProps, Colors, Input, Toggle, Button } from '@pancakeswap/uikit'
import styled, { DefaultTheme } from 'styled-components'

interface ThemedButtonProps extends BaseButtonProps {
  theme: DefaultTheme
}

export const StyledSwapContainer = styled(Flex)<{ $isChartExpanded: boolean }>`
  flex-shrink: 0;
  height: fit-content;
  padding: 0 24px;

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: 0 40px;
  }

  ${({ theme }) => theme.mediaQueries.xxl} {
    ${({ $isChartExpanded }) => ($isChartExpanded ? 'padding: 0 120px' : 'padding: 0 40px')};
  }
`

export const StyledInputCurrencyWrapper = styled(Box)`
  width: 328px;
`
export const CustomInput = styled(Input)`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  :focus:not(:disabled) {
    box-shadow: 0px 0px 0px 1px rgba(116, 236, 101, 0.31), 0px 0px 0px 3px rgba(116, 236, 101, 0.51);
  }
`

export const CustomButton = styled(ButtonMenuItem)<{ isActive }>`
  background-color: ${({ isActive }) => (isActive ? 'rgba(116, 236, 101, 1)' : 'black')};
  color: ${({ isActive }) => (isActive ? 'rgba(1, 10, 0, 1)' : 'rgba(255, 255, 255, 0.2)')};
  border-radius: 0px;
  box-shadow: none;
  border: ${({ isActive }) => (isActive ? '1px solid #74ec65' : '1px solid transparent')};
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    color: white;
    box-shadow: none;
  }
`

export const CustomButton2 = styled(ButtonMenuItem)`
  background-color: rgba(116, 236, 101, 1);
  color: rgba(1, 10, 0, 1);
  border-radius: 8px;
  box-shadow: none;
  border: '1px solid #74ec65';
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    color: white;
    box-shadow: none;
  }
`

export const CustomButton3 = styled(ButtonMenuItem)`
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  box-shadow: none;
  border: '1px solid transparent';
  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {
    color: white;
    background-color: rgba(116, 236, 101, 0.8);
    box-shadow: none;
  }
`

export const CustomButtonMenu = styled(ButtonMenu)`
  background-color: #0e0f15;
  border: 2px solid #74ec65;
  border-radius: 4px;
`

export const CustomButtonCancel = styled(Button)<{isActive}>`
  background-color: black;
  color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  border: 1px solid #74ec65;
  box-shadow: none;
`
