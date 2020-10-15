var m = {
  b24_up: function (w, p) {
    let x = p.classList;
    if (w) {
      w = false;
      if (x.contains("hide")) {
        x.replace("hide", "show");
      } else {
        x.add("show");
      }
    } else {
      w = true;
      x.replace("show", "hide");
    }
    return w;
  },
  formConfirm: function (p, x, u, n2) {
    p.removeChild(p.childNodes[1]);
    let g = document.createElement("div");
    let i =
      `<span>Bạn có chắc chắn muốn Kết thúc đoạn chat không?</span><span>Cuộc trò chuyện của bạn với ` +
      x.nameWebsite +
      ` sẽ bị gỡ.</span><div id="99584">Hủy</div><div id="99585">Xác nhận</div>`;
    g.insertAdjacentHTML("afterbegin", i);
    g.classList.add("form-cfi");
    p.append(g);
    document.getElementById("99584").addEventListener("click", () => {
      p.removeChild(p.childNodes[1]);
      n2 = false;
    });
    document.getElementById("99585").addEventListener("click", () => {
      p.removeChild(p.childNodes[1]);
      n2 = false;

      p.removeChild(p.childNodes[0]);
      p.insertAdjacentHTML("beforeend", u);
      p.classList.remove("tab-chat-cli");
    });
    console.log(n2);
    return n2;
  },
  upItem: function (g, i, x1, x2) {
    if (x1) {
      x1 = false;
      g.removeChild(p.childNodes[1]);
    } else {
      x1 = true;
      p.append(i);
    }
    if (x2) {
      x2 = false;
      g.removeChild(p.childNodes[1]);
    }
    return x1, x2;
  },
  stateRef: !0, // false
}
function CreactChat(x,y) {
  var dom = document;
  r = dom.createElement("div");
  r.classList.add("b24-widget-button-block");
  dom.getElementsByTagName("body")[0].appendChild(r);
  r.addEventListener("click", () => {m.stateRef = m.b24_up(m.stateRef,p);});

  p = dom.createElement("div");
  p.insertAdjacentHTML("beforeend", y.tab_content);
  p.classList.add("modal-widget-chat");
  dom.getElementsByTagName("body")[0].appendChild(p);
  dom.querySelector("#btn-clo-fb").addEventListener("click", () => {m.stateRef = m.b24_up(m.stateRef,p);});

  let btnLink,btnAcc = !m.stateRef;
  dom.querySelector("#btn-link-fb").addEventListener("click", () => {
    let g = dom.createElement("div");
    x.text2.forEach((i) => {
      let a = dom.createElement("a");
      a.href = i.link;
      a.textContent = i.text;
      g.append(a);
    });
    if (btnAcc) {
      btnAcc = false;
      p.removeChild(p.childNodes[1]);
    }
    if (btnLink) {
      btnLink = false;
      p.removeChild(p.childNodes[1]);
    } else {
      btnLink = true;
      p.append(g);
    }
  });

  dom.querySelector("#btn-acc-fb").addEventListener("click", () => {
    let g = dom.createElement("div");
    x.text1.forEach((i) => {
      let a = dom.createElement("a");
      a.href = i.link;
      a.textContent = i.text;
      g.append(a);
    });
    if (btnLink) {
      btnLink = false;
      p.removeChild(p.childNodes[1]);
    }
    if (btnAcc) {
      btnAcc = false;
      p.removeChild(p.childNodes[1]);
    } else {
      btnAcc = true;
      p.append(g);
    }
  });

  /* dom.getElementById("chat-vs-acc").addEventListener("click", () => {
    p.removeChild(p.childNodes[0]);
    p.insertAdjacentHTML("beforeend", y.tab_chat_cli);
    p.classList.add("tab-chat-cli");
    p.classList.add("tab-chat-acc");
    if (p.childElementCount > 1) {
      p.removeChild(p.childNodes[0]);
    }
  }); */

  dom.querySelector("#chat-vs-cli").addEventListener("click", () => {
    let timeol = new Date().getTime();
    p.childElementCount > 1
      ?p.innerHTML = ""
      :p.removeChild(p.childNodes[0]);
    p.insertAdjacentHTML("beforeend", y.tab_chat_cli);
    p.childNodes[0].classList.add("v94");
    setTimeout(function () {
      p.childNodes[0].classList.remove("v94");
    }, 250);
    p.classList.add("tab-chat-cli");

    dom.querySelector("#btn-clo-fb").addEventListener("click", () => {m.stateRef = m.b24_up(m.stateRef,p);});

    let inputChat = dom.querySelector("#input-text-chat-fb");
    let enter = dom.querySelector("#btn-enter");
    enter.addEventListener("click", () => {
      if(inputChat.value!==""){
        
      }
    });
    setInterval(function () {
      if(inputChat.value===""){
        enter.classList.remove("active");
      }else{
        enter.classList.add("active");
      }
    }, 1000);
    inputChat.addEventListener("keypress", (e) => {
      let d = dom.createElement("div");
      let s = dom.createElement("span");
      if (e.key === "Enter") {
        if (inputChat.value) {
          let time = new Date().getTime();
          if (time - timeol >= 600000) {
            timeol = time;
            let c = dom.createElement("h4");
            c.innerText = ime;
            dom.querySelector("#form-text-chat-fb").append(c);
          }
          s.classList.add("chat-cli");
          s.innerText = inputChat.value;
          let item2 = inputChat.value;
          inputChat.value = "";
          d.append(s);
          dom.querySelector("#form-text-chat-fb").append(d);

          setTimeout(function () {
            let d2 = dom.createElement("div");
            let s2 = dom.createElement("span");
            s2.classList.add("chat-cli");
            s2.classList.add("chat-cli-web");
            if (item2 == "hi") {
              s2.innerText = "Chào bạn, bạn cần gì ?";
            } else {
              s2.innerText = "Tôi từ chối hiểu bạn nói gì ?";
            }
            d2.appendChild(s2);
            dom.querySelector("#form-text-chat-fb").append(d2);
          }, 2000);
        }
      }
    });
    let y2,n2 = false;
    dom.querySelector("#btn-acc-fb").addEventListener("click", () => {
      if (y2) {
        y2 = false;
        p.removeChild(p.childNodes[1]);
      } else if (n2) {
        n2 = false;
        if (p.childElementCount > 1) {
          p.removeChild(p.childNodes[1]);
        }
      } else {
        y2 = true;
        let g = dom.createElement("div");
        x.text3.forEach((i) => {
          let a = dom.createElement("a");
          a.href = i.link;
          a.id = i.id;
          a.textContent = i.text;
          a.classList.add(i.cla);
          a.insertAdjacentHTML("afterbegin", i.ico);
          g.append(a);
        });
        p.append(g);
      }
      let id498878 = dom.getElementById("49887");
      if (id498878) {
        id498878.addEventListener("click", () => {
          y2 = false;
          n2 = true;
          n2 = m.formConfirm(p, x, y.tab_content, n2);
        });
      }
    });

  });
}