const resizeImage = (
  origionalWidth: number,
  origionalHeight: number,
  scale: number = 0.3,
): { width: number; height: number } => {
  if (scale <= 0 || scale > 1) {
    return {
      width: origionalWidth,
      height: origionalHeight,
    };
  }
  return {
    width: Math.round(origionalWidth * scale),
    height: Math.round(origionalHeight * scale),
  };
};

export { resizeImage };
