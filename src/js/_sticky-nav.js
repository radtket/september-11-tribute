import $ from "jquery";

const stickyNavInit = () => {
  const { top } = $(".navbar").offset();

  $(window).on("scroll", () => {
    const scrollTop = $(window).scrollTop();

    if (scrollTop > top) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });
};

export default stickyNavInit;
