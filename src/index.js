module.exports = function toReadable (number) {  
    const getUnits = (num) => {
        switch (num) {
            case 0: return 'zero';
            case 1: return 'one';
            case 2: return 'two';
            case 3: return 'three';
            case 4: return 'four';
            case 5: return 'five';
            case 6: return 'six';
            case 7: return 'seven';
            case 8: return 'eight';
            case 9: return 'nine';
        }
      }  
    
      const getTens = (num) => {
        if (num < 20) {
            switch (num) {
              case 10: return 'ten';
              case 11: return 'eleven';
              case 12: return 'twelve';
              case 13: return 'thirteen';
              case 14: return 'fourteen';
              case 15: return 'fifteen';
              case 16: return 'sixteen';
              case 17: return 'seventeen';
              case 18: return 'eighteen';
              case 19: return 'nineteen';
            }
          } else {
            let result = '';
    
            switch (Math.floor(num / 10)) {
                case 2: 
                  result = 'twenty';
                  break;
                case 3: 
                  result = 'thirty';
                  break;
                case 4: 
                  result = 'forty';
                  break;
                case 5: 
                  result = 'fifty';
                  break;
                case 6: 
                  result = 'sixty';
                  break;
                case 7: 
                  result = 'seventy';
                  break;
                case 8: 
                  result = 'eighty';
                  break;
                case 9: 
                  result = 'ninety';
                  break;
            }
    
            if (num % 10 !== 0) {
                result += ' ' + getUnits(num % 10);
            }
    
            return result;
          }
      }
  
      const getHundreds = (number) => {
          let result = '';
  
          result = getUnits(Math.floor(number / 100)) + ' hundred';
  
          const tens = number - Math.floor(number / 100) * 100;
  
          if (tens >= 10) {
              result += ' ' + getTens(tens);
          } else if (tens > 0) {
              result += ' ' + getUnits(tens);
          }
  
          return result;
      }
    
      const strNumber = String(number);
      
      switch (strNumber.length) {
        case 1: 
          return getUnits(number);
        case 2: 
          return getTens(number);
        case 3: 
          return getHundreds(number);
      }
}
