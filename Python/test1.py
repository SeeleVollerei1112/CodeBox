import pdfplumber


def check_for_text_between_tables(pdf_path):
    with pdfplumber.open(pdf_path) as pdf:
        total_pages = len(pdf.pages)
        for i in range(total_pages - 1):
            page = pdf.pages[i]
            next_page = pdf.pages[i + 1]
            
            # 假定页眉和页码的大致位置
            header_footer_height = 50  # 可根据需要调整

            # 定位当前页的表格结束位置和下一页表格开始位置
            if page.extract_tables():
                last_row_bottom = max([cell[3] for cell in page.chars if cell[1] == page.extract_tables()[-1][-1][-1]])
            else:
                last_row_bottom = 0
            
            if next_page.extract_tables():
                first_row_top = min([cell[3] for cell in next_page.chars if cell[1] == next_page.extract_tables()[0][0][0]])
            else:
                first_row_top = page.height
            
            # 提取两表格间的文本，忽略页眉和页码
            text_between = page.crop((0, last_row_bottom + header_footer_height, page.width, page.height - header_footer_height)).extract_text()
            text_between += next_page.crop((0, header_footer_height, next_page.width, first_row_top - header_footer_height)).extract_text()
            
            # 检查是否有实质性文本
            if text_between and text_between.strip():
                print(f"Page {i+1} and Page {i+2} have text between tables. They might be separate tables.")
            else:
                print(f"Page {i+1} and Page {i+2} do not have significant text between tables. They might be continuous.")

if __name__ == "__main__":
    check_for_text_between_tables("path_to_your_pdf.pdf")
