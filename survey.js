const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Whats your NickName? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('Whats an activity you like doing? ', (answer) => {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for your valuable feedback: ${answer}`);

      rl.question('Which meal is your favourite ', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);

        rl.question('Whats your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for your valuable feedback: ${answer}`);

          rl.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              console.log(`Thank you for your valuable feedback: ${answer}`);


  rl.close();
});
  rl.close();
});
  rl.close();
});
  rl.close();
});
  rl.close();
});
  rl.close();
});
  rl.close();
});