import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const IncomeStatement = () => {
  const navigate = useNavigate();
  return (
    <div>
      <AiOutlineArrowLeft onClick={() => navigate('/')} />
      <h1>Welcome to detail</h1>
    </div>
  );
};

export default IncomeStatement;
