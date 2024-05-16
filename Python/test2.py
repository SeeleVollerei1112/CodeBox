import akshare as ak
import pandas as pd

stock_financial_report_sina_df = ak.stock_financial_report_sina(stock="sh600600", symbol="资产负债表")

with pd.ExcelWriter('stock_sse_summary.xlsx') as writer:

    stock_financial_report_sina_df.to_excel(writer, sheet_name='SSE Summary', index=False)

# stock_financial_report_sina_df.to_json('stock_financial_report_sina.json', orient='records', lines=True)
print(stock_financial_report_sina_df)