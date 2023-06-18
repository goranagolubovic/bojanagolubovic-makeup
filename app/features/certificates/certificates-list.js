import React from "react";
import "../../../style/style.css";
const CertificatesList = ({
  titleStyle,
  certificatesContainerStle,
  title,
  children,
}) => {
  return (
    <div className={certificatesContainerStle}>
      <p className={titleStyle}>{title}</p>
      <div>{children}</div>
    </div>
  );
};

export default CertificatesList;
