const ar = [10,20,20,10,10,30,50,10,20]

let matchingSocks = new Map();

function countMatchingSocks() {
  let counter = 1;
  let matchingSocksCount = 0;
    for (let num = 0; num < ar.length; num++) {
        if (!matchingSocks.has(ar[num])) {
            matchingSocks.set(ar[num], counter)
        } else {
          let temp_count = matchingSocks.get(ar[num]);
          temp_count += 1;
          matchingSocks.set(ar[num], temp_count);
        }
    }

    console.log(matchingSocks);

    for(const v of matchingSocks.values()) {
      if(v > 1) {
          matchingSocksCount += Math.floor((v/2));
      }
    }

    console.log(matchingSocksCount);
}

countMatchingSocks();
