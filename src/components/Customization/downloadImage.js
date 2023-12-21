export const downloadImage = async (alpaca, parts) => {
    const canvas = document.createElement("canvas")
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
  
    for (const part of parts) {
      const image = new Image();
      image.src = part;
      await new Promise((resolve) => {
        image.onload = () => {
          ctx.drawImage(image, 0, 0, 500, 500);
          resolve();
        };
      });
    }
  
    const link = document.createElement('a');
    link.download = 'alpaca.png';
    canvas.toBlob((blob) => {
      link.href = URL.createObjectURL(blob);
      link.click();
    });
  };