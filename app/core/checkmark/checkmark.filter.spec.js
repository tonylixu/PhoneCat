'use strict';

describe('checkmark', function() {

  // Loads the core module which contains the checkmark filter into the injector
  beforeEach(module('core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmarkFilter) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    })
  );
});