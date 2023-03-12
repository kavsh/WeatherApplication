import { createAction } from '@reduxjs/toolkit'

export const GET_WEATHER = createAction<string | undefined>('GET_WEATHER')
export const UPDATE_WEATHER_LIST = createAction<{object} | undefined>('UPDATE_WEATHER_LIST')
export const UPDATE_ERROR = createAction<string | undefined>('UPDATE_ERROR')
