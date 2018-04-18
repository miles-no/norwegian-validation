import test from 'tape';

const sut = require('../');

test('Validate birth numbers', (t) => {
  t.plan(2);
  const correct = sut.birthNumber('25068136620');
  const incorrect = sut.birthNumber('-1');
  t.ok(correct, 'Given a valid birth number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid birth number, validation should not be successful');
});
