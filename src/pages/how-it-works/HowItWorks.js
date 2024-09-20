import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import styles from "../../styles/ChatCreate.module.css";
import TopBox from "../../components/TopBox";
import { Button as ManButton } from "@mantine/core";
import { YOUTUBE_URL } from "../../utils/config";

export default function () {
  return (
    <div>
      <div className="mx-md-5">
        <TopBox title="How it Works" />
      </div>
      <Row>
        <Col className={`${styles.Back} mt-3`} md={{ span: 8, offset: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            {/* Left side: YouTube iFrame */}
            <div style={{ flex: 1, paddingRight: "15px" }}>
              <iframe
                width="100%"
                height="315"
                src={YOUTUBE_URL} // Replace with your dummy YouTube link
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Right side: Description */}
            <div style={{ flex: 1, paddingLeft: "15px" }}>
              <h5>Description</h5>
              <p>
                This is a description of the Short Call. Here you can provide
                more details about the content, its significance, or any other
                relevant information that the viewer might find useful.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
