import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { AMOUNT_TYPE } from '@constants/type';

const style = require('./expenseInfo.scss');
const cx = classNames.bind(style);

const ExpenseInfo = ({
  country,
  displayValue,
  amountType,
  onSetAmountType
}) => {
  let currency = '';

  try {
    currency = country.currency;
  } catch {
    console.log('화페 없음.');
  }

  return (
    <div className={cx('expense_info')} style={{ backgroundColor: 'rgb(253, 200, 200)' }}>
      <div className={cx('top_area')}>
        <span className={cx('expense_type')}>지출</span>
        <span className={cx('currency_type')}>예산: <span className={cx('currency')}>{currency.en}</span></span>
      </div>
      <div className={cx('middle_area')}>
        <img src={country.imgUrl} alt={country.name} className={cx('flag')} />
        <em className={cx('currency')}>{currency.en}</em>
        <div className={cx('amount')}>{displayValue}</div>
      </div>
      <div className={cx('bottom_area')}>
        <button
          className={cx('icon', 'ready_money')}
          aria-selected={amountType === AMOUNT_TYPE.READY_MONEY}
          onClick={() => onSetAmountType(AMOUNT_TYPE.READY_MONEY)}>
          <span className={cx('blind')}>현금</span>
        </button>
        <button
          className={cx('icon', 'card')}
          aria-selected={amountType === AMOUNT_TYPE.CARD}
          onClick={() => onSetAmountType(AMOUNT_TYPE.CARD)}>
          <span className={cx('blind')}>카드</span>
        </button>
        <p className={cx('converted_amount')}>{currency.en} <span className={cx('money')}>*</span></p>
      </div>
    </div>
  );
};

ExpenseInfo.propTypes = {
  country: PropTypes.object,
  displayValue: PropTypes.string,
  amountType: PropTypes.string,
  onSetAmountType: PropTypes.func
};


export default hot(ExpenseInfo);
