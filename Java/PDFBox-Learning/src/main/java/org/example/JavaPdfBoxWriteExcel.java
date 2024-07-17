package org.example;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;
import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import technology.tabula.ObjectExtractor;
import technology.tabula.Page;
import technology.tabula.PageIterator;
import technology.tabula.RectangularTextContainer;
import technology.tabula.Table;
import technology.tabula.extractors.SpreadsheetExtractionAlgorithm;

public class JavaPdfBoxWriteExcel {

    public static void main(String[] args) throws IOException {
        String inputFile = URLDecoder.decode(Objects
                        .requireNonNull(JavaPdfBoxWriteExcel.class.getClassLoader().getResource("分众传媒：2020年年度报告.PDF")).getFile(),
                StandardCharsets.UTF_8);

        String outputFile = "target/classes/table_output.xlsx";

        try (PDDocument document = Loader.loadPDF(new File(inputFile));
             Workbook workbook = new XSSFWorkbook()) {

            Sheet sheet = workbook.createSheet("Extracted Tables");

            SpreadsheetExtractionAlgorithm sea = new SpreadsheetExtractionAlgorithm();
            PageIterator pi = new ObjectExtractor(document).extract();
            int rowNum = 0;

            while (pi.hasNext()) {
                Page page = pi.next();
                List<Table> tables = sea.extract(page);

                for (Table table : tables) {
                    for (List<RectangularTextContainer> row : table.getRows()) {
                        Row sheetRow = sheet.createRow(rowNum++);
                        int cellNum = 0;
                        for (RectangularTextContainer cell : row) {
                            Cell sheetCell = sheetRow.createCell(cellNum++);
                            sheetCell.setCellValue(cell.getText().trim());
                        }
                    }
                    rowNum++;
                }
            }

            try (FileOutputStream outputStream = new FileOutputStream(outputFile)) {
                workbook.write(outputStream);
            }
        }
    }
}

