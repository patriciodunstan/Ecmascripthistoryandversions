const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Bannana Kiwi, Apple, Orange, etc, etc, etc';

for (const Match of fruit.matchAll(regex)) {
    console.log(Match);
}

/* output
[
  'Apple',
  'Apple',
  index: 0,
  input: 'Apple, Bannana Kiwi, Apple, Orange, etc, etc, etc',
  groups: undefined
]
[
  'Apple',
  'Apple',
  index: 21,
  input: 'Apple, Bannana Kiwi, Apple, Orange, etc, etc, etc',
  groups: undefined
]
genera un array para mostrar las veces que se repite y el indice donde aparece la palabra*/
