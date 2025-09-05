# Flask Image Sharpening API

This is a simple **Flask web application** that allows users to upload an image, applies a sharpening filter using **OpenCV**, and returns the processed image in **base64 encoded JPEG** format.

---

## 🚀 Features

- Upload an image through the `/upload` endpoint  
- Image sharpening using a **convolution kernel**  
- Returns processed image as a **base64 string**  
- Includes a root (`/`) route to render an `index.html` template (can be customized)  

---

## 🛠️ Tech Stack

- [Python 3](https://www.python.org/)  
- [Flask](https://flask.palletsprojects.com/) – lightweight web framework  
- [OpenCV](https://opencv.org/) – image processing  
- [NumPy](https://numpy.org/) – numerical operations  
- [Matplotlib](https://matplotlib.org/) – visualization (optional, included in imports)  

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/flask-image-sharpening.git
cd flask-image-sharpening
