import { Sub, SubsResponse } from '../types'

export const mapFromApiToSubs = (apiResponse: SubsResponse): Array<Sub> => {
  return apiResponse.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi

    return {
      nick,
      subMonths,
      avatar,
      description,
    }
  })
}
