/* eslint-disable @typescript-eslint/no-explicit-any */
import FetchError from '@/utils/FetchError'
import env from '@/env'

interface IFetcherArgs {
    method: string
    url: string
    data?: object
    auth?: string
}

const fetcher = async (args: IFetcherArgs): Promise<any> => {
    const { method, url, data, auth } = args
    const headers: HeadersInit = {
        'Content-Type': 'application/json',
    }
    if (auth) {
        headers['Authorization'] = 'Bearer ' + auth
    }
    const pathUrl = env.API + url
    const response = await fetch(pathUrl, {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
    })

    const responseData = await response.json()

    if (!response.ok) {
        throw new FetchError(response.status, response.statusText, responseData ? responseData : null)
    }

    return responseData
}

export default fetcher
