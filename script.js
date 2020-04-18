// Assignment Code
var lowercase = ['a', 'b', 'c','d', 'e', 'f', 'g',  'h', 'i', 'j', 'k', 'l', 'm', 'n',  'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
    uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    specialCharacter = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    generateBtn = document.querySelector("#generate");
    passwordText = document.querySelector("#password");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    
    // Prompt for length of password petween 8 and 128
    var passwordLength = 0;
        
    function isPasswordLengthCorrect (passwordLength) {

        return passwordLength >= 8 && passwordLength <= 128;

    }

    while (! isPasswordLengthCorrect (passwordLength)) {

        passwordLength = parseInt(prompt ("Provide a password length between 8 and 128"));

    }


    // Lower case, uppercase, numeric, and/or special character

    var options = {
        "passwordLength": passwordLength,
        "lowercase": confirm ("Would you like lowercase letters in your password?"),
        "uppercase": confirm ("Would you like uppercase letters in your password?"),
        "numeric": confirm ("Would you like numbers in your password?"),
        "specialCharacter": confirm ("Would you like special characters in your password?")
    };
    
    // Generate password
    passwordText.value = generatePassword(options);
    
}

function generatePassword (options) {

    var possibleCharacters = [],
        requiredCharacters = [];

    // If user chooses lowercase
    if (options.lowercase) {

        // Merge lowercase to list of usable characters
        possibleCharacters = possibleCharacters.concat (lowercase);

        requiredCharacters.push (lowercase[Math.floor(Math.random() * lowercase.length )]);

    }

    // If user chooses uppercase
    if (options.uppercase) {

        // Merge uppercase to list of usable characters
        possibleCharacters = possibleCharacters.concat (uppercase);

        requiredCharacters.push (uppercase[Math.floor(Math.random() * uppercase.length )]);
    }

    // If user chooses numeric
    if (options.numeric) {

        // Merge numbers to list of usable characters
        possibleCharacters = possibleCharacters.concat (numbers);

        requiredCharacters.push (numbers[Math.floor(Math.random() * numbers.length )]);
    }

    // If user chooses speial character
    if (options.specialCharacter) {

        // Merge special character to list of usable characters
        possibleCharacters = possibleCharacters.concat (specialCharacter);

        requiredCharacters.push (specialCharacter[Math.floor(Math.random() * specialCharacter.length )]);
    }

    // console.log (possibleCharacters);

    var password = '';

    for (var i = 0; i < options.passwordLength; i++) {

        if ( requiredCharacters[i]) {

            password += requiredCharacters[i];

        } else {
            
            password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length )];
        }
             
    }

    return password;
    
}


