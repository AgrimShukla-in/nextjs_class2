
export const VERIFY_TEMPLATE = (name: string, link: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Verify Your Email</title>
  <style>
    /* Base styles */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      color: #333;
    }
    
    /* Main container */
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    /* Header section with gradient */
    .header {
      background: linear-gradient(135deg, #0A84FF, #3A3AE0);
      color: #ffffff;
      text-align: center;
      padding: 30px 20px;
      position: relative;
      overflow: hidden;
    }
    
    /* Decorative elements */
    .header-decoration {
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 100%;
      height: 30px;
      background: linear-gradient(135deg, #9B59F2 25%, #FF3B6E 50%, #32D6C5 75%);
      opacity: 0.7;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75% 65%, 50% 100%, 25% 65%, 0% 100%);
    }
    
    /* Logo container */
    .logo-container {
      margin-bottom: 15px;
    }
    
    /* Content area */
    .content {
      padding: 35px 30px;
      color: #51545E;
      line-height: 1.6;
      font-size: 16px;
    }
    
    /* Button styling */
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    
    .button {
      display: inline-block;
      background: linear-gradient(to right, #0A84FF, #3A3AE0);
      color: #ffffff;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 50px;
      font-weight: bold;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 10px rgba(10, 132, 255, 0.3);
      transition: all 0.3s ease;
    }
    
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(10, 132, 255, 0.4);
    }
    
    /* Link styling */
    .content a {
      color: #0A84FF;
      text-decoration: none;
      border-bottom: 1px solid #0A84FF;
      padding-bottom: 2px;
      transition: all 0.2s ease;
    }
    
    .content a:hover {
      color: #3A3AE0;
      border-color: #3A3AE0;
    }
    
    /* Link container */
    .link-container {
      background-color: #f4f8ff;
      border-radius: 6px;
      padding: 12px 15px;
      margin: 20px 0;
      border-left: 4px solid #0A84FF;
      word-break: break-all;
      font-size: 14px;
    }
    
    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, #0A84FF, #3A3AE0, #9B59F2, #FF3B6E, #32D6C5);
      margin: 25px 0;
      border: none;
    }
    
    /* Footer styling */
    .footer {
      background-color: #f8f9fa;
      font-size: 12px;
      color: #6B7280;
      text-align: center;
      padding: 25px 20px;
      border-top: 1px solid #eaeaea;
    }
    
    .social-links {
      margin: 15px 0;
    }
    
    .social-icon {
      display: inline-block;
      width: 32px;
      height: 32px;
      background-color: #0A84FF;
      border-radius: 50%;
      margin: 0 8px;
      text-align: center;
      line-height: 32px;
    }
    
    /* Responsive adjustments */
    @media (max-width: 480px) {
      .container {
        margin: 10px;
        width: auto;
      }
      
      .content {
        padding: 25px 20px;
      }
      
      .button {
        width: 100%;
        text-align: center;
        padding: 14px 5px;
      }
    }
  </style>
</head>
<body>
  <table role="presentation" class="container" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td>
        <div class="header">
          <div class="logo-container">
            <!-- SVG logo -->
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="white" fill-opacity="0.9"/>
              <path d="M35 50C35 41.716 41.716 35 50 35C58.284 35 65 41.716 65 50C65 58.284 58.284 65 50 65" stroke="#32D6C5" stroke-width="5" stroke-linecap="round"/>
              <path d="M50 65C41.716 65 35 58.284 35 50" stroke="#FF3B6E" stroke-width="5" stroke-linecap="round"/>
              <path d="M30 50H70" stroke="#9B59F2" stroke-width="3" stroke-linecap="round"/>
            </svg>
          </div>
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Welcome to TechNexus!</h1>
          <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">One more step to get started</p>
          <div class="header-decoration"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="content">
        <p style="font-size: 18px;">Hi ${name},</p>
        
        <p>Thanks for joining TechNexus! We're excited to have you on board. To start exploring all our features, please verify your email address.</p>
        
        <div class="button-container">
          <a href="${link}" class="button">Verify My Email</a>
        </div>
        
        <p>This link will expire in 24 hours. If the button doesn't work, copy and paste this link into your browser:</p>
        
        <div class="link-container">
          <a href="${link}">${link}</a>
        </div>
        
        <hr class="divider">
        
        <p style="font-size: 15px;">Here's what you can do after verification:</p>
        <ul>
          <li>Set up your profile</li>
          <li>Connect with team members</li>
          <li>Access premium features</li>
          <li>Explore our documentation</li>
        </ul>
        
        <p>If you have any questions, feel free to contact our support team.</p>
        
        <p style="margin-top: 25px;">The TechNexus Team</p>
      </td>
    </tr>
    <tr>
      <td class="footer">
        <p style="margin-bottom: 15px; font-weight: 500;">TechNexus • Innovating Together</p>
        
        <div class="social-links">
          <!-- Social media icons -->
          <a href="#" class="social-icon" style="background-color: #0A84FF;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
            </svg>
          </a>
          <a href="#" class="social-icon" style="background-color: #3A3AE0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#" class="social-icon" style="background-color: #9B59F2;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="black"></path>
              <circle cx="17.5" cy="6.5" r="1.5" fill="black"></circle>
            </svg>
          </a>
        </div>
        
        <p style="margin-bottom: 5px;">1234 Innovation Drive • Techville, CA 90210</p>
        <p style="margin-bottom: 15px;">If you didn't sign up for TechNexus, please ignore this email.</p>
        
        <p>
          <a href="#" style="color: #0A84FF; margin: 0 10px; text-decoration: none;">Unsubscribe</a> • 
          <a href="#" style="color: #0A84FF; margin: 0 10px; text-decoration: none;">Privacy Policy</a> • 
          <a href="#" style="color: #0A84FF; margin: 0 10px; text-decoration: none;">Contact Us</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`
    
export const RESET_TEMPLATE = (name: string, link: string) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reset Your Password</title>
  <style>
    /* Base styles */
    body {
      margin: 0;
      padding: 0;
      background-color: #f4f4f7;
      font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      color: #333;
    }
    
    /* Main container */
    .container {
      width: 100%;
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    /* Header section with gradient */
    .header {
      background: linear-gradient(135deg, #FF3B6E, #9B59F2);
      color: #ffffff;
      text-align: center;
      padding: 30px 20px;
      position: relative;
      overflow: hidden;
    }
    
    /* Decorative elements */
    .header-decoration {
      position: absolute;
      bottom: -15px;
      left: 0;
      width: 100%;
      height: 30px;
      background: linear-gradient(135deg, #3A3AE0 25%, #0A84FF 50%, #32D6C5 75%);
      opacity: 0.7;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 75% 65%, 50% 100%, 25% 65%, 0% 100%);
    }
    
    /* Security icon */
    .security-icon {
      margin-bottom: 15px;
    }
    
    /* Content area */
    .content {
      padding: 35px 30px;
      color: #51545E;
      line-height: 1.6;
      font-size: 16px;
    }
    
    /* Alert box */
    .alert-box {
      background-color: #fff5f8;
      border-radius: 6px;
      padding: 15px;
      margin: 25px 0;
      border-left: 4px solid #FF3B6E;
    }
    
    /* Button styling */
    .button-container {
      text-align: center;
      margin: 30px 0;
    }
    
    .button {
      display: inline-block;
      background: linear-gradient(to right, #FF3B6E, #9B59F2);
      color: #ffffff;
      text-decoration: none;
      padding: 14px 28px;
      border-radius: 50px;
      font-weight: bold;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 10px rgba(255, 59, 110, 0.3);
      transition: all 0.3s ease;
    }
    
    .button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 15px rgba(255, 59, 110, 0.4);
    }
    
    /* Link styling */
    .content a {
      color: #FF3B6E;
      text-decoration: none;
      border-bottom: 1px solid #FF3B6E;
      padding-bottom: 2px;
      transition: all 0.2s ease;
    }
    
    .content a:hover {
      color: #9B59F2;
      border-color: #9B59F2;
    }
    
    /* Link container */
    .link-container {
      background-color: #f9f5ff;
      border-radius: 6px;
      padding: 12px 15px;
      margin: 20px 0;
      border-left: 4px solid #9B59F2;
      word-break: break-all;
      font-size: 14px;
    }
    
    /* Timeline indicators */
    .timeline {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 30px 0;
    }
    
    .timeline-step {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
    
    .timeline-dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: #FF3B6E;
      margin-bottom: 8px;
    }
    
    .timeline-label {
      font-size: 12px;
      text-align: center;
      color: #6B7280;
    }
    
    .timeline-line {
      height: 2px;
      flex: 1;
      background: linear-gradient(to right, #FF3B6E, #9B59F2);
      margin: 0 5px;
      margin-bottom: 20px;
    }
    
    /* Divider */
    .divider {
      height: 1px;
      background: linear-gradient(to right, #FF3B6E, #9B59F2, #3A3AE0, #0A84FF, #32D6C5);
      margin: 25px 0;
      border: none;
    }
    
    /* Footer styling */
    .footer {
      background-color: #f8f9fa;
      font-size: 12px;
      color: #6B7280;
      text-align: center;
      padding: 25px 20px;
      border-top: 1px solid #eaeaea;
    }
    
    .social-links {
      margin: 15px 0;
    }
    
    .social-icon {
      display: inline-block;
      width: 32px;
      height: 32px;
      background-color: #FF3B6E;
      border-radius: 50%;
      margin: 0 8px;
      text-align: center;
      line-height: 32px;
    }
    
    /* Responsive adjustments */
    @media (max-width: 480px) {
      .container {
        margin: 10px;
        width: auto;
      }
      
      .content {
        padding: 25px 20px;
      }
      
      .button {
        width: 100%;
        text-align: center;
        padding: 14px 5px;
      }
      
      .timeline {
        flex-direction: column;
        align-items: flex-start;
      }
      
      .timeline-step {
        flex-direction: row;
        margin-bottom: 15px;
      }
      
      .timeline-dot {
        margin-right: 10px;
        margin-bottom: 0;
      }
      
      .timeline-line {
        display: none;
      }
    }
  </style>
</head>
<body>
  <table role="presentation" class="container" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td>
        <div class="header">
          <div class="security-icon">
            <!-- Lock SVG icon -->
            <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="white" fill-opacity="0.9"/>
              <rect x="30" y="45" width="40" height="30" rx="5" fill="#FF3B6E"/>
              <path d="M40 45V35C40 29.477 44.477 25 50 25V25C55.523 25 60 29.477 60 35V45" stroke="white" stroke-width="5"/>
              <circle cx="50" cy="60" r="5" fill="white"/>
              <rect x="48" y="60" width="4" height="8" rx="2" fill="white"/>
            </svg>
          </div>
          <h1 style="margin: 0; font-size: 28px; font-weight: 700;">Password Reset</h1>
          <p style="margin: 10px 0 0; opacity: 0.9; font-size: 16px;">Secure your account</p>
          <div class="header-decoration"></div>
        </div>
      </td>
    </tr>
    <tr>
      <td class="content">
        <p style="font-size: 18px;">Hello ${name},</p>
        
        <p>We received a request to reset your password for your TechNexus account. For your security, this link will expire in <strong>60 minutes</strong>.</p>
        
        <div class="button-container">
          <a href="${link}" class="button">Reset My Password</a>
        </div>
        
        <div class="timeline">
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-label">Request<br>Received</div>
          </div>
          <div class="timeline-line"></div>
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-label">Set New<br>Password</div>
          </div>
          <div class="timeline-line"></div>
          <div class="timeline-step">
            <div class="timeline-dot"></div>
            <div class="timeline-label">Account<br>Secured</div>
          </div>
        </div>
        
        <p>If the button doesn't work, copy and paste this link into your browser:</p>
        
        <div class="link-container">
          <a href="${link}">${link}</a>
        </div>
        
        <div class="alert-box">
          <p style="margin: 0; font-weight: 500;">🔒 Security Note:</p>
          <p style="margin-top: 8px; margin-bottom: 0;">If you didn't request this password reset, please contact our support team immediately as your account may be at risk.</p>
        </div>
        
        <hr class="divider">
        
        <p style="margin-top: 25px;">The TechNexus Security Team</p>
      </td>
    </tr>
    <tr>
      <td class="footer">
        <p style="margin-bottom: 15px; font-weight: 500;">TechNexus • Innovating Together</p>
        
        <div class="social-links">
          <!-- Social media icons -->
          <a href="#" class="social-icon" style="background-color: #FF3B6E;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z"></path>
            </svg>
          </a>
          <a href="#" class="social-icon" style="background-color: #9B59F2;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="#" class="social-icon" style="background-color: #3A3AE0;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" fill="black"></path>
              <circle cx="17.5" cy="6.5" r="1.5" fill="black"></circle>
            </svg>
          </a>
        </div>
        
        <p style="margin-bottom: 5px;">1234 Innovation Drive • Techville, CA 90210</p>
        <p style="margin-bottom: 15px;">If you need help, reply to this email any time.</p>
        
        <p>
          <a href="#" style="color: #FF3B6E; margin: 0 10px; text-decoration: none;">Help Center</a> • 
          <a href="#" style="color: #FF3B6E; margin: 0 10px; text-decoration: none;">Privacy Policy</a> • 
          <a href="#" style="color: #FF3B6E; margin: 0 10px; text-decoration: none;">Contact Us</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;