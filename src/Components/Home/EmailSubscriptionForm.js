import { useState } from "react";

const EmailSubscriptionForm = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            setMessage("Please enter a valid email.");
            return;
        }

        const formData = new FormData();
        formData.append("access_key", "ce4f0829-83e2-43ff-9e0e-1662f17955d1");
        formData.append("email", email);
        formData.append("subject", "New Email Subscription");
        formData.append("message", `New subscriber: ${email}`);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();
            if (data.success) {
                setMessage("Subscription successful! 🎉");
                setEmail("");
            } else {
                setMessage("Something went wrong. Try again.");
            }
        } catch (error) {
            setMessage("Error submitting form. Try again.");
        }
    };

    return (
        <div className="msm-emaill-form text-center container">
            <h2 className="fw-normal text-dark mb-4">Subscribe to our Newsletter</h2>
            <form onSubmit={handleSubmit} className="d-flex m-auto">
                <div className="d-flex justify-content-center align-items-center msm-border-form">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="form-control border-0 "
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className="btn btn-success border-0 mt-0">Subscribe</button>
                </div>
            </form>
            {message && <p className="msm-text-success fw-bold p-2">{message}</p>}
        </div>
    );
};

export default EmailSubscriptionForm;
