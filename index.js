// Iteration 1: Names and Input

let hacker1 = "Pedro";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Daniel";

console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  consolo.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

let upper = hacker1.toUpperCase();
let array = [...upper];
let resultado = [];

for (let i = 0; i < hacker1.length; i++) {
  resultado.push(array[i]);
}

let final = resultado.join(" ");

console.log(final);

let inverso = [];
for (let j = hacker2.length; j != 0; j--) {
  inverso.push(hacker2[j - 1]);
}
let nomeInverso = inverso.join("");

console.log(nomeInverso);

//3.1

let arr = [hacker1, hacker2];

arr.sort();

if (arr[0] === arr[1]) {
  console.log("What?! You both have the same name?");
} else if (arr[0] === hacker1) {
  console.log("The driver's name goes first");
} else if (arr[1] === hacker1) {
  console.log("Yo, the navigator goes first definitely");
}

// Extra 1

let longText1 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin felis augue, sit amet fermentum ipsum tempus in. Cras eu lacus ac nibh pretium vulputate. Suspendisse nec erat massa. Donec tempor tellus sed felis dapibus, non tempus velit aliquet. Etiam varius sapien sit amet ante suscipit, vitae egestas quam fermentum. Cras mollis ex id dolor rutrum, a finibus lacus hendrerit. Quisque blandit, ante non porta convallis, tellus massa hendrerit magna, in porta tortor justo et ipsum. Nunc rutrum malesuada leo vel pharetra. Nullam felis risus, suscipit ac dolor eget, cursus cursus turpis. Aliquam nec aliquam odio. In convallis augue massa. Aliquam et tortor et ipsum cursus mollis. Proin nunc erat, rutrum sed dictum sed, aliquet in sem. Ut porta lorem in tellus mattis porttitor. Duis aliquam feugiat blandit. Cras eu viverra augue. Nullam lobortis tincidunt leo, sit amet elementum mi bibendum ut. Ut malesuada, dui quis venenatis varius, leo eros sollicitudin nisl, eu viverra ligula lorem ac ante. Praesent vitae interdum erat, in tempor lectus. Integer id magna nec turpis suscipit suscipit molestie vel ante. Curabitur ac libero at erat pellentesque ultrices nec et metus. Fusce tempor ex at arcu finibus consequat. Etiam venenatis pellentesque finibus. Integer augue leo, placerat non ante a, faucibus faucibus velit. Aenean ullamcorper ut metus quis varius. Morbi id ante magna. Morbi suscipit sed nunc vitae pretium. Suspendisse potenti. In blandit condimentum augue in pretium. Morbi dui dui, efficitur et tempor et, commodo sed nunc. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet lectus sit amet placerat semper. Integer massa turpis, tincidunt eu enim et, semper euismod arcu. Vestibulum dapibus, ante ac dignissim volutpat, ligula justo gravida metus, nec dictum nulla libero at tellus. Ut eros quam, tristique ut lacinia sit amet, convallis quis dui.";

let palavrasTotais1 = longText1.split(" ");

console.log(`O total de palavras do texto é de ${palavrasTotais1.length}`);
