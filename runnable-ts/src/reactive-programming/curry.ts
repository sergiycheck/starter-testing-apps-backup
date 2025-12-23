export const curry = (fn: Function) => {
  return function curried(...args) {
    if(args.length == fn.length) {
      return fn(args)
    }else {
      return function(...args1) {
        const allArgs = [...args, ...args1];
        return fn(...allArgs)
      }
    }
  }
}
