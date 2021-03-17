import $ from "jquery";

const initInMemoriumTabs = () => {
  $(".inmemorium-tabs__nav--item:first-child  > a").addClass("active");

  const TabsContent = $(".inmemorium-tabs__content--item");
  TabsContent.hide();
  TabsContent.first().show();

  const NavItems = $(".inmemorium-tabs__nav--item > a");
  function handleClick() {
    NavItems.removeClass("active");
    $(this).addClass("active");

    TabsContent.hide();

    const activeTab = $(this).attr("href");
    $(activeTab).fadeIn();
    return false;
  }

  NavItems.on("click", handleClick);
};

export default initInMemoriumTabs;
