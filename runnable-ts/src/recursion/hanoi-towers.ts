export function hanoiRecursion(n, source, target, auxiliary) {
  console.log('n = ', n, ' source = ', source, ' target = ', target, 'auxiliary = ', auxiliary);

  if (n === 0) return;

  hanoiRecursion(n - 1, source, auxiliary, target);

  console.log('\n');
  console.log(`Move disk ${n} from source = ${source} to target = ${target}`);
  console.log('\n');

  hanoiRecursion(n - 1, auxiliary, target, source);
}