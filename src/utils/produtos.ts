import notebook from '../assets/notebook.jpg'
import smartphone from '../assets/smartphone.jpg'
import foneDeOuvido from '../assets/fone-de-ouvido.jpg'
import monitor from '../assets/monitor.jpg'
import tecladoMecanico from '../assets/teclado-mecanico.jpg'

export interface Item {
  id: number;
  img?: string;
  nome: string;
  preco: number;
  descricao: string;
  quantidade?: number;
}

export const itemsParaCompra: Item[] = [
  {
    id: 1,
    img: notebook,
    nome: 'Notebook',
    preco: 3500.00,
    descricao: 'Notebook de alta performance com 16GB de RAM e 512GB SSD.'
  },
  {
    id: 2,
    img: smartphone,
    nome: 'Smartphone',
    preco: 2500.00,
    descricao: 'Smartphone com tela de 6.5 polegadas, 128GB de armazenamento e câmera de 48MP.'
  },
  {
    id: 3,
    img: foneDeOuvido,
    nome: 'Fone de Ouvido',
    preco: 300.00,
    descricao: 'Fone de ouvido sem fio com cancelamento de ruído ativo.'
  },
  {
    id: 4,
    img: monitor,
    nome: 'Monitor',
    preco: 1200.00,
    descricao: 'Monitor de 27 polegadas com resolução 4K e tecnologia IPS.'
  },
  {
    id: 5,
    img: tecladoMecanico,
    nome: 'Teclado Mecânico',
    preco: 450.00,
    descricao: 'Teclado mecânico com switches Cherry MX Blue e iluminação RGB.'
  },
];