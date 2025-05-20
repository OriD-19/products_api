import { Producto } from './producto.entity';

describe('ProductoEntity', () => {
  it('should be defined', () => {
    expect(new Producto()).toBeDefined();
  });
});
