const { queryString, parse } = require('./queryString');

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Gildo',
      profession: 'developer',
    };
    expect(queryString(obj)).toBe('name=Gildo&profession=developer');
  });

  it('should create a valid query string even when an array is passes as value', () => {
    const obj = {
      name: 'Gildo',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Gildo&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Gildo',
      abilities: {
        first: 'JS',
        second: 'TDD',
      },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Gildo&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Gildo',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value pair to object', () => {
    const qs = 'name=Gildo';

    expect(parse(qs)).toEqual({
      name: 'Gildo',
    });
  });

  it('should convert a query string to an object taking care of comma separared values', () => {
    const qs = 'name=Gildo&abilities=JS,TDD';

    expect(parse(qs)).toEqual({
      name: 'Gildo',
      abilities: ['JS', 'TDD'],
    });
  });
});
