 // --- The Logic ---
    const MorseMap = {
        'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 
        'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 
        'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 
        'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 
        'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', 
        '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', 
        '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', ' ': '/'
    };

    const EnglishMap = Object.fromEntries(Object.entries(MorseMap).map(([char, code]) => [code, char]));

    function toMorse(text) {
        return text.toUpperCase().split('').map(char => {
            const code = MorseMap[char];
            return code
        }).join(' ').trim();
    }

    function toEnglish(morse) {
        return morse.trim().split(' / ').map(word => {
            return word.split(' ').map((code, i) => {
                let char = EnglishMap[code] || '';
                return i === 0 ? char.toUpperCase() : char.toLowerCase();
            }).join('');
        }).join(' ');
    }

    // --- DOM Interaction ---
    const englishArea = document.getElementById('englishInput');
    const morseArea = document.getElementById('morseInput');

    // Translate English -> Morse as you type
    englishArea.addEventListener('input', () => {
        morseArea.value = toMorse(englishArea.value);
    });

    // Translate Morse -> English as you type
    morseArea.addEventListener('input', () => {
        englishArea.value = toEnglish(morseArea.value);
    });