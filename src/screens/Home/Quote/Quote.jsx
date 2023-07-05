import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../../../core/components/button/Button";
import {
  AllStyledH2,
  AllStyledH3,
  AllStyledP1B,
  AllStyledP2B,
  AllStyledT01,
  AllStyledT02,
} from "../../../features/mainStyles.style";
import { QuoteBackground, QuoteConvServImg, QuoteInput } from "./Quote.style";

import { useTranslation } from "react-i18next";

import ConvenietServiceImg from "./img/ConvenietServiceImg.svg";
import ArrowImg from "./img/Arrow.svg";

export const Quote = () => {
  const { t } = useTranslation();
  return (
    <QuoteBackground>
      <Container className="py-5 d-flex">
        <Col>
          <AllStyledH2 className="fw-bold">{t("HomeQuoteTitle")}</AllStyledH2>
          <div className="my-5">
            <div className="d-flex">
              <div>
                <QuoteConvServImg
                  src={ConvenietServiceImg}
                  alt="Conveniet Service Img"
                  className="m-0 p-0"
                />
              </div>
              <Col style={{ maxWidth: "350px" }}>
                <AllStyledT02 className="mx-3">
                  {t("HomeQuoteConvenientService")}
                </AllStyledT02>
                <AllStyledP2B className="text-muted mx-3">
                  {t("HomeQuoteConvenientServiceBody")}
                </AllStyledP2B>
              </Col>
            </div>
            <div className="d-flex my-3">
              <div>
                <QuoteConvServImg
                  src={ConvenietServiceImg}
                  alt="Conveniet Service Img"
                  className="m-0 p-0"
                />
              </div>
              <Col style={{ maxWidth: "350px" }}>
                <AllStyledT02 className="mx-3">
                  {t("HomeQuoteExperMechanics")}
                </AllStyledT02>
                <AllStyledP2B className="text-muted mx-3">
                  {t("HomeQuoteExperMechanicsBody")}
                </AllStyledP2B>
              </Col>
            </div>
            <div className="d-flex my-3">
              <div>
                <QuoteConvServImg
                  src={ConvenietServiceImg}
                  alt="Conveniet Service Img"
                  className="m-0 p-0"
                />
              </div>
              <Col style={{ maxWidth: "350px" }}>
                <AllStyledT02 className="mx-3">
                  {t("HomeQuoteTransparentPricing")}
                </AllStyledT02>
                <AllStyledP2B className="text-muted mx-3">
                  {t("HomeQuoteTransparentPricingBody")}
                </AllStyledP2B>
              </Col>
            </div>
          </div>
          <div>
            <AllStyledP1B className="mx-5">
              {t("HomeQuoteKnowMore")}{" "}
              <img src={ArrowImg} alt="Arrow" className="mx-3" />
            </AllStyledP1B>
          </div>
        </Col>

        <Col>
          <AllStyledH3>{t("HomeQuoteForTheCar")}</AllStyledH3>
          <div className="my-4">
            <QuoteInput type="text" placeholder={t("HomeQuoteEnterLocation")} />
            <QuoteInput type="text" placeholder={t("HomeQuoteEnterLocation")} />
            <QuoteInput type="text" placeholder={t("HomeQuoteEnterLocation")} />
            <QuoteInput type="text" placeholder={t("HomeQuotePhoneNumber")} />
          </div>

          <div className="my-4">
            <Button title={"Get your quote"} />
          </div>
        </Col>
      </Container>
    </QuoteBackground>
  );
};
