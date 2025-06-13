import React, { useEffect, useState } from 'react'
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import useRedirect from '../../../hooks/Redirect';
import Budget from '../budgets/Budget';
import { Col, Row } from 'react-bootstrap';
import DownloadIcon from "../../../assets/download-icon.jpg";
import axios from 'axios';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
// import { jwtDecode } from "jwt-decode";
import jwtDecode from 'jwt-decode';
import Asset from '../../../components/Asset';
import NoImage from '../../../assets/no-results.png'
export const PublicBudgetListing = () => {
  // useRedirect();
  const [isGenerating, setIsGenerating] = useState(false); // State to manage button disable

  const [hasLoaded, setHasLoaded] = useState(false);
  const [budget1, setBudget1] = useState({ results: [] });
  const [budget2, setBudget2] = useState({ results: [] });
  const [budget3, setBudget3] = useState({ results: [] });
  const token = useParams();


  useEffect(() => {
    const decoded = jwtDecode(token?.id);
    const fetchBudget = async () => {
      try {

        const [{ data: b1 }, { data: b2 }, { data: b3 }] = await Promise.all([
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/budgets1/${decoded?.budget}`),
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/budgets2/?budget_id=${decoded?.budget}`),
          axios.get(`${process.env.REACT_APP_API_BASE_URL}/budgets3/?budget_id=${decoded?.budget}`),
        ]);
        setBudget1({ results: [b1] });
        setBudget2({ results: [b2] });
        setBudget3({ results: [b3] });
        setHasLoaded(true);
      } catch (err) {
        console.error("Budget fetch failed:", err);
      }
    };

    fetchBudget();
  }, []);

  const handleDownload = () => {
    setIsGenerating(true); // Disable button when generation starts

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
      setIsGenerating(false);
    });
  };

  return (
    <div>
      {/* budget */}
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
        <>
          {isGenerating ? (
            <div style={{}}>Generating PDF...</div>
          ) : (
            <>
              {hasLoaded && (
                <div onClick={handleDownload} style={{ cursor: "pointer" }}>
                  <img src={DownloadIcon} height={30} width={30} alt='download' />
                </div>
              )}
            </>
          )}
        </>
      </Row>
      <Row>
        <Col id="pdf-content" className="py-2 p-0 p-lg-2">
          {hasLoaded ? (
            <>
              {
                <Budget
                  budget1={budget1}
                  budget2={budget2.results[0]}
                  budget3={budget3.results[0]}
                  token={token?.id}
                />
              }
            </>
          ) : (
            <>{
              budget1.results.length === 0 && <Asset src={NoImage} message={'No Budget Found'} />
            }</>
          )}
        </Col>
      </Row>
    </div>
  );
}

