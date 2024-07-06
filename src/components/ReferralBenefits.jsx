import React from 'react';
// import './ReferralBenefits.css';

function ReferralBenefits() {
  return (
    <div className="referral-benefits">
      <h2>What Are The Referral Benefits?</h2>
      <table>
        <thead>
          <tr>
            <th>Programs</th>
            <th>Referrer Bonus</th>
            <th>Referee Bonus</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Program 1</td>
            <td>₹7,000</td>
            <td>₹9,000</td>
          </tr>
          <tr>
            <td>Program 2</td>
            <td>₹10,000</td>
            <td>₹11,000</td>
          </tr>
          {/* Add more rows as needed */}
        </tbody>
      </table>
      <button>Refer Now</button>
    </div>
  );
}

export default ReferralBenefits;
