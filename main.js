var flag = true;

const cheaking = (intervalid) => {
  console.log("interval");
  console.log(intervalid);
  var event1 = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });
  var btn = document.getElementById("top_nav");
  if (btn) {
    console.log("IN");
    btn.dispatchEvent(event1);
  }
  var Tag = document.querySelector("a.rd_btn");
  if (Tag) {
    Tag.dispatchEvent(event1);
    console.log(Tag.textContent);
    if (Tag.textContent === "Go to Link »") {
      clearInterval(intervalid);
    }
  }
};

const intervalid = setInterval(() => {
  cheaking(intervalid);
}, 500);
const callme = async () => {
  console.log("its working !");
  if (flag) {
    var landing = document.getElementById("landing");
    if (landing) {
      landing.submit();
    }
    flag = false;
  }

  var verify_button2 = document.getElementById("verify_button2");
  if (verify_button2) {
    console.log("Verify button :  ", verify_button2);
    var event1 = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    verify_button2.dispatchEvent(event1);
  }
  // var verify_text = document.getElementById("verify_text");
  // if (verify_text) {
  //   const words = verify_text.innerText.split(" ");
  //   console.log(words);
  // }
  var verify_button = document.getElementById("verify_button");
  if (verify_button) {
    var event1 = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    verify_button.dispatchEvent(event1);
  }
  setTimeout(() => {
    var two_steps_btn = document.getElementById("two_steps_btn");
    if (two_steps_btn) {
      var event1 = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
      });
      two_steps_btn.dispatchEvent(event1);
    }
  }, 7000);
};
// while (true) {
callme();
// }
