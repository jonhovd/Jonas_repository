function totalPris(varepris, antallVarer) {
    if (varepris) < 0) {
        return "ERROR";
   } else {
   return varepris * antallVarer;
  }

}
function testTotalPris() {
  return totalPris(80, 10) === 880 &&
         totalPris(90, 12) === 1000 &&
         totalPris(-40, 3) === "ERROR";
}

testTotalPris();