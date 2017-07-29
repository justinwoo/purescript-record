"use strict";

exports.unsafeGetFn = function(label, rec) {
  return rec[label];
};

exports.unsafeSetFn = function(label, value, rec) {
  var copy = {};
  for (var key in rec) {
    if ({}.hasOwnProperty.call(rec, key)) {
      copy[key] = rec[key];
    }
  }
  copy[label] = value;
  return copy;
};

exports.unsafeDeleteFn = function(label, rec) {
  var copy = {};
  for (var key in rec) {
    if (key !== label && {}.hasOwnProperty.call(rec, key)) {
      copy[key] = rec[key];
    }
  }
  return copy;
};

exports.unsafeUnionFn = function(r1, r2) {
  var union = {};
  for (var key in r2) {
    if ({}.hasOwnProperty.call(r2, key)) {
      union[key] = r2[key];
    }
  }
  for (var key in r1) {
    if ({}.hasOwnProperty.call(r1, key)) {
      union[key] = r1[key];
    }
  }
  return union;
}