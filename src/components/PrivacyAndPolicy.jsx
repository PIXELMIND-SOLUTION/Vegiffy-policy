import React from "react";

const PrivacyAndPolicy = () => {
    return (
        <div className="container py-5 px-3" style={{ backgroundColor: "#fff" }}>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11 col-12">
                    <h1 className="mb-4 text-center fw-bold" style={{ color: "#2b2b2b" }}>
                        Privacy Policy - Vegiffyy
                    </h1>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">1. Information We Collect</h4>
                        <ul className="ps-3">
                            <li>Full Name, Phone Number, and Email Address</li>
                            <li>Delivery Address and Location Information</li>
                            <li>Order History and Preferences</li>
                            <li>Payment Method Details (via secure gateways)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">2. How We Use Your Information</h4>
                        <ul className="ps-3">
                            <li>Deliver 100% vegetarian meals to your location</li>
                            <li>Personalize food recommendations</li>
                            <li>Improve app performance and user experience</li>
                            <li>Process payments and provide order updates</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">3. How We Protect Your Data</h4>
                        <ul className="ps-3">
                            <li>Data encryption and secure cloud storage</li>
                            <li>Trusted third-party payment systems</li>
                            <li>Strict access control for sensitive data</li>
                            <li>Regular security updates and audits</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">4. Sharing Your Data</h4>
                        <p>We do <strong>not sell</strong> your data. We may share data only with:</p>
                        <ul className="ps-3">
                            <li>Delivery partners (to fulfill your orders)</li>
                            <li>Payment gateways (to process your transactions)</li>
                            <li>Analytics tools (for service improvement)</li>
                            <li>Regulatory bodies (when required by law)</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">5. Your Rights and Choices</h4>
                        <ul className="ps-3">
                            <li>View and update profile or address</li>
                            <li>Access order history</li>
                            <li>Request account deletion and data removal</li>
                        </ul>
                        <p className="mt-2">
                            To make requests, email us at:{" "}
                            <a
                                href="mailto:support@vegiffyy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-primary"
                            >
                                support@vegiffyy.com
                            </a>
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">6. Data Retention</h4>
                        <p>
                            We retain data only as needed for service delivery, support, and legal obligations.
                            You may request deletion at any time.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">7. Children's Privacy</h4>
                        <p>
                            Vegiffyy is intended for users aged 16+. We do not knowingly collect data from children under 16
                            without parental consent.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="mb-2 fw-semibold">8. Changes to This Policy</h4>
                        <p>
                            We may revise this policy as needed. Continued app usage implies your agreement to the latest version.
                        </p>
                    </div>

                    <div>
                        <h4 className="mb-2 fw-semibold">9. Contact Us</h4>
                        <p>
                            Questions? Reach out at:{" "}
                            <a
                                href="mailto:support@vegiffyy.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-decoration-none text-primary"
                            >
                                support@vegiffyy.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyAndPolicy;
