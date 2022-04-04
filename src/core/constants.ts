import env from 'core/env'

export const AUTH_TOKEN = 'app/token'
export const BACKEND_ENDPOINT = env('VITE_BACKEND_SERVICE_ENDPOINT', '')

export const VoucherTypes: any = {
  MONEY_COUP: {
    name: 'Khuyến mãi bằng tiền',
    suffix: 'VND',
  },
  PERCENT_COUP: {
    name: 'Khuyến mãi bằng %',
    suffix: '%',
  },
}
