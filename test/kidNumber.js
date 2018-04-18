import test from 'tape';

const sut = require('../');

test('Validate kid numbers', (t) => {
  t.plan(3);
  const correct = sut.kidNumber('270236900527');
  const incorrect = sut.kidNumber('-270236900527');
  const chars = sut.kidNumber('dsfdfs');
  t.ok(correct, 'Given a valid kid number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid kid number, validation should not be successful');
  t.notOk(chars, 'Kid number should be a number and chars should not be successful');
});
