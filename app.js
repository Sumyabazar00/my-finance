//Дэлгэцтэй ажиллахъ контроллер
var uiController = (function () {})();

//Санхүүтэй харилцах контроллер
var financeController = (function () {})();

//Программ холбогч контроллер
var appController = (function (uiController, financeController) {
  var ctrlAddItem = function () {
    // 1. Оруулах өгөгдлийг дэлгэцээс олж авна.
    console.log("Delgetsnees ogogdol awah heseg");
    // 2. Олж авсан өгөгдлүүдээ санхүүгийн контроллерт дамжуулж хадгална.
    // 3. Олж авсан өгөгдлүүдээ дэлгэцэнд тохирох хэсэгт гаргана.
    // 4. Төсвийг тооцоолно.
    // 5. Эцсийн өгөгдөл тооцоог дэлгэцэнд гаргана.
  };
  document.querySelector(".add__btn").addEventListener("click", function () {
    ctrlAddItem();
  });
  document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrlAddItem();
    } else {
      console.log(event.keyCode + " daragdlaa..");
    }
  });
})(uiController, financeController);
