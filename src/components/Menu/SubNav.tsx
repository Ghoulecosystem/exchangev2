import React from 'react'
import styled from 'styled-components'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useRouter } from 'next/router'
import Link from 'next/link'

const StyledNav = styled.nav`
  margin-bottom: 0px;
`

const CustomButtonMenu = styled(ButtonMenu)`
  background: #090a10;
  border: 0;
`


const getActiveIndex = (pathname: string): number => {
  if (
    pathname.includes('/pool') ||
    // pathname.includes('/create') ||
    // pathname.includes('/add') ||
    // pathname.includes('/remove') ||
    // pathname.includes('/find') ||
    pathname.includes('/liquidity')
  ) {
    return 1
  }
  return 0
}

const Nav = () => {
  const { pathname } = useRouter()
  const { t } = useTranslation()
  return (
    <StyledNav>
      <CustomButtonMenu activeIndex={getActiveIndex(pathname)} scale="sm" variant="subtle">
        <Link href="/swap" passHref>
          <ButtonMenuItem id="swap-nav-link" as="a" style={{background: '#090a10', color: 'white'}}>
            {t('Swap')}
          </ButtonMenuItem>
        </Link>
        <Link href="/pool" passHref>
          <ButtonMenuItem id="pool-nav-link" as="a" style={{background: '#090a10', color: 'white'}}>
            {t('Liquidity')}
          </ButtonMenuItem>
        </Link>
      </CustomButtonMenu>
    </StyledNav>
  )
}

export default Nav
