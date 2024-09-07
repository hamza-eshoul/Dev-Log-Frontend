const Header = () => {
  return (
    <section className="mb-10 sm:mb-16">
      <div className="h-[38vh] xsm:h-[78vh]">
        <img
          src={
            "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1725709206/devlog_assets/devlog_hero_image_krhxrd.jpg"
          }
          className="h-full w-full rounded-2xl object-cover"
          alt="hero image"
        />
      </div>
    </section>
  );
};

export default Header;
