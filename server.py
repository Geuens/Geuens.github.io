from flask import Flask, request, jsonify, send_file
from flask_cors import CORS  # Import CORS for cross-origin requests
import pandas as pd  # Ensure pandas is imported for handling Excel files
import os  # For checking file existence

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Path to the Excel file where data will be stored
EXCEL_FILE = 'attendees.xlsx'


# Function to save data to Excel file
def save_to_excel(name, attending, transportation, dietary_restrictions):
    try:
        print(f"[LOG] Saving data to Excel: {name}, {attending}, {transportation}, {dietary_restrictions}")

        # Create new data
        new_data = pd.DataFrame([[name, attending, transportation, dietary_restrictions]],
                                columns=['name', 'attending', 'transportation', 'dietaryRestrictions'])

        # Check if the Excel file exists
        if not os.path.exists(EXCEL_FILE):
            print(f"[LOG] Excel file does not exist. Creating a new one: {EXCEL_FILE}")
            # If the file doesn't exist, create it and write the data
            new_data.to_excel(EXCEL_FILE, index=False)
            print(f"[LOG] New Excel file created successfully at {EXCEL_FILE}.")
        else:
            # If the file exists, append new data to the existing file
            print(f"[LOG] Excel file found. Appending data to {EXCEL_FILE}.")
            existing_data = pd.read_excel(EXCEL_FILE)
            updated_data = pd.concat([existing_data, new_data], ignore_index=True)
            updated_data.to_excel(EXCEL_FILE, index=False)
            print(f"[LOG] Data appended to {EXCEL_FILE} successfully.")

    except Exception as e:
        print(f"[ERROR] Error saving to Excel: {e}")
        raise  # Re-raise the error to be caught by the route handler


@app.route('/submit', methods=['POST'])
def submit():
    try:
        data = request.get_json()
        print(f"[LOG] Received data: {data}")  # Log the incoming data for debugging

        # Validate data to ensure all required fields are present
        if not all(key in data for key in ['name', 'attending', 'transportation', 'dietaryRestrictions']):
            print("[ERROR] Missing required fields in the submitted data.")
            return jsonify({"error": "Missing required fields in the submitted data"}), 400

        # Handle data (store in Excel, etc.)
        save_to_excel(data['name'], data['attending'], data['transportation'], data['dietaryRestrictions'])

        # Check if the name is 'parquetdownload123' to trigger download
        if data['name'] == 'parquetdownload123':
            print("[LOG] Correct name entered for download: 'parquetdownload123'")

            # Log before sending the file
            if os.path.exists(EXCEL_FILE):
                print(f"[LOG] The file {EXCEL_FILE} exists and is ready to be downloaded.")

                # Send file to browser with explicit headers
                response = send_file(EXCEL_FILE, as_attachment=True, download_name='attendees.xlsx',
                                     mimetype='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')

                # Adding headers explicitly for browsers to handle the file download properly
                response.headers['Content-Disposition'] = 'attachment; filename="attendees.xlsx"'
                response.headers['Cache-Control'] = 'no-store, no-cache, must-revalidate'
                response.headers['Pragma'] = 'no-cache'

                print("[LOG] Response with file sent.")
                return response
            else:
                print(f"[ERROR] The file {EXCEL_FILE} does not exist. Cannot proceed with the download.")
                return jsonify({"error": "File not found. Cannot initiate download."}), 404

        # If the name is not 'parquetdownload123', just return success
        print(f"[LOG] Data submitted successfully, but no download triggered (name: {data['name']})")
        return jsonify({"message": "RSVP submitted successfully"}), 200

    except Exception as e:
        print(f"[ERROR] Error processing request: {e}")
        return jsonify({"error": f"Error submitting form: {str(e)}"}), 500


if __name__ == '__main__':
    app.run(debug=True)









