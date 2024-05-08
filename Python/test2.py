import camelot
import pandas as pd

# 指定页码区间，例如从第 5 页到第 15 页
page_range = '62-69'

# 读取 PDF 文件中的表格
# 'flavor' 参数为 'lattice' 或 'stream'，选择最适合您的 PDF 的类型
tables = camelot.read_pdf('分众传媒：2020年年度报告.PDF', pages=page_range, flavor='lattice')

# 使用 ExcelWriter 保存表格到 Excel
with pd.ExcelWriter('tables_from_pdf_selected_pages.xlsx', engine='openpyxl') as writer:
    for i, table in enumerate(tables):
        # 将每个表格保存为一个单独的 sheet
        table.df.to_excel(writer, sheet_name=f'Table_{i+1}', index=False)
