import { TranslateFromJsonPipe } from './translate-from-json.pipe';

describe('TranslateFromJsonPipe', () => {
  const pipe = new TranslateFromJsonPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return correct translation from json repository if value exists', () => {
    expect(pipe.transform('favorites')).toEqual('Favorites');
  })

  it('should return empty string if value does not exist', () => {
    expect(pipe.transform('test test')).toEqual('');
  })
});
