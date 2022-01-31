import React from 'react'
import { Flex, Button, Text } from '@pancakeswap/uikit'
import QuestionHelper from 'components/QuestionHelper'
import { useTranslation } from 'contexts/Localization'
import { GAS_PRICE_GWEI, GAS_PRICE } from 'state/user/hooks/helpers'
import { useGasPriceManager } from 'state/user/hooks'
import { CustomButton, CustomButton2, CustomButton3 } from 'views/Swap/styles'

const GasSettings = () => {
  const { t } = useTranslation()
  const [gasPrice, setGasPrice] = useGasPriceManager()

  return (
    <Flex flexDirection="column">
      <Flex mb="12px" alignItems="center">
        <Text>{t('Default Transaction Speed (GWEI)')}</Text>
        <QuestionHelper
          text={t(
            'Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees',
          )}
          placement="top-start"
          ml="4px"
        />
      </Flex>
      <Flex flexWrap="wrap">
        {gasPrice === GAS_PRICE_GWEI.default ? (
          <CustomButton2
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.default)
            }}
          >
            {t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })}
          </CustomButton2>
        ) : (
          <CustomButton3
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.default)
            }}
          >
            {t('Standard (%gasPrice%)', { gasPrice: GAS_PRICE.default })}
          </CustomButton3>
        )}
        {gasPrice === GAS_PRICE_GWEI.fast ? (
          <CustomButton2
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.fast)
            }}
          >
            {t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })}
          </CustomButton2>
        ) : (
          <CustomButton3
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.fast)
            }}
          >
            {t('Fast (%gasPrice%)', { gasPrice: GAS_PRICE.fast })}
          </CustomButton3>
        )}

        {gasPrice === GAS_PRICE_GWEI.instant ? (
          <CustomButton2
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.instant)
            }}
          >
            {t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })}
          </CustomButton2>
        ) : (
          <CustomButton3
            mt="4px"
            mr="4px"
            scale="sm"
            onClick={() => {
              setGasPrice(GAS_PRICE_GWEI.instant)
            }}
          >
            {t('Instant (%gasPrice%)', { gasPrice: GAS_PRICE.instant })}
          </CustomButton3>
        )}
      </Flex>
    </Flex>
  )
}

export default GasSettings
