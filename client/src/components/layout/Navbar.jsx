import { useState } from "react";

import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
} from "react-router-dom";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  Menu,
  Music2,
} from "lucide-react";

import clsx from "clsx";

import useScrollPosition from "@/hooks/useScrollPosition";
import useMediaQuery from "@/hooks/useMediaQuery";

import {
  NAV_LINKS,
  SITE_CONFIG,
} from "@/utils/constants";

import MobileMenu from "./MobileMenu";

import Button from "@/components/common/Button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const { scrolled } =
    useScrollPosition(40);

  const isDesktop =
    useMediaQuery("(min-width: 1024px)");

  const { pathname } =
    useLocation();

  const navigate = useNavigate();

  const transparentRoutes = [
    "/",
    "/classes",
    "/gallery",
  ];

  const isTransparentRoute =
    transparentRoutes.includes(pathname);

  return (
    <>
      <motion.header
        initial={{
          y: -80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={clsx(
          `
            fixed
            top-0
            inset-x-0
            z-50

            transition-all
            duration-500
          `,

          scrolled || !isTransparentRoute
            ? `
              backdrop-blur-md
              lg:backdrop-blur-xl

              bg-obsidian-950/70

              border-b
              border-gold-500/10
            `
            : "bg-transparent"
        )}
      >
        <nav
          className="
            container-premium

            flex
            items-center
            justify-between

            px-4
            sm:px-6
            lg:px-16

            py-3
            sm:py-4
            lg:py-5
          "
        >
          {/* LOGO */}

          <Link
            to="/"
            className="
              group
              flex
              items-center
              gap-2.5
            "
          >
            <div
              className="
                relative

                h-10
                w-10

                rounded-full

                bg-gold-gradient

                flex
                items-center
                justify-center

                shadow-gold-glow

                transition-shadow
                duration-500
              "
            >
              <Music2
                className="
                  h-5
                  w-5
                  text-obsidian-950
                "
                strokeWidth={2.5}
              />

              <span
                className="
                  absolute
                  inset-0
                  rounded-full

                  bg-gold-400

                  blur-lg
                  lg:blur-xl

                  opacity-30
                  group-hover:opacity-60

                  transition-opacity
                "
              />
            </div>

            <div
              className="
                hidden
                sm:flex

                flex-col
                leading-none
              "
            >
              <span
                className="
                  font-display
                  text-lg
                  lg:text-xl

                  font-bold
                  tracking-tight

                  text-ivory
                "
              >
                {SITE_CONFIG.name
                  .split(" ")
                  .slice(0, 2)
                  .join(" ")}
              </span>

              <span
                className="
                  text-[10px]

                  font-mono
                  uppercase

                  tracking-[0.28em]

                  text-gold-400/80

                  mt-0.5
                "
              >
                Academy
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}

          {isDesktop && (
            <ul
              className="
                flex
                items-center
                gap-1
              "
            >
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        `
                          relative

                          px-5
                          py-2.5

                          text-sm
                          font-medium

                          tracking-wide

                          transition-colors
                          duration-300
                        `,

                        isActive
                          ? "text-gold-300"
                          : `
                            text-ivory/70
                            hover:text-ivory
                          `
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}

                        {isActive && (
                          <motion.span
                            layoutId="nav-active"

                            className="
                              absolute
                              inset-x-3
                              -bottom-px

                              h-px

                              bg-gold-gradient
                            "

                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}

          {/* CTA / MOBILE */}

          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            {isDesktop ? (
              <Button
                size="sm"
                onClick={() =>
                  navigate("/classes")
                }
              >
                Book a Class
              </Button>
            ) : (
              <button
                onClick={() =>
                  setMenuOpen(true)
                }

                aria-label="Open menu"

                className="
                  h-11
                  w-11

                  grid
                  place-items-center

                  rounded-full

                  border
                  border-gold-500/20

                  hover:border-gold-500/50

                  transition-colors
                "
              >
                <Menu
                  className="
                    h-5
                    w-5
                    text-ivory
                  "
                />
              </button>
            )}
          </div>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}

      <AnimatePresence mode="wait">
        {menuOpen && (
          <MobileMenu
            onClose={() =>
              setMenuOpen(false)
            }
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;