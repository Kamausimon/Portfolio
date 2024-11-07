export default function SocialMediaIcons() {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/simon-kamau-codes/"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/linkedin.png" alt="linkedin-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/Kamau_codes"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/twitter.png" alt="twitter-link" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Kamausimon"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/github.png" alt="github-link" />
      </a>

      {/* <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/nephat-mutugi"
        target="_blank"
        rel="noreferrer"
      >
        <img src="../assets/instagram.png" alt="instagram-link" />
      </a> */}
    </div>
  );
}
