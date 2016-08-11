describe("function to keep repeats in array", function () {
  var not_arr = "abc";
  var no_repeat_simple = [1,2,3];
  var no_repeat_not_simple = [2, 1, 3];
  var simple_one_repeat_arr = [1, 1, 2, 3];
  var not_simple_one_repeat_arr = [1, 2, 1, 3];
  var not_simple_two_repeat_arr = [1, 2, 1, 2, 3];
  var not_simple_many_repeat_arr = [1,2,1,2,1,2,3,3,4,3,1,1,3];
  var not_simple_many_repeat_order_wrong_arr = [4,4,2,3,2,3,5,3,4,3,1,1,3];
  var got_non_integer = [1, 2,2, 5, 4, 5, 3, 1, 'one', 6, 3, 1, 'blah'];
  var empty_arr = [];

  // it("didn't get array", function () {
  //   expect(getDuplicate(not_arr)).toThrowError( "Not Array!" );
  // });

  it("didn't get array", function () {
    expect(function(){getDuplicate(not_arr);}).toThrowError( "Not Array!" );
  });

  it("got simple array with no repeats", function () {
    expect(getDuplicate(no_repeat_simple).length).toBe(0);
  });

  it("got not simple array with no repeats", function () {
    expect(getDuplicate(no_repeat_not_simple).length).toBe(0);
  });

  it("got simple array with one repeat", function () {
    expect(getDuplicate(simple_one_repeat_arr)).toEqual([1]);
  });

  it("got not simple array with one repeat", function () {
    expect(getDuplicate(not_simple_one_repeat_arr)).toEqual([1]);
  });

  it("got not simple array with two repeats", function () {
    expect(getDuplicate(not_simple_two_repeat_arr)).toEqual([1, 2]);
  });

  it("got not simple array with many repeats", function () {
    expect(getDuplicate(not_simple_many_repeat_arr)).toEqual([1, 2, 3]);
  });

  it("got not simple array with many repeats order wrong", function () {
    expect(getDuplicate(empty_arr)).toEqual([]);
  });

  it("has non-integer", function () {
    expect(function(){getDuplicate(got_non_integer);}).toThrowError( "Not all integers" );
  });

  it("got empty array", function () {
    expect(getDuplicate(not_simple_many_repeat_order_wrong_arr)).toEqual([1, 2, 3, 4]);
  });



});
