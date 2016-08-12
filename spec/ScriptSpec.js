describe("pushpop function", function () {
  it("get simple case", function () {
    expect(pushPop([1,2],['a'],0)).toEqual([1,2,'a']);
  });

  it("number of pop must be greater than 0", function () {
    expect(pushPop([1,2],['a'],-1)).toEqual([1,2,'a']);
  });

  it("number of pop must be integer", function () {
    expect(pushPop([1,2],['a'], 'a')).toEqual([1,2,'a']);
  });

  it("push array can be empty", function () {
    expect(pushPop([1,2],[], 1)).toEqual([1]);
  });

  it("initial array can be empty", function () {
    expect(pushPop([],[1, 2], 1)).toEqual([1]);
  });

  it("number of pop must be greater than 0", function () {
    expect(pushPop([1,2],['a'],-1.5)).toEqual([1,2,'a']);
  });

  it("must have initialArr and pushArr are arrays", function () {
    expect(pushPop('something',true,-1.5)).toEqual([]);
  });

  it("must have initialArr and pushArr are arrays", function () {
    expect(pushPop('something',[1,2],0)).toEqual([1,2]);
  });


});
