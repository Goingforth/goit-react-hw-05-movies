import axios from 'axios';

export default async function getData(options) {
  try {
    const data = await axios.request(options).then(response => {
      console.log(response.data);
      return response.data;
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
