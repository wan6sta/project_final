import {BuildOptions} from './types/config'
import {Configuration} from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): Configuration {

  const {port} = options

  return {
    port,
    open: true
  }
}