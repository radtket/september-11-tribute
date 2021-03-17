import $ from "jquery";

const offsetHero = () => {
  const heroWrapper = $(".hero");
  const heroImage = $(".hero__img");
  const heroImageHeight = heroImage.innerHeight();
  const offset = $(window).width() > 1150 ? -0.25 : -0.15;
  heroImage.css("top", `${heroImageHeight * offset}px`);
  heroWrapper.css("margin-bottom", `${heroImageHeight * offset}px`);
};

export default offsetHero;
