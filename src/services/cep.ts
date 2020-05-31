const baseUrl = 'https://viacep.com.br/ws/';

const cepService = (cep: string) => fetch(`${baseUrl}${cep}/json`).then((response) => response.json());

export default cepService;
