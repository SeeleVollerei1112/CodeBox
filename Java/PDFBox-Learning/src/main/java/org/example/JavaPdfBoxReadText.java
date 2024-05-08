package org.example;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.text.PDFTextStripper;

public class JavaPdfBoxReadText {
    public static void main(String[] args) throws Exception {
        // 读取resources目录下input.pdf文件
        String inputFile = URLDecoder.decode(Objects
                .requireNonNull(JavaPdfBoxReadText.class.getClassLoader().getResource("分众传媒：2020年年度报告.PDF")).getFile(),
                StandardCharsets.UTF_8);

        PDDocument pdDocument = Loader.loadPDF(new File(inputFile));

        PDFTextStripper pdfTextStripper = new PDFTextStripper();

        // 读取pdf中所有的文本
        String fullText = pdfTextStripper.getText(pdDocument);

        // 获取输入PDF文件所在的目录路径
        String outputDir = new File(inputFile).getParent();

        // 将提取的文本写入到与输入PDF文件相同目录下的output.txt文件中
        try (FileWriter writer = new FileWriter(outputDir + File.separator + "output.txt")) {
            writer.write(fullText);
            System.out.println("PDF文本已成功写入到" + outputDir + File.separator + "output.txt文件中");
        } catch (IOException e) {
            e.printStackTrace();
        }

        pdDocument.close();
    }
}