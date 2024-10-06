// icons
import {
  House,
  User,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
  LinkedinIcon,
} from "lucide-react";

// components
import Image from "./Image";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111926] px-3 pb-8 pt-10 text-white sm:px-6 sm:pb-12 sm:pt-16">
      <div className="md:px-10 lg:px-16">
        <div className="mb-5 px-4 text-center sm:mb-12 sm:px-6 md:px-8">
          <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
            Do you have a web development topic you'd like to see covered?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm text-gray-400 sm:text-base md:text-lg">
            I'm always looking for new ideas. Reach out and let's expand our
            knowledge together!
          </p>
          <a
            href="mailto:hamza.eshoul.pro@gmail.com"
            className="inline-block rounded-md bg-white px-6 py-2 text-sm font-semibold text-[#111926] transition-colors hover:bg-gray-200 sm:text-base"
          >
            Get in touch!
          </a>
        </div>

        <div className="flex flex-col items-center border-t border-gray-700 pt-5 sm:flex-row sm:items-start sm:justify-between sm:pt-12">
          <div className="mb-8 sm:w-1/2 md:mb-0">
            <div className="mb-4 flex items-center justify-center sm:justify-start">
              <Image
                src={
                  "https://res.cloudinary.com/dfrd9rf2c/image/upload/v1725709299/devlog_assets/logo_iibuca.png"
                }
                alt="DevLog logo"
                className="mr-2 size-8"
              />
              <span className="text-xl font-bold">DevLog</span>
            </div>
            <p className="max-w-[350px] text-center text-gray-400 sm:text-justify">
              Exploring the intricacies of web development through rigorous
              analysis and practical insights.
            </p>
          </div>

          <div className="md:flex md:w-1/2 md:justify-end">
            <ul className="flex items-center gap-6 sm:flex-col sm:gap-2.5 md:items-start">
              <li className="flex cursor-pointer items-center gap-2">
                <House className="hidden size-5 sm:block" />
                <Link
                  to="/"
                  className="font-semibold transition-colors hover:text-gray-300"
                >
                  Home
                </Link>
              </li>
              <li className="flex cursor-pointer items-center gap-2">
                <User className="hidden size-5 sm:block" />
                <Link
                  to="/about"
                  className="font-semibold transition-colors hover:text-gray-300"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 flex flex-col items-center justify-between border-t border-gray-700 pt-5 sm:mt-12 sm:flex-row">
          <p className="mb-4 text-sm text-gray-400 sm:mb-0 md:mb-0">
            Copyright © 2024 DevLog. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/hamza-eshoul"
              aria-label="GitHub"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <GithubIcon className="size-5 sm:size-6" />
            </a>
            <a
              href="https://www.instagram.com/hamza.eshoul"
              aria-label="Instagram"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <InstagramIcon className="size-5 sm:size-6" />
            </a>
            <a
              href="https://twitter.com/hamza_eshoul"
              aria-label="Twitter"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <TwitterIcon className="size-5 sm:size-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCP21svaUb9Cn4M2zlLiEoKA"
              aria-label="YouTube"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <YoutubeIcon className="size-5 sm:size-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/hamza-eshoul/"
              aria-label="LinkedIn"
              className="text-gray-400 transition-colors duration-300 hover:text-white"
              target="_blank"
            >
              <LinkedinIcon className="size-5 sm:size-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
