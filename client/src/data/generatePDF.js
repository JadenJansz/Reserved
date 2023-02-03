import jsPDF from "jspdf";
import "jspdf-autotable";

// define a generatePDF function that accepts a tickets argument
const generatePDF = (data, criteria) => {
  // initialize jsPDF
  const doc = new jsPDF();

  // define the columns we want and their titles
  const tableColumn = ["Restaurant Name", "Date", "TableSize"];
  // define an empty array of rows
  const tableRows = [];

  // for each ticket pass all its data into an array
  data.forEach(sdata => {
    const reportData = [
      sdata.Name,
      sdata.Date.substring(0,10),
      sdata.TableSize,
      // called date-fns to format the date on the ticket
      // format(new Date(ticket.updated_at), "yyyy-MM-dd")
    ];
    // push each tickcet's info into a row
    tableRows.push(reportData);
  });


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // ticket title. and margin-top + margin-left
  doc.text("Closed tickets within the last one month.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;