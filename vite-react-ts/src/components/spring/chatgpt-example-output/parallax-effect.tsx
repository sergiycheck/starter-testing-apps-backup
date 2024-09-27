import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export const ParallaxComponentAnimatedWithChatGPT = () => {
  return (
    <Parallax pages={3}>
      {/* Background layer */}
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={{ backgroundColor: "#13547a", width: "100%", height: "100%" }} />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={{ backgroundColor: "#13547a", width: "100%", height: "100%" }} />
      </ParallaxLayer>
      {/* Middle layer */}
      <ParallaxLayer offset={1} speed={1}>
        <div style={{ backgroundColor: "#80d0c7", width: "100%", height: "100%" }} />
      </ParallaxLayer>
      {/* Foreground layer */}
      <ParallaxLayer offset={2} speed={2}>
        <div style={{ backgroundColor: "#ff4b1f", width: "100%", height: "100%" }} />
      </ParallaxLayer>
    </Parallax>
  );
};
