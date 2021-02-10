module.exports = function toReadable (num) {
    let numbers = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine','', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['','ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
    if (num < 10 || (num > 10 && num < 20)) {
        return numbers[num];
    } else if (num >= 10 && num < 100) {
        let d = String(num).split('');
  
        if (d[1] === '0') {
            return dozens[d[0]];
        } else if (d[1] !== '0') {
            return `${dozens[d[0]]} ${numbers[d[1]]}`;
        }
    } else if (num >= 100) {
        let h = String(num).split('');
        let sH = String(num).slice(1,3);

        if (h[1] === '0' && h[2] === '0') {
            return `${numbers[h[0]]} hundred`;
        } else if (h[1] === '0' && h[2] !== '0') {
            return `${numbers[h[0]]} hundred ${numbers[h[2]]}`;
        } else if (h[1] !== '0' && h[2] === '0') {
            return `${numbers[h[0]]} hundred ${dozens[h[1]]}`;
        } else if (h[1] === '1') {
            return `${numbers[h[0]]} hundred ${numbers[sH]}`;
        } else if (h[1] !== '0' && h[2] !== '0') {
            return `${numbers[h[0]]} hundred ${dozens[h[1]]} ${numbers[h[2]]}`;
        }
          
    };
}
