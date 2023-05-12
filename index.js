// code your solution here


const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]
  
  function didWin(anArray) {
    return anArray.result === "W"
  }
  function superbowlWin(someArray) {
    if ( someArray.find(didWin) ) {
        return someArray.find(didWin).year }
  }