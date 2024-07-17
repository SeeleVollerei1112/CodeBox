package org.example;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Map;

public class ExcelToNestedMap {

    public static void main(String[] args) throws Exception {
        InputStream inputStream = new FileInputStream("test.xlsx");
        Workbook workbook = new XSSFWorkbook(inputStream);
        Sheet sheet = workbook.getSheetAt(0);

        Map<String, Map<String, String>> dataMap = new HashMap<>();

        Row firstRow = sheet.getRow(0);
        int numColumns = firstRow.getLastCellNum();
        String[] columnTitles = new String[numColumns];
        for (int i = 1; i < numColumns; i++) {
            columnTitles[i] = getCellValueAsString(firstRow.getCell(i));
        }

        for (int rowIndex = 1; rowIndex <= sheet.getLastRowNum(); rowIndex++) {
            Row row = sheet.getRow(rowIndex);
            if (row != null) {
                String rowTitle = getCellValueAsString(row.getCell(0));
                Map<String, String> columnMap = new HashMap<>();

                for (int colIndex = 1; colIndex < numColumns; colIndex++) {
                    Cell cell = row.getCell(colIndex);
                    if (cell != null) {
                        String cellValue = getCellValueAsString(cell);
                        columnMap.put(columnTitles[colIndex], cellValue);
                    }
                }
                dataMap.put(rowTitle, columnMap);
            }
        }

        workbook.close();
        inputStream.close();

        System.out.println(dataMap);
    }

    private static String getCellValueAsString(Cell cell) {
        switch (cell.getCellType()) {
            case STRING:
                return cell.getStringCellValue();
            case NUMERIC:
                if (DateUtil.isCellDateFormatted(cell)) {
                    return cell.getDateCellValue().toString(); // 或者使用更合适的日期格式化
                } else {
                    return Double.toString(cell.getNumericCellValue());
                }
            case BOOLEAN:
                return Boolean.toString(cell.getBooleanCellValue());
            case FORMULA:
                return cell.getCellFormula();
            case BLANK:
                return "";
            default:
                return cell.toString();
        }
    }
}


