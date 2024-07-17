package org.example;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Objects;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;

import technology.tabula.ObjectExtractor;
import technology.tabula.Page;
import technology.tabula.PageIterator;
import technology.tabula.RectangularTextContainer;
import technology.tabula.Table;
import technology.tabula.extractors.SpreadsheetExtractionAlgorithm;

public class JavaPdfBoxWriteText {

    public static void main(String[] args) throws IOException {
        String inputFile = URLDecoder.decode(Objects
                .requireNonNull(JavaPdfBoxReadText.class.getClassLoader().getResource("分众传媒：2020年年度报告.PDF")).getFile(),
                StandardCharsets.UTF_8);

        String outputFile = "target/classes/table_output.txt";

        try (PDDocument document = Loader.loadPDF(new File(inputFile));
                BufferedWriter writer = new BufferedWriter(new FileWriter(new File(outputFile)))) {

            SpreadsheetExtractionAlgorithm sea = new SpreadsheetExtractionAlgorithm();
            PageIterator pi = new ObjectExtractor(document).extract();

            while (pi.hasNext()) {
                Page page = pi.next();
                List<Table> tables = sea.extract(page);

                for (Table table : tables) {
                    writer.write("Table:\n");
                    List<List<RectangularTextContainer>> rows = table.getRows();

                    for (List<RectangularTextContainer> row : rows) {
                        for (RectangularTextContainer cell : row) {
                            String text = cell.getText().replace("\\r", " ").trim();
                            writer.write(text + "\t"); // 使用制表符分隔单元格
                        }
                        writer.write("\n"); // 换行表示新的一行
                    }
                    writer.write("\n"); // 在表格之间添加一个空行
                }
            }
        }
    }
}
