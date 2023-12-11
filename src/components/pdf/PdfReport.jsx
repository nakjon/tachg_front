import { PDFViewer, usePDF } from "@react-pdf/renderer";


const PdfReport = ({
    Document
  }) => {
    // const [instance, updateInstance] = usePDF({ document: <Document /> });
  
    // console.log('aaaaaaaaaa',instance)
    // if (instance.loading) return <div>Loading ...</div>;
  
    // if (instance.error) return <div>Something went wrong: </div>;
    return (
      <>
        {/* <a href={instance.url} download="test.pdf">
          Download
        </a> */}
        <PDFViewer  className="btn-primary" style={{ width: "100%", height: "800px" }}>
          <Document />
        </PDFViewer>
      </>
    );
  };
  export default PdfReport;