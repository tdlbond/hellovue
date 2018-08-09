import axios from 'axios';

export default {
  axiosGet: (url) => {
    return axios.get(url)
  }
}