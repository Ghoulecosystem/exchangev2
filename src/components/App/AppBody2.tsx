import React from 'react'
import styled from 'styled-components'
import { Card } from '@pancakeswap/uikit'

export const BodyWrapper = styled(Card)`
  border-radius: 8px;
  max-width: 436px;
  width: 100%;
  z-index: 1;
  background: transparent;
  border: 1px solid #74EC65;
`

/**
 * The styled container element that wraps the content of most pages and the tabs.
 */
export default function AppBody2({ children }: { children: React.ReactNode }) {
  return <BodyWrapper>{children}</BodyWrapper>
}
