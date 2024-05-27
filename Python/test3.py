import akshare as ak
import pandas as pd
from flask import Flask, abort, jsonify, request
from flask_cors import CORS
from numpy import tile

app = Flask(__name__)
CORS(app)


# 获取并处理股票数据
@app.route("/api/stocks/<stock_code>/reports", methods=["POST"])
def process_and_send_data(stock_code):
    try:
        stock_financial_report_sina_df = ak.stock_financial_report_sina(
            stock=stock_code, symbol="资产负债表"
        )
    except Exception as e:
        abort(
            400,
            description=f"Failed to fetch data for stock code {stock_code}: {str(e)}",
        )

    processed_data = stock_financial_report_sina_df.to_dict(orient="records")

    df = pd.DataFrame(processed_data)
    file_path = f"资产负债表_{stock_code}.xlsx"
    df.to_excel(file_path, index=False)

    return jsonify({"message": "Data processed and saved", "file_path": file_path}), 201


# 读取特定股票的Excel文件并返回特定列数据
@app.route("/api/stocks/<stock_code>/reports/columns", methods=["GET"])
def get_columns_data(stock_code):
    file_path = f"资产负债表_{stock_code}.xlsx"
    try:
        df = pd.read_excel(file_path)
    except FileNotFoundError:
        abort(404, description=f"File not found for stock code {stock_code}")

    selected_columns = request.args.getlist("columns")

    if not selected_columns:
        abort(400, description="No columns specified")

    try:
        data = {col: df[col].tolist() for col in selected_columns}
    except KeyError as e:
        abort(400, description=f"Column not found: {str(e)}")

    return jsonify(data)


@app.route("/api/revenue-data", methods=["GET"])
def get_revenue_data():
    data = {
        "title": "公司收入和净利润",
        "xAxis": [
            "2022-Q3",
            "2022-Q4",
            "2023-Q1",
            "2023-Q2",
            "2023-Q4",
            "2024-Q1",
        ],
        "series": {
            "s1": [1400, 1449, 1499, 1492, 1546, 1551, 1595],
            "s2": [322, 297, 325, 375, 449, 426, 503],
            "s3": [23, 20, 22, 25, 29, 27, 32],
        },
        "yAxis": {"name_left": "单位: 亿元", "name_right": "单位: %"},
    }

    return jsonify(data), 200


if __name__ == "__main__":
    app.run(debug=True, port=5000)
