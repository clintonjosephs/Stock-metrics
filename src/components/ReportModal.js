import { Modal, Button } from 'react-bootstrap';
import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import {
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Area,
  ResponsiveContainer,
} from 'recharts';

const ReportModal = ({ show, onHide, data }) => (
  <>
    {ReactDom.createPortal(
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Income Statement in billions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ResponsiveContainer width="100%" height={360}>
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="var(--primary-color-1)"
                fillOpacity={1}
                fill="#fdac41"
              />
              <Area
                type="monotone"
                dataKey="costAndExpenses"
                stroke="var(--primary-color-1)"
                fillOpacity={0.5}
                fill="#ff6b6c"
              />
              <Area
                type="monotone"
                dataKey="grossProfit"
                stroke="var(--primary-color-1)"
                fillOpacity={0.5}
                fill="green"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>,
      document.getElementById('modal-root'),
    )}
  </>
);

ReportModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ReportModal;
