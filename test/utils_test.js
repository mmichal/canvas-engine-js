
"use strict";

test("utils - clone", function () {
  var intValue = 10;
  deepEqual(utils.clone(intValue), 10);

  var stringValue = "test";
  deepEqual(utils.clone(stringValue), "test");

  var objectValue = {
    test: 123,
    a: "abc"
  }

  equal(
    utils.clone(objectValue).test,
    objectValue.test
  );
  equal(
    utils.clone(objectValue).a,
    objectValue.a
  );
});

test("utils - extend", function () {
  var object = {
    test: 123,
    a: "abc"
  }

  var extension = {
    a: "abcd",
    test2: "abcde"
  }

  utils.extend(object, extension);

  equal(
    object.test,
    123
  );

  equal(
    object.a,
    "abcd"
  );

  equal(
    object.test2,
    "abcde"
  );
});

test("utils - svg2Model", function () {

});

