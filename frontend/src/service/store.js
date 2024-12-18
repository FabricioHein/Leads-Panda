import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu-backend.com/api'  // Substitua pelo URL do seu backend
});

// Simulando a resposta da API para obter o layout
export const getLayout = () => {
  return new Promise((resolve) => {
    resolve({
      data: '<div><p>Layout carregado do backend</p></div>'
    });
  });
};

// Simulando a resposta da API para obter os produtos
export const getProducts = () => {
  return new Promise((resolve) => {
    resolve({
      data: [
        {
          id: 1,
          name: 'Produto 1',
          description: 'Descrição do Produto 1',
          price: 100,
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          name: 'Produto 2',
          description: 'Descrição do Produto 2',
          price: 150,
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          name: 'Produto 3',
          description: 'Descrição do Produto 3',
          price: 200,
          image: 'https://via.placeholder.com/150'
        }
      ]
    });
  });
};
