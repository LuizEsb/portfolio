import * as motion from "motion/react-client";

export default function ImgAnimada({ src, alt, style }) {
  return (
    <motion.img
      src={src}
      alt={alt}
      style={{...style}}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    />
  );
}
