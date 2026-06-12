import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { geoEqualEarth } from "d3-geo";
import { gsap } from "gsap";
const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const ORIGIN = {
  name: "India",
  coords: [78.9629, 22.5937],
};

const DESTINATIONS = [
  {
    name: "Indonesia",
    coords: [117, -1],
    curve: 70,
    labelX: 10,
    labelY: 2,
  },
  {
    name: "Malaysia",
    coords: [102.0, 4.5],
    curve: 55,
    labelX: 10,
    labelY: -2,
  },
  {
    name: "Sri Lanka",
    coords: [80.7718, 7.8731],
    curve: 38,
    labelX: 10,
    labelY: 3,
  },
  {
    name: "Qatar",
    coords: [51.2, 25.3],
    curve: 75,
    labelX: 10,
    labelY: -2,
  },

  // NEW FRANCE ROUTE
  {
    name: "France",
    coords: [3.8, 50.2],
    curve: 98,
    labelX: -22,
    labelY: 16,
  },

  {
    name: "London",
    coords: [-1.5, 53],
    curve: 115,
    labelX: -28,
    labelY: -14,
  },
  {
    name: "Canada",
    coords: [-106.3468, 56.1304],
    curve: 170,
    labelX: 10,
    labelY: 2,
  },
];

const PROJECTION = geoEqualEarth()
  .scale(300)
  .translate([800, 400]);

function project(coords) {
  const p = PROJECTION(coords);
  return p ? [p[0], p[1]] : [0, 0];
}

function createCurve(from, to, curveHeight = 60) {
  const [x1, y1] = from;
  const [x2, y2] = to;

  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;

  return `
    M ${x1} ${y1}
    Q ${mx} ${my - curveHeight}
    ${x2} ${y2}
  `;
}

export default function GalleryHero() {
  const rootRef = useRef(null);
  const mapRef = useRef(null);
  const particlesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title span", {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });

      gsap.from(".hero-sub", {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.5,
      });


      gsap.to(".route-path", {
        strokeDashoffset: 0,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        repeatDelay: 0.8,
      });

      gsap.to(".pulse-node", {
        scale: 1.4,
        transformOrigin: "center",
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "sine.inOut",
        stagger: 0.15,
      });

      const particles =
        particlesRef.current?.querySelectorAll(".particle");

      particles?.forEach((particle) => {
        gsap.to(particle, {
          y: "random(-40,40)",
          x: "random(-30,30)",
          duration: "random(5,10)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });

      const move = (e) => {
        const rect = rootRef.current?.getBoundingClientRect();
        if (!rect) return;

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(mapRef.current, {
          x: x * -25,
          y: y * -20,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", move);

      return () => {
        window.removeEventListener("mousemove", move);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  const indiaPoint = project(ORIGIN.coords);

  return (
    <section ref={rootRef} style={styles.root}>
      <div style={styles.vignette} />

      <div ref={particlesRef} style={styles.particles}>
        {Array.from({ length: 50 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              ...styles.particle,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div style={styles.container}>
        {/* LEFT */}
        <div style={styles.left}>
          <div style={styles.eyebrow}>
            <span style={styles.dot} />
            ASMVOCAL ACADEMY — EST. SINCE 2024
          </div>

       <h1 className="hero-title" style={styles.title}>
  From <span style={styles.gold}>India</span> To The World
</h1>
        </div>

        {/* RIGHT */}
        <div ref={mapRef} style={styles.mapWrap}>
          <ComposableMap
            projection="geoEqualEarth"
            projectionConfig={{
  scale: window.innerWidth < 768 ? 210 : 300,

  translate:
    window.innerWidth < 768
      ? [800, 340]
      : [800, 400],
}}
            width={1600}
            height={800}
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient
                id="routeGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#f6c453" />
                <stop offset="50%" stopColor="#ffd978" />
                <stop offset="100%" stopColor="#f6c453" />
              </linearGradient>

              <filter
                id="glow"
                x="-100%"
                y="-100%"
                width="300%"
                height="300%"
              >
                <feGaussianBlur
                  stdDeviation="4"
                  result="blur"
                />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <Geographies geography={GEO_URL}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: {
                        fill: "#3f557f",
                        stroke: "#031230",
                        strokeWidth: 0.5,
                        outline: "none",
                      },
                      hover: {
                        fill: "#4c6594",
                        outline: "none",
                      },
                      pressed: {
                        fill: "#3f557f",
                        outline: "none",
                      },
                    }}
                  />
                ))
              }
            </Geographies>

            {/* ROUTES */}
            {DESTINATIONS.map((city, i) => {
              const point = project(city.coords);

              const path = createCurve(
                indiaPoint,
                point,
                city.curve
              );

              const distance =
                Math.hypot(
                  point[0] - indiaPoint[0],
                  point[1] - indiaPoint[1]
                ) * 2;

              return (
                <g key={city.name}>
                  <path
                    className="route-path"
                    d={path}
                    fill="none"
                    stroke="url(#routeGradient)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow)"
                    strokeDasharray={distance}
                    strokeDashoffset={distance}
                  />

                  <circle
                    className="pulse-node"
                    cx={point[0]}
                    cy={point[1]}
                    r="5"
                    fill="#ffd978"
                    filter="url(#glow)"
                  />

                  <text
                    x={point[0] + city.labelX}
                    y={point[1] + city.labelY}
                    fill="#f6c453"
                    fontSize="11"
                    fontWeight="600"
                    style={{
                      letterSpacing: "1px",
                    }}
                  >
                    {city.name.toUpperCase()}
                  </text>
                </g>
              );
            })}

            {/* INDIA */}
            <g>
              <circle
                cx={indiaPoint[0]}
                cy={indiaPoint[1]}
                r="16"
                fill="rgba(246,196,83,0.18)"
              />

              <circle
                cx={indiaPoint[0]}
                cy={indiaPoint[1]}
                r="8"
                fill="#ffd978"
                filter="url(#glow)"
              />

              <text
                x={indiaPoint[0] + 14}
                y={indiaPoint[1] - 10}
                fill="#fff1b7"
                fontSize="13"
                fontWeight="700"
                style={{
                  letterSpacing: "1px",
                }}
              >
                INDIA
              </text>
            </g>
          </ComposableMap>
        </div>
      </div>
    </section>
    
  );
}

const styles = {
  root: {
    position: "relative",
    minHeight:
  window.innerWidth < 768
    ? "65vh"
    : "68vh",
    overflow: "hidden",
   background: `
  linear-gradient(
    to bottom,
    #000000 0%,
    #02040a 38%,
    #000000 100%
  )
`,
    color: "#ffffff",
  },

  vignette: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at center, transparent 40%, rgba(0,0,0,0.75) 100%)",
    zIndex: 1,
  },

  particles: {
    position: "absolute",
    inset: 0,
    zIndex: 1,
    pointerEvents: "none",
  },

  particle: {
    position: "absolute",
    background: "#f6c453",
    borderRadius: "50%",
    opacity: 0.5,
    boxShadow: "0 0 8px rgba(246,196,83,0.8)",
  },

 container: {
  position: "relative",
  zIndex: 2,
  width: "100%",

  display: "grid",

  gridTemplateColumns:
    window.innerWidth < 768
      ? "1fr"
      : "1.15fr 1fr",

  alignItems: "center",

  gap:
    window.innerWidth < 768
      ? "30px"
      : "20px",

 padding:
window.innerWidth < 768
? "45px 18px 20px"
: "130px 90px 80px"
},

 left: {
  maxWidth:
    window.innerWidth < 768
      ? "100%"
      : "560px",

  width: "100%",

  textAlign:
    window.innerWidth < 768
      ? "center"
      : "left",
      transform:
    window.innerWidth < 768
      ? "translateY(0px)"
      : "translateY(-100px)",
},
  eyebrow: {
  display: "flex",

  justifyContent:
    window.innerWidth < 768
      ? "center"
      : "flex-start",

  alignItems: "center",

  gap: "10px",

  color: "#f6c453",

  letterSpacing:
    window.innerWidth < 768
      ? "2px"
      : "4px",

  fontSize:
    window.innerWidth < 768
      ? "10px"
      : "12px",

  marginBottom: "24px",
},

  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#f6c453",
    boxShadow: "0 0 12px #f6c453",
  },

title: {
  display: "block",

  fontSize:
    window.innerWidth < 768
      ? "32px"
      : "82px",

  lineHeight: 0.95,

  fontWeight: "700",

  letterSpacing: "-2px",

  margin: 0,

  textAlign:
    window.innerWidth < 768
      ? "center"
      : "left",

  whiteSpace: "normal",
},

  gold: {
    color: "#f6c453",
    fontStyle: "italic",
    textShadow: "0 0 25px rgba(246,196,83,0.35)",
  },

subtitle: {
  marginTop:
    window.innerWidth < 768
      ? "18px"
      : "34px",

  color: "rgba(255,255,255,0.65)",

  fontSize:
    window.innerWidth < 768
      ? "14px"
      : "18px",

  lineHeight: 1.9,

  maxWidth:
    window.innerWidth < 768
      ? "320px"
      : "520px",

  textAlign:
    window.innerWidth < 768
      ? "center"
      : "left",

  padding:
    window.innerWidth < 768
      ? "0"
      : "0",
},

  buttons: {
    display: "flex",
    gap: "18px",
    marginTop: "42px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background:
      "linear-gradient(180deg, #f6c453 0%, #c7931e 100%)",
    border: "none",
    color: "#111",
    padding: "18px 34px",
    borderRadius: "999px",
    fontWeight: "700",
    fontSize: "16px",
    cursor: "pointer",
    boxShadow:
      "0 0 45px rgba(246,196,83,0.35)",
  },

  secondaryBtn: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    padding: "18px 30px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "16px",
    cursor: "pointer",
    backdropFilter: "blur(10px)",
  },

mapWrap: {
  width:
    window.innerWidth < 768
      ? "115%"
      : "155%",

 mapWrap: {
  width:
    window.innerWidth < 768
      ? "100%"
      : "155%",

  marginLeft:
    window.innerWidth < 768
      ? "0%"
      : "-22%",

  height:
    window.innerWidth < 768
      ? "260px"
      : "700px",

  overflow: "hidden",

  marginTop:
    window.innerWidth < 768
      ? "-20px"
      : "-60px",

  filter:
    "drop-shadow(0 0 100px rgba(0,0,0,0.5))",
},
};
