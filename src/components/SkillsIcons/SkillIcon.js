import React from 'react';

import "./SkillIcon.css";

export default function SkillIcon({ Skill }) {
    return (
        <div className="circular-icon">
            <p>{Skill}</p>
        </div>
    )
}
