from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)  # ✅ Allow requests from your frontend

# Load model and scaler
model = joblib.load("crowd_level_model.pkl")
scaler = joblib.load("scaler.pkl")

# ✅ Define feature order used during training
FEATURE_ORDER = ["Special Day Type", "Time Slot", "Month", "Weekday", "Day", "Group Size"]

@app.route("/")
def home():
    return "✅ Crowd Predictor API is running. Use POST /predict"

@app.route("/predict", methods=["POST"])
def predict():
    try:
        data = request.get_json()
        df = pd.DataFrame([data])
        df = df.reindex(columns=FEATURE_ORDER, fill_value=0)
        X_scaled = scaler.transform(df)
        prediction = model.predict(X_scaled)[0]
        return jsonify({"prediction": float(prediction)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(port=5001, debug=True)
