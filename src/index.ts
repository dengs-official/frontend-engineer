import Bag from './DataStructure/Bag';

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