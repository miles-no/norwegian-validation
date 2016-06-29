'use strict';
const test = require('tape');
const sut = require('../');

test('Validate organization numbers', (t) => {
  t.plan(2);
  const correct = sut.organizationNumber('989568078');
  const incorrect = sut.organizationNumber('-1');
  t.ok(correct, 'Given a valid organization number, validation should be successful');
  t.notOk(incorrect, 'Given an invalid organization number, validation should not be successful');
});
