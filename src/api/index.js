import { get, post } from '../utils/http';

import { url } from './url.config'

export const register = (params) => post(url.register, params);

export const login = (params) => post(url.login, params);

export const home = () => get(url.home);

export const forget = (params) => post(url.forget, params);

export const game = (params) => post(url.game, params);