import axios from '@/plugins/axios'
const key = '2ec3acdd1e9845358710e82d90e83b47'

export const getGames = (_, params) => {
  const p = params
  p.key = key
  return axios.get('games', { params: p})
    .then((res) => {
      return res
    })
  .catch(err => err.response)
}

export const getByPlatform = ({commit}, platform) => {
  commit('SET_PLATFORM', platform)
}