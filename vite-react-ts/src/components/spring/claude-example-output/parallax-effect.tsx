import { ParallaxLayer } from "@react-spring/parallax";

export const ParallaxExampleAnimatedWithClaude = () => {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <ParallaxLayer
        offset={0}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Parallax Effect</h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={1}
        style={{
          backgroundColor: "tomato",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>Scroll Down</h2>
      </ParallaxLayer>

      <ParallaxLayer
        sticky={{ start: 0, end: 1 }}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="https://via.placeholder.com/150" alt="Placeholder" style={{ width: "150px" }} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{
          backgroundColor: "seagreen",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>This is Layer 2</h2>
      </ParallaxLayer>
    </div>
  );
};
