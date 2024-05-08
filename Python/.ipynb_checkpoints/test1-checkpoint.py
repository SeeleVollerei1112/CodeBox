import pandas as pd
import pdfplumber

with pdfplumber.open('分众传媒：2020年年度报告.PDF') as pdf:
    for page in pdf.pages:
        page.lines

pdf = pdfplumber.open("分众传媒：2020年年度报告.PDF")
page = pdf.pages[84]
tables = page.extract_tables()

df = pd.DataFrame(tables[1])
for column in ["Effective", "Received"]:
    df[column] = df[column].str.replace(" ", "")