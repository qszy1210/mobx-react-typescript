function path(pathName) {
  return function(target, name, descriptor) {
      if (!target["proxy"]) {
        target["proxy"] = {}
      }
      console.log(target);
      console.log(target['outer']);

      const newFunc = (function(f) {
        if (typeof f !== 'function') return;
        return function() {
          f.apply(target, arguments)
        }
      })(descriptor.value)

      target["proxy"][pathName] = descriptor.value;
      // target["proxy"][pathName] = newFunc;
      //descriptor.value = newFunc;

      return descriptor;
  }
}



export class Base {

  constructor() {
    this.foo();
  }

  name

  age = 123;

  @path("a")
  parent() {
    console.log(this.name)
  }

  call() {
    this["proxy"]["a"].apply(this, arguments);
  }

  foo() {
    this.name = "base";
  }
}

Base["outer"] = "outer";

// export class Child extends Base{

//   foo() {
//     this.name = "child";
//   }
// }