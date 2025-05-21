import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';

let cropper;
const input = document.getElementById('inputImage');
const image = document.getElementById('image');
const cropBtn = document.getElementById('cropBtn');
const downloadBtn = document.getElementById('downloadBtn');
const croppedCanvas = document.getElementById('croppedCanvas');

input.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file && file.size <= 300 * 1024) {
    const reader = new FileReader();
    reader.onload = () => {
      image.src = reader.result;

      image.onload = () => {
        if (cropper) cropper.destroy();
        cropper = new Cropper(image, {
          aspectRatio: NaN,
          viewMode: 1,
        });
      };
    };
    reader.readAsDataURL(file);
  } else {
    alert('Выбери фото меньше 300 KB.');
  }
});

cropBtn.addEventListener('click', () => {
  if (!cropper) return;

  const canvas = cropper.getCroppedCanvas();
  croppedCanvas.width = canvas.width;
  croppedCanvas.height = canvas.height;
  const ctx = croppedCanvas.getContext('2d');
  ctx.drawImage(canvas, 0, 0);
});

downloadBtn.addEventListener('click', () => {
  const canvas = croppedCanvas;
  const link = document.createElement('a');
  link.download = 'cropped-image.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
});
