console.log(Array.from('foo'));

const set=new Set(["foo",'bar','baz','foo']);
console.log(Array.from(set));

const mapper = new Map([['1', 'a'], ['2', 'b']]);
console.log(Array.from(mapper.keys()));