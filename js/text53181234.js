$(document).ready(function () {
  var Ime = new Date();
  var ime = Ime.getHours()+":"+Ime.getMinutes();
  var x = {
    idcli: "121616467987",
    idWeb: "000616467987",
    nameWebsite: "Khăn choàng cổ Phạm Gia",
    linkFb: "/",
    imgfbWebsite: "img/img-fb-web.jpg",
    fbName: "Trang",
    imgFb: "img/img-fb.jpg",
    text1: [
      {text: "Chuyển tài khoản",link: "/", },
    ],
    text2: [
      {text: "Try cập trang Facebook",link: "/",},
      {text: "Thêm Messenger vào trang web của bạn",link: "/",},
    ],
    text3: [
      {id: "49887",text: "Kết thúc đoạn chat",link: "#",ico: `<i class="fas fa-times-circle"></i>`,},
      {id: "",text: "Có gì đó ko ổn",link: "/",ico: `<i class="fas fa-exclamation-triangle"></i>`,},
      {id: "", text: "",link: "",cla: "evt-no",ico: `<div></div>`,},
      {id: "",text: "Try cập trang facebook",link: "/",ico: "",},
      {id: "",text: "Thêm messenger vào trang web của bạn",link: "/",ico: "",},
    ],
    text4: [
      {text: "Sản phẩm mới",link: "/",cla: "div-bottom-radius",event: "",ico: ``,},
      {text: "Hệ thống cửa hàng",link: "/",cla: "div-bottom-radius",event: "",ico: ``,},
    ],
  };
  var y = {
    tab_content: `<div><div><div><img src="`+x.imgfbWebsite+`"/><div></div></div><div id="btn-acc-fb"><img src="`+x.imgFb+`"></div><div id="btn-link-fb"></div><div id="btn-clo-fb"></div></div><div><strong>Chat với `+x.nameWebsite+`</strong><div>Thường phản hồi trong vòng vài phút</div><div>Bạn cần hỗ trợ. Hãy liên hệ ngay với `+x.nameWebsite +`</div><button id="chat-vs-acc">Tiếp tục dưới tên `+x.fbName+`</button><button id="chat-vs-cli">Tiếp tục với vai trò khách</button></div><div>Bằng việc tiếp tục với vai trò khách, bạn đồng ý với <a href="/">Điều khoản </a><a href="/">Chính sách dữ liệu</a> và <a href="/">Chính sách cookie </a>của Facebook. Nếu bạn chọn đăng nhập, `+x.nameWebsite+` sẽ biết bạn đến từ trang web nào và nhìn thấy thông tin công khai trên trang cá nhân Facebook của bạn.</div></div>`,
    tab_chat_cli: `<div><div><div><img src="`+x.imgfbWebsite+`"><div></div></div><div><p>`+x.nameWebsite+`</p><p>Do Messenger cung cấp</p></div><div id="btn-acc-fb"></div><div id="btn-clo-fb"></div></div><div id="from-chat-fb"><div>`+ime+`</div><div>Cuộc trò chuyện này sẽ tiếp tục hiển thị đến 24 giờ ngay cả sau khi đóng. Để gỡ sớm hơn, hãy chọn Kết thúc đoạn chat trong menu thả xuống.</div><div id="form-text-chat-fb"></div></div><div id="form-input"><div id="chose-file"></div><input id="input-text-chat-fb" type="text" placeholder="Đặt câu hỏi..."><div id="btn-enter"></div></div></div>`,
  }
  CreactChat(x,y);
});
