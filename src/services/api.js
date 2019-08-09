import axios from 'axios';
import { endpoint, masterKey } from './config';

const BASE_URL = `${endpoint}?image_type=photo&orientation=horizontal&q=`;

export const fetchData = (query = 'nature', page = 1) =>
  axios.get(`${BASE_URL}${query}&page=${page}&per_page=12&key=${masterKey}`);

export const fn = () => null;
