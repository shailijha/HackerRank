function pageCount(n, p) {
    /*
     * Write your code here.
     */
    const last_page = n;
    const first_page = 1;
    let last_pages = new Array();

    let front_turns = 1;
    let last_turns = 1;

    if (last_page % 2 == 0) {
        last_pages.push(last_page);
    } else {
        last_pages.push(last_page);
        last_pages.push(last_page-1);
    }
    if (p == first_page || last_pages.indexOf(p) != -1) {
        return 0;
    } else {
        //number of turns from front
        //console.log(p);console.log(2*front_turns);console.log(1+2*front_turns);
        //console.log(p != 2 * front_turns);
        //console.log(p != (1 + 2 * front_turns))
        while (p != 2 * front_turns && p != (1 + 2 * front_turns)) {
            front_turns += 1;
        }
        //console.log(p != (last_page - 2 * last_turns + 1));
        //console.log(p != (last_page - 2 * last_turns));
        //number of turns from last
        if(last_page % 2 == 0) {
          while (p != (last_page - 2 * last_turns) && p != (last_page - 2 * last_turns + 1)) {
            //console.log(last_page - 2 * last_turns + 1);
            //console.log(last_page - 2 * last_turns);
            last_turns += 1;
            //console.log(last_page - 2 * last_turns + 1);
            //console.log(last_page - 2 * last_turns);
          }
        } else {
          while (p != (last_page - 2 * last_turns - 1) && p != (last_page - 2 * last_turns)) {
            //console.log(last_page - 2 * last_turns + 1);
            //console.log(last_page - 2 * last_turns);
            last_turns += 1;
            //console.log(last_page - 2 * last_turns + 1);
            //console.log(last_page - 2 * last_turns);
          }
        }
        console.log(`front turns is ${front_turns}`);
        console.log(`last turns is ${last_turns}`);
    }
    return front_turns < last_turns ? front_turns : last_turns;
}

const n = 96993;
const p = 70030;
console.log(pageCount(n,p));
