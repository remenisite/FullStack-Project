const emailTemplate = ({ otp }) => {
  return `
  <div style="margin:0; padding:0; background-color:#f5f5f5; font-family:Arial, sans-serif;">
    
    <table align="center" width="100%" cellpadding="0" cellspacing="0" style="padding:20px 0;">
      <tr>
        <td align="center">
          
          <table width="500" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#000; color:#fff; text-align:center; padding:20px; font-size:22px; font-weight:bold;">
                🛍️ Remenisite
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:30px; color:#333;">
                
                <h2 style="margin-top:0;">Hello Dear,</h2>
                
                <p style="font-size:16px; line-height:1.5;">
                  Thank you for signing up with us! Please use the OTP below to verify your email address.
                </p>

                <!-- OTP Box -->
                <div style="text-align:center; margin:30px 0;">
                  <span style="
                    display:inline-block;
                    background:#f1f1f1;
                    padding:15px 30px;
                    font-size:28px;
                    letter-spacing:5px;
                    font-weight:bold;
                    color:#000;
                    border-radius:8px;
                  ">
                    ${otp}
                  </span>
                </div>

                <p style="font-size:14px; color:#777;">
                  This OTP is valid for 5 minutes. Please do not share it with anyone.
                </p>

                <p style="font-size:14px; margin-top:20px;">
                  If you did not request this, you can safely ignore this email.
                </p>

              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#fafafa; text-align:center; padding:20px; font-size:12px; color:#999;">
                © ${new Date().getFullYear()} Remenisite. All rights reserved.
              </td>
            </tr>

          </table>

        </td>
      </tr>
    </table>

  </div>
  `;
};

module.exports = emailTemplate;
