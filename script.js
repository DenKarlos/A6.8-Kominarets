$(document).ready(function () {
   // turn string attribute 'style' to integer
   let prBrCond = Number(
      $(".progress-bar").attr("Style").replace("width: ", "").replace("%;", "")
   );
   $(".progress-bar").html(`${prBrCond}%`);
   let changePrBr = (increase) => {
      prBrCond += increase;
      if (prBrCond >= 100) prBrCond = 100;
      if (prBrCond <= 0) prBrCond = 0;
      $(".progress-bar").width(`${prBrCond}%`);
      $(".progress-bar").html(`${prBrCond}%`);
   };

   $(".plus1").click(function () {
      changePrBr(1);
   });

   $(".plus3").click(function () {
      changePrBr(3);
   });

   $(".plus7").click(function () {
      changePrBr(7);
   });
   $(".minus1").click(function () {
      changePrBr(-1);
   });

   $(".minus3").click(function () {
      changePrBr(-3);
   });

   $(".minus7").click(function () {
      changePrBr(-7);
   });
});
