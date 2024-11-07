import SocialMediaIcons from "../components/SocialMediaIcons";

export default function Footer() {
  return (
    <footer className="h-64 md:mt-8 bg-red pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md: flex justify-center md:justify-between text-center">
          <p className="font-playfair font-semibold text-yellow text-2xl">
            Kamau Simon
          </p>
          <p className="font-playfair text-md text-yellow">
            ©{new Date().getFullYear()}.All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
