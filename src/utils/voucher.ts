import { VoucherTypes } from 'core/constants'

export const formatVoucherType = (code: string) => {
  return VoucherTypes[code]?.name ?? ''
}

export const formatVoucherAmountByType = (code: string, amount: string) => {
  return (
    Number(amount).toLocaleString() + ' ' + (VoucherTypes[code]?.suffix ?? '')
  )
}
