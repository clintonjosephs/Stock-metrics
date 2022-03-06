/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import NumberFormat from 'react-number-format';
import styles from '../styles/Details.module.css';

const Profile = () => {
  const data = {
    symbol: 'AAPL',
    price: 163.32,
    beta: 1.187468,
    volAvg: 98568744,
    mktCap: 2670576271360,
    lastDiv: 0.88,
    range: '116.21-182.94',
    changes: -2.9099884,
    companyName: 'Apple Inc.',
    currency: 'USD',
    cik: '0000320193',
    isin: 'US0378331005',
    cusip: '037833100',
    exchange: 'Nasdaq Global Select',
    exchangeShortName: 'NASDAQ',
    industry: 'Consumer Electronics',
    website: 'https://www.apple.com',
    description:
      'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. It also sells various related services. In addition, the company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; AirPods Max, an over-ear wireless headphone; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, HomePod, and iPod touch. Further, it provides AppleCare support services; cloud services store services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts. Additionally, the company offers various services, such as Apple Arcade, a game subscription service; Apple Music, which offers users a curated listening experience with on-demand radio stations; Apple News+, a subscription news and magazine service; Apple TV+, which offers exclusive original content; Apple Card, a co-branded credit card; and Apple Pay, a cashless payment service, as well as licenses its intellectual property. The company serves consumers, and small and mid-sized businesses; and the education, enterprise, and government markets. It distributes third-party applications for its products through the App Store. The company also sells its products through its retail and online stores, and direct sales force; and third-party cellular network carriers, wholesalers, retailers, and resellers. Apple Inc. was incorporated in 1977 and is headquartered in Cupertino, California.',
    ceo: 'Mr. Timothy Cook',
    sector: 'Technology',
    country: 'US',
    fullTimeEmployees: '100000',
    phone: '14089961010',
    address: '1 Apple Park Way',
    city: 'Cupertino',
    state: 'CALIFORNIA',
    zip: '95014',
    dcfDiff: 89.92,
    dcf: 168.302,
    image: 'https://financialmodelingprep.com/image-stock/F.png',
    ipoDate: '1980-12-12',
    defaultImage: false,
    isEtf: false,
    isActivelyTrading: true,
    isAdr: false,
    isFund: false,
  };
  return (
    <Container className={styles.marginCreate}>
      <Row
        className={`${styles.row} justify-content-center align-content-center mx-lg-5 mt-5`}
      >
        <Col xs={12} md={9}>
          <div>
            {' '}
            <span>CompanyName: </span>
            {' '}
&nbsp;
            {data.companyName}
          </div>
          <div>
            {' '}
            <span>Symbol: </span>
            {' '}
&nbsp;
            {data.symbol}
          </div>
          <div>
            {' '}
            <span>Description:</span>
            {' '}
&nbsp;
            { `${data.description <= 120 ? data.description : `${data.description.substring(0, 120)}... click website link to read more`}` }
          </div>
          <div>
            {' '}
            <span>Web Addr.: </span>
            {' '}
&nbsp;
            <a href={data.website} target="_blank" rel="noreferrer">{ data.website }</a>
          </div>
          <div>
            {' '}
            <span>Country: </span>
            {' '}
&nbsp;
            {data.country}
          </div>
          <div>
            <NumberFormat
              value={data.mktCap}
              className="foo"
              displayType="text"
              thousandSeparator
              prefix="$"
              renderText={(value, props) => (
                <div {...props}>
                  {' '}
                  <span>Market Cap: </span>
                  {' '}
&nbsp;
                  {value}
                </div>
              )}
            />

          </div>
          <div>
            <span>Price: </span>

            {' '}
            {data.price}
            ,
          </div>
          <div>
            <BsArrowUp color="green" className="blink" />
            {' '}
            {data.beta}
          </div>
          <div>
            <BsArrowDown color="red" className="blink" />
            {' '}
            {data.changes}
          </div>
        </Col>
        <Col xs={12} md={3}>
          <img src={data.image} alt="company" className="rounded" style={{ minWidth: '11rem' }} />
          <div>
            {data.ceo}
            , CEO
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
