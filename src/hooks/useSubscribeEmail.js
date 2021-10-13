import { useMutation } from 'react-query'
import axios from 'axios'

export default function useSubscribeEmail() {
  return useMutation((email) =>
    axios.get(
      `https://datagir.ademe.fr/.netlify/functions/subscribeNewsletter?email=${email}`
    )
  )
}
