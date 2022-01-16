module.exports = function toReadable (number) {

// const toReadable = (number) => {
    let n = String(number);
    let numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let digits = ['zero', 'hundred', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let rezult = '';
    
    switch (n.length) {
        case 3:
            rezult += `${numbers[n[0]]} ${digits[1]}`;
            
        
        case 2:
            if (((n.slice(-2)) < 20) ) {
                rezult += ` ${numbers[+(n.slice(-2))]}`
                
                break;
            } else {
                rezult += ` ${digits[n.slice(-2,-1)]}`
                
            };
        
        case 1:
            if (n == 0) {
                rezult +='zero';
                
                break
            } else {
                rezult += ` ${numbers[n.slice(-1)]}`
                
                break;
            }
        
        default:
            return 'Not a number';
    }
    
    // console.log(n, rezult.trim());
    return rezult.trim();
}
