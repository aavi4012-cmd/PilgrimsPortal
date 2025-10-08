from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # allows your Next.js frontend to call this API

# Load your saved model, scaler, and feature list
model = joblib.load("crowd_level_model.pkl")
scaler = joblib.load("scaler.pkl")
selected_features = joblib.load("selected_features.pkl")

@app.route("/")
def home():
    return jsonify({"message": "Crowd Level Predictor API is running 🚀"})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Get JSON data from frontend
        data = request.get_json()
        df = pd.DataFrame([data])

        # Select the same features used during training
        df = df[selected_features]

        # Scale input
        X_scaled = scaler.transform(df)

        # Predict
        prediction = model.predict(X_scaled)[0]

        return jsonify({"prediction": float(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    from sys import argv
    port = 5000
    if len(argv) > 1 and argv[1] == "--port":
        port = int(argv[2]) if len(argv) > 2 else 5001
    app.run(host="0.0.0.0", port=port, debug=True)

