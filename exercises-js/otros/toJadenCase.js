const text = "hello world";

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((i) => i.replace(i[0], i[0].toUpperCase()))
    .join(" ");
};

text.toJadenCase();