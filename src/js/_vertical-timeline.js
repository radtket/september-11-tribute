import $ from "jquery";

function handleClick(e) {
  e.preventDefault();
  $(".js-vertical-tab-content").hide();
  const activeTab = $(this).attr("rel");
  $(`#${activeTab}`).show();

  $(".js-vertical-tab").removeClass("is-active");
  $(this).addClass("is-active");

  $(".js-vertical-tab-accordion-heading").removeClass("is-active");
  $(`.js-vertical-tab-accordion-heading[rel^='${activeTab}']`).addClass(
    "is-active"
  );
}

$(".js-vertical-tab-content").hide();
$(".js-vertical-tab-content:first").show();

$(".js-vertical-tab").on("click", handleClick);
