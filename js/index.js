//animated text
window.onload = () => {
    const textList = ['v̷̨͕̂o̸̧̭͑ỉ̷̡̳͋d̷̲̊̒', 'v̷͉̠̐͐̓ͅo̴̧̟̬͒͝i̸̺̜͆̂̕d̷̲̗͛̈́̋͜', 'v̴͚̣̉ǒ̶̬̜̈́ī̴͎͠d̴̩̒', 'v̶̝̦̜̈́ŏ̴̼̣͆͂͜ḯ̶̝̼̪̰͛d̷̨̛', 'v̶̟͆o̶̧̐i̶͖̐d̸͖́', 'v̵̊͜ǫ̵͍̆i̵̙͚̎d̷͙̎', 'v̶̘̉ǒ̴̩ì̸̱d̷͈͗', 'v̸o̸i̴d̷', 'v̴̨͒̚ỏ̶̰̅͜i̸̼̺͒d̷̼͆', 'v̶̺̚ò̷̯ỉ̵̻d̶̬̕', 'v̶͈̳́o̴̱͖̍i̵̘̔d̶͖͋', 'v̸̘̓o̸͇̎i̶͍͑d̶̻́', 'v̴̖̟̓̾ǫ̷͚͐i̶̘̕̕d̴͕̀'];
    let index = 0;
    let count = 0;
    const intervalId = setInterval(() => {
        index = (index + 1) % textList.length;
        document.getElementById('text').innerHTML = textList[index];
        count++;
        if (count === 15) {
            clearInterval(intervalId);
        }
    }, 50);
};

//audio player
const audio = document.querySelector('#player');
const volumeControl = document.querySelector('#volume');

//volume slider
volumeControl.addEventListener('input', () => {
audio.volume = volumeControl.value;
});
const player = document.getElementById('player');
player.volume = 0.1;