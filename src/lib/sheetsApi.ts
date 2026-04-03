// You will replace this with your deployed Google Apps Script Web App URL later
export const GOOGLE_SHEETS_MACRO_URL = "YOUR_MACRO_URL_HERE";

/**
 * Fetches data from a specific sheet in your Google Sheets database.
 * @param sheetName The exact name of the tab in your Google Sheet (e.g., "Vocab_N2", "Past_Papers")
 * @returns An array of objects representing the rows in the sheet.
 */
export async function fetchSheetData<T>(sheetName: string): Promise<T[]> {
  if (GOOGLE_SHEETS_MACRO_URL === "YOUR_MACRO_URL_HERE") {
    console.warn("Google Sheets Macro URL is not set. Returning empty array.");
    return [];
  }

  try {
    const response = await fetch(`${GOOGLE_SHEETS_MACRO_URL}?sheet=${sheetName}`);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.success) {
      return result.data as T[];
    } else {
      console.error("Error from Google Sheets API:", result.error);
      return [];
    }
  } catch (error) {
    console.error("Failed to fetch data from Google Sheets:", error);
    return [];
  }
}

/**
 * Fetches all sheets at once (useful for initial app load if data is small)
 */
export async function fetchAllSheetsData() {
  if (GOOGLE_SHEETS_MACRO_URL === "YOUR_MACRO_URL_HERE") {
    console.warn("Google Sheets Macro URL is not set. Returning null.");
    return null;
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_MACRO_URL);
    const result = await response.json();
    
    if (result.success) {
      return result.data;
    } else {
      console.error("Error from Google Sheets API:", result.error);
      return null;
    }
  } catch (error) {
    console.error("Failed to fetch all data from Google Sheets:", error);
    return null;
  }
}
