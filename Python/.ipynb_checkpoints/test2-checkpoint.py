import camelot

tables = camelot.read_pdf(filepath="分众传媒：2020年年度报告.PDF", pages="62")

tables.export("分众传媒：2020年年度报告.PDF", f='csv', compress=False)