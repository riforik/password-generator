const GEN_OPTIONS = {
    "letters_upper": 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    "letters_lower": 'abcdefghijklmnopqrstuvwxyz',
    "numbers": '0123456789',
    "symbols": '!@#$%^&*()_+{}:><[];'
};
const OPTION_COUNT = "4";


function getOptions() {
    let password_options = {
        "letters_upper": document.querySelector('#uppercase').checked,
        "letters_lower": document.querySelector('#lowercase').checked,
        "numbers": document.querySelector('#numbers').checked,
        "symbols": document.querySelector('#symbols').checked,
        "length": document.querySelector('#length').value
    };

    let characters = '';
    let password_options_consts = Object.values(GEN_OPTIONS);
    let password_options_values = Object.values(password_options);

    for (let i = 0; i < OPTION_COUNT; i++) {
        if (password_options_values[i] === true) {
            characters += `${password_options_consts[i]}`;
        }
    }
    generatePassword(password_options, characters);
}
function generatePassword(password_options, characters) {
    let result = '';
    let charactersLength = characters.length;
    for ( var j = 0; j < password_options.length; j++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   document.querySelector("#password").textContent = `${result}`;
   console.log(result);
}