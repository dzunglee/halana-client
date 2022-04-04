import axios, { AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import env from './env'
import store from 'store'
import router from 'router'
import { ElMessageBox } from 'element-plus'
import { AUTH_TOKEN } from './constants'
import { getAuth } from 'firebase/auth'

// axios
axios.defaults.headers.post['Content-Type'] = 'application/json'

export interface ServiceOptions {
  namespace?: string
  service?: 'api' | 'backend'
}

export default class Service {
  private axios: AxiosInstance

  private headers: any
  private defaultOptions: ServiceOptions = {
    namespace: undefined,
    service: undefined,
  }
  private token: string | null

  /**
   * Creates an instance of Service.
   *
   * @memberOf Service
   */
  constructor(options?: ServiceOptions) {
    this.defaultOptions = { ...this.defaultOptions, ...options }
    const { namespace = null, service = 'api' } = this.defaultOptions

    const services = {
      api: {
        endpointEnvKey: 'VITE_API_SERVICE_ENDPOINT',
      },
      backend: {
        endpointEnvKey: 'VITE_BACKEND_SERVICE_ENDPOINT',
      },
    }

    // Accept */*
    axios.defaults.headers.common.Accept = '*/*'
    const endpoint = env(services[service].endpointEnvKey, '')

    const baseURL = endpoint + (namespace ? `/${namespace}/` : '/')

    this.token = localStorage.getItem(AUTH_TOKEN)

    const headers = {
      // 'Access-Control-Allow-Origin': '*',
      'token-source': 'firebase',
      Authorization: this.token ? `Bearer ${this.token}` : '',
    }

    this.axios = axios.create({
      baseURL,
      responseType: 'json',
      headers,
    })
  }

  public withHeader(headers: any): Service {
    this.headers = headers
    return this
  }

  public toQueryString(obj: any) {
    const parts = []
    for (const i in obj) {
      if (obj.hasOwnProperty(i)) {
        parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
      }
    }
    return parts.join('&')
  }

  /**
   * Call a service action via REST API
   *
   * @param {any} action  name of action
   * @param {any} params  parameters to request
   * @returns  {Promise}
   *
   * @memberOf Service
   */
  public async rest(
    action: string,
    params?: any,
    options = {
      headers: {},
      method: 'post',
    },
  ) {
    const { headers } = options
    try {
      const opts: AxiosRequestConfig = {
        url: action,
        method: options.method as Method,
        data: params,
        headers: {
          ...(this.headers || {}),
          ...headers,
        },
      }
      const response = await this.axios.request(opts)
      return response.data
    } catch (err: any) {
      const { response } = err
      if (response.status === 401) {
        ElMessageBox.alert('Token has been expired', 'Warning', {
          confirmButtonText: 'OK',
          showClose: false,
          callback: () => {
            const auth = getAuth()
            auth.signOut().then(() => {
              store.commit('auth/SIGN_OUT')
              router.push('/login')
              router.go(0)
            })
          },
        })
      }
      throw err.response
    }
  }

  public postFormData(action: string, data: any) {
    const headers = {
      'Content-Type': 'multipart/form-data',
    }
    return this.rest(action, data, {
      method: 'post',
      headers,
    })
  }

  public get(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}?${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'get',
        headers,
      },
    )
  }

  public delete(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    const query = this.toQueryString(params)
    const path = query ? `${action}?${query}` : action
    return this.rest(
      path,
      {},
      {
        method: 'delete',
        headers,
      },
    )
  }

  public post(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'post',
      headers,
    })
  }

  public put(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'put',
      headers,
    })
  }

  public patch(action: string, params?: any, options: any = {}) {
    const { headers = {} } = options
    return this.rest(action, params, {
      method: 'patch',
      headers,
    })
  }
}
