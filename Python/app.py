import akshare as ak
import pandas as pd
from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/process_data/<stock_code>', methods=['GET', 'POST'])
def process_and_send_data(stock_code):
    stock_financial_report_sina_df = ak.stock_financial_report_sina(stock=stock_code, symbol="资产负债表")
    processed_data = stock_financial_report_sina_df.to_dict(orient='records')
    
    df = pd.DataFrame(processed_data);
    df.to_excel(f"资产负债表{stock_code}.xlsx", index = False)

    return jsonify(processed_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)