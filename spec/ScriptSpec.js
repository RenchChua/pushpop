describe('panda',function(){
  it('is happy',function(){
    expect(panda).toBe('happy');
  });
});

describe('Sun rises',function(){
  it('always comes from the east',function(){
    expect(sunrise_from_east).toBe(true);
    expect(sunrise_from_west).toBe(false);
  });
});

describe('X and Y',function(){
  it('is the same',function(){
    expect(x).toBe(y);
  });
});

describe('foo and bar',function(){
  it('is not an equal object',function(){
    expect(foo).not.toEqual(bar);
  });
});

describe('The phrase',function(){
  it('has word "cali" in it',function(){
    expect(phrase).toMatch(/cali/);
  });
});

describe('The calculation',function(){
  it('will return infinity number',function(){
    expect(calculation).toBeGreaterThan(Infinity);
  });
});

describe("The do this's inner function", function() {
  it("should not call the callBack if the first arg is false", function() {
    doThis(false, function() {
      fail("Callback has been called");
    });
  });
});

describe("Person", function() {
  it("needs at least have at least name, age and gender", function() {
    var new_person = new Person();
    var person_keys = Object.keys(new_person).sort();

    expect(person_keys).toEqual(jasmine.arrayContaining(['name', 'age', 'gender']));
  });
});

describe('getName',function(){
  var new_person = new Person('test');

  it('is called and returned its name',function(){
    spyOn(new_person, 'getName');
    new_person.getName();
    expect(new_person.getName).toHaveBeenCalled();
    expect(new_person.name).toBe('test');
  });
});

describe('setAge',function(){
  var foo;

  beforeEach(function() {
    foo = new Person('new', 25);
    spyOn(foo, 'setAge').and.callThrough();
    foo.setAge(2);
  });

  it('is called',function(){
    expect(foo.setAge).toHaveBeenCalled();
  });

  it('changes foo ages', function() {
    expect(foo.age).toBe(27);
  })

  it('was expecting a number in its argument', function() {
    expect(foo.setAge).toHaveBeenCalledWith(jasmine.any(Number));
  })
});

describe('getAge',function(){
  var foo, result;

  beforeEach(function() {
    foo = new Person('new', 25);
    spyOn(foo, 'getAge').and.callThrough();
    result = foo.getAge();
  });

  it('is called',function(){
    expect(foo.getAge).toHaveBeenCalled();
  });

  it('returns a number', function() {
    expect(result).toEqual(jasmine.any(Number));
  })
});
