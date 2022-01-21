import axios from 'axios';

const baseURL = 'https://api.datos.gob.mx/v1'
const CondicionesAtmosferiacasApi = axios.create({baseURL});

export default CondicionesAtmosferiacasApi;