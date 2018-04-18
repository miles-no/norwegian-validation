import test from 'tape';

const sut = require('../');

test('Validate account numbers', (t) => {
  t.plan(2);
  const correct = sut.accountNumber('63450711014');
  const incorrect = sut.accountNumber('-1');
  t.ok(correct, 'Given a valid account number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid account number, validation should not be successful');
});
