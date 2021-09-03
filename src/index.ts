import Counter from './Counter';
import Bag from './DataStructure/Bag';

const heads = new Counter('heads');
heads.increment();
const bags = new Bag<number>();
bags.add(1);
bags.add(2);
bags.add(3);
bags.add(4);
for (const item of bags) {
  if (item > 3) {
    break;
  }
  console.log('first ' + item);
}
for (const item of bags) {
  console.log('second ' + item);
}