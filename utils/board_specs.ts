import type { BoardSpecs } from '../types/board_specs';

const specs: BoardSpecs[] = [
  {
    label: 'Tamanho da prancha',
    slot: 'board-size',
    defaultOpen: true,
  },
  {
    label: 'Construção',
    slot: 'board-construction',
  },
  {
    label: 'Pintura',
    slot: 'board-paint',
  },
  {
    label: 'Dados adicionais',
    slot: 'user-info',
  },
]

export default specs;

