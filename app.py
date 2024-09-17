import cv2
import numpy as np
from flask import render_template, Flask, request, jsonify, send_file
from io import BytesIO
import matplotlib.pyplot as plt 
import logging
import base64
app=Flask(__name__)


@app.route('/')
def main():
    return render_template('index.html')

@app.route('/upload', methods=['POST', 'GET'])
def upload():

    image_file = request.files['img']
   
    if image_file.filename == '':
        return 'No selected file!', 400

    # Read the uploaded image using OpenCV
    image = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_COLOR)
    # Apply image processing (e.g., sharpening)
    kernel = np.array([[0, -1, 0], [-1, 5, -1], [0, -1, 0]]) 
    sharpened_image = cv2.filter2D(image, -1, kernel)
    # Convert the processed image to JPEG format
    ret, buffer = cv2.imencode('.jpg', sharpened_image)
    encoded_image = base64.b64encode(buffer).decode('utf-8')
    # Return the processed image as a response
    return encoded_image


if __name__ == "__main__":
    app.run(debug=True)