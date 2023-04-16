class Formatter {
  //add static methods here
  static capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);;
  }
  static sanitize(str){
     return str.replace(/[^a-zA-Z0-9- ']/g, '');
  }
  static titleize(str) {
    const skipWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    return str
      .split(' ')
      .map((word, index) => {
        if (index === 0 || !skipWords.includes(word)) {
          return Formatter.capitalize(word);
        } else {
          return word;
        }
      })
      .join(' ');
  }
}