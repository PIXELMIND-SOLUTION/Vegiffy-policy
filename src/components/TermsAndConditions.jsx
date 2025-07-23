import React from "react";

const TermsandConditions = () => {
    return (
        <div className="container py-5 px-3" style={{ backgroundColor: "#fff" }}>
            <div className="row justify-content-center">
                <div className="col-xl-10 col-lg-11 col-12">
                    <h1 className="mb-4 text-center fw-bold" style={{ color: "#2b2b2b" }}>
                        Terms and Conditions - Vegiffyy
                    </h1>
                    <p>
                        These Terms and Conditions ("Terms") govern your use of the{" "}
                        <strong>Vegiffyy</strong> application and services ("App"). By accessing or using the App,
                        you agree to comply with and be bound by these Terms.
                    </p>

                    <div className="mb-4">
                        <h4 className="fw-semibold">1. Acceptance of Terms</h4>
                        <p>
                            By registering or using any part of the App, you accept these Terms. If you disagree,
                            do not use the App.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">2. Eligibility</h4>
                        <p>
                            You must be 16 years or older, or have guardian consent, to use Vegiffyy.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">3. User Responsibilities</h4>
                        <ul className="ps-3">
                            <li>Provide correct and up-to-date delivery info.</li>
                            <li>Keep login details confidential.</li>
                            <li>Do not misuse the platform for fraudulent activities.</li>
                            <li>Use the app only for legal and vegetarian food-related purposes.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">4. Food Disclaimer</h4>
                        <p>
                            We verify that all listings are vegetarian. However, we are not liable for errors or
                            omissions in third-party restaurant data. Users must review ingredients and allergy info carefully.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">5. Content Ownership</h4>
                        <p>
                            You own your shared data. By using Vegiffyy, you give us rights to use it for service
                            delivery, operations, and improvements.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">6. Usage Restrictions</h4>
                        <ul className="ps-3">
                            <li>No tampering with the app code or backend systems.</li>
                            <li>No unauthorized commercial use of the platform.</li>
                            <li>No abusive behavior toward service agents or restaurants.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">7. Termination</h4>
                        <p>
                            We may suspend or terminate your account for misuse, policy violation, or illegal activity without notice.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">8. Limitation of Liability</h4>
                        <p>
                            Vegiffyy is not liable for delays, incorrect deliveries, or system failures. Use is at your own risk.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="fw-semibold">9. Changes to Terms</h4>
                        <p>
                            We may revise Terms anytime. Continued use of the app means you accept the latest version.
                        </p>
                    </div>

                    <div>
                        <h4 className="fw-semibold">10. Contact Us</h4>
                        <p>
                            For queries, email us at:{" "}
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

export default TermsandConditions;
