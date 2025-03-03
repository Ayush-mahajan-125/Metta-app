import React, { useState } from 'react';
import './Modules.scss';
import { Collapse } from 'react-bootstrap';

const Configurations = () => {
    const [open, setOpen] = useState(null);

    const handleToggle = (id) => {
        setOpen(open === id ? null : id);
    };

    return (
        <div className="msm-mt-5 container">

            {/* heading */}
            <div className="text-center py-5">
                <h1 className="display-6  fw-bold mb-3 text-white">
                    COURSE MODULES
                </h1>
                <p className="lead msm-text-secondary fs-6">
                    AVAILABLE ONLINE AND OFFLINE
                </p>
            </div>
            {/* /heading */}

            <div className="config-item ">
                <button
                    className="btn-toggle-collapse"
                    onClick={() => handleToggle(1)}
                    aria-controls="config-collapse-text-1"
                    aria-expanded={open === 1}
                >
                    Module 1
                </button>
                <Collapse in={open === 1}>
                    <div id="config-collapse-text-1" className="collapse-content mb-4">
                        <div className="custom-card">
                            <div className="custom-card-body">
                            Fundamental Analysis 
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="config-item">
                <button
                    className="btn-toggle-collapse"
                    onClick={() => handleToggle(2)}
                    aria-controls="config-collapse-text-2"
                    aria-expanded={open === 2}
                >
                    Module 2
                </button>
                <Collapse in={open === 2}>
                    <div id="config-collapse-text-2" className="collapse-content mb-4">
                        <div className="custom-card">
                            <div className="custom-card-body">
                            Technical Analysis
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="config-item">
                <button
                    className="btn-toggle-collapse"
                    onClick={() => handleToggle(3)}
                    aria-controls="config-collapse-text-3"
                    aria-expanded={open === 3}
                >
                     Module 3
                </button>
                <Collapse in={open === 3}>
                    <div id="config-collapse-text-3" className="collapse-content mb-4">
                        <div className="custom-card">
                            <div className="custom-card-body">
                            Future and Option
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>

            <div className="config-item">
                <button
                    className="btn-toggle-collapse"
                    onClick={() => handleToggle(4)}
                    aria-controls="config-collapse-text-4"
                    aria-expanded={open === 4}
                >
                    Module 4
                </button>
                <Collapse in={open === 4}>
                    <div id="config-collapse-text-4" className="collapse-content mb-4">
                        <div className="custom-card">
                            <div className="custom-card-body">
                            Currency market and Commodity market
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Configurations;
