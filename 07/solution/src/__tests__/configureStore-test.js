import test from 'ava';
import { logger, promise } from '../configureStore';
import sinon from 'sinon';

test('logger middleware logs actions as they are dispatched', t => {
  sinon.stub(console, 'log');
  const originalGroup = console.group;
  const originalGroupEnd = console.groupEnd;
  console.group = () => {};
  console.groupEnd = () => {};
  const middlewareAPI = {
    getState: sinon.spy(),
  };
  const next = sinon.spy();
  const dispatch = logger(middlewareAPI)(next);

  const A = { type: 'A' };
  const B = { type: 'B' };
  const C = { type: 'C' };

  dispatch(A);
  dispatch(B);
  dispatch(C);

  t.true(console.log.called);
  t.true(middlewareAPI.getState.called);
  t.deepEqual(next.args.map(a => a[0]), [A, B, C]);

  console.log.restore();
  console.group = originalGroup;
  console.groupEnd = originalGroupEnd;
});

test.cb('promise middleware dispatches resolved value of promise', t => {
  const next = sinon.spy();
  const dispatch = promise()(next);
  const action = { type: 'SOME_TYPE' };
  dispatch(Promise.resolve(action)).then(() => {
    dispatch(action);
    t.is(next.args[0][0], action);
    t.is(next.args[1][0], action);
    t.end();
  });
});
