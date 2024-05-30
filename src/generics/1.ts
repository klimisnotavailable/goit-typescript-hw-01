import axios from 'axios';

interface Data {
  id: number;
  name: string;
}

async function fetchData(url: string): Promise<Data> {
  try {
    const response = await axios.get<Data>(url);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}