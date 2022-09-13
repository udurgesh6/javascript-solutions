let v1 = "1.01.23";
let v2 = "1.01.21";

let sp1 = v1.split(".");
let sp2 = v2.split(".");

if (parseInt(sp1[0]) > parseInt(sp2[0])) {
  console.log("v1 > v2");
} else if (parseInt(sp1[0]) < parseInt(sp2[0])) {
  console.log("v2 > v1");
} else {
  if (parseInt(sp1[1]) > parseInt(sp2[1])) {
    console.log("v1 > v2");
  } else if (parseInt(sp1[1]) < parseInt(sp2[1])) {
    console.log("v2 > v1");
  } else {
    if (parseInt(sp1[2]) > parseInt(sp2[2])) {
      console.log("v1 > v2");
    } else if (parseInt(sp1[2]) < parseInt(sp2[2])) {
      console.log("v2 > v1");
    } else {
      console.log("v1 = v2");
    }
  }
}
