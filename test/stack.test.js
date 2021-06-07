// CODE TO TEST
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  };

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  get pop() {
    let value = this.items[this.top];
    delete this.items[this.top];
    this.top--;
    return value;
  }
}


// JEST TESTS
describe('My Stack', () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  })

  it('it created empty', () => {
    expect(stack.top).toBe(-1);       // Referencial equality
    expect(stack.items).toEqual({});  // Value equality
  })

  it('can push onto the stack', () => {
    stack.push("🥑");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🥑")
  })

  it('can pop off a value form the stack', () => {
    stack.push("🥑");
    expect(stack.top).toBe(0);
    stack.push("🍌");
    expect(stack.top).toBe(1);
    let value = stack.pop;
    expect(value).toBe("🍌");
  });

});
