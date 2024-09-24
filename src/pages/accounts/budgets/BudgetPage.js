/* Page to fetch the Project's Budget data
 * Contains the Budget Component to which it passes the data*/
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRedirect from "../../../hooks/Redirect";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import { axiosReq } from "../../../api/axiosDefaults";
import Budget from "./Budget";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const BudgetPage = () => {
  useRedirect();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [budget1, setBudget1] = useState({ results: [] });
  const [budget2, setBudget2] = useState({ results: [] });
  const [budget3, setBudget3] = useState({ results: [] });
  const { id } = useParams();

  useEffect(() => {
    const fetchBudget = async () => {
      try {
        const [{ data: budget1 }, { data: budget2 }, { data: budget3 }] =
          await Promise.all([
            axiosReq.get(id ? `/budgets1/?project=${id}` : `/budgets1/`),
            axiosReq.get(id ? `/budgets2/?project=${id}` : `/budgets2/`),
            axiosReq.get(id ? `/budgets3/?project=${id}` : `/budgets3/`),
          ]);
        setBudget1({ results: [budget1] });
        setBudget2({ results: [budget2] });
        setBudget3({ results: [budget3] });
        setHasLoaded(true);
        // console.log(budget1);
        // console.log(budget2);
        // console.log(budget3);
        // const { data } = await axiosReq.get(`/budgets/?project=${id}`);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBudget();
  }, [id]);

  const handleDownload = () => {
    const input = document.getElementById("pdf-content"); // Change this to the ID of your scrollable content

    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 size width in mm
      const pageHeight = 295; // A4 size height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const heightLeft = imgHeight;

      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      position -= pageHeight;

      // Add new page if there's more content
      while (heightLeft + position >= 0) {
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        position -= pageHeight;
      }

      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "1rem",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <div></div>
        <Button onClick={handleDownload}>Download PDF</Button>
      </Row>
      {/* budget */}
      <Row>
        <Col id="pdf-content" className="py-2 p-0 p-lg-2">
          {hasLoaded ? (
            <Budget
              budget1={budget1.results[0]}
              budget2={budget2.results[0]}
              budget3={budget3.results[0]}
              projectId={id}
            />
          ) : (
            ""
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BudgetPage;
